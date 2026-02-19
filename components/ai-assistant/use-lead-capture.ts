"use client";

import { useState, useCallback } from "react";
import type { ChatMessage, LeadData, LeadStep } from "./types";

async function submitLead(
  lead: LeadData,
  chatHistory: ChatMessage[],
): Promise<boolean> {
  const payload = {
    ...lead,
    source: "ai-assistant",
    capturedAt: new Date().toISOString(),
    chatSummary: chatHistory
      .slice(-10)
      .map((m) => `${m.role}: ${m.content.slice(0, 200)}`)
      .join("\n"),
  };

  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    console.log("Lead webhook not available — logged to console", payload);
    return false;
  }
}

export function useLeadCapture() {
  const [leadStep, setLeadStep] = useState<LeadStep>("idle");
  const [leadData, setLeadData] = useState<LeadData>({
    name: "",
    email: "",
    phone: "",
  });
  const [leadCaptured, setLeadCaptured] = useState(false);

  const startCapture = useCallback(() => {
    if (!leadCaptured) {
      setLeadStep("name");
    }
  }, [leadCaptured]);

  const processLeadInput = useCallback(
    async (
      userInput: string,
      messages: ChatMessage[],
      addMessage: (role: "user" | "assistant", content: string) => void,
    ): Promise<boolean> => {
      if (leadStep === "idle" || leadStep === "submitted") return false;

      addMessage("user", userInput);

      if (leadStep === "name") {
        setLeadData((prev) => ({ ...prev, name: userInput }));
        addMessage(
          "assistant",
          `Thanks, ${userInput}! What's the best **email** to reach you at?`,
        );
        setLeadStep("email");
        return true;
      }

      if (leadStep === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userInput)) {
          addMessage(
            "assistant",
            "That doesn't look like a valid email. Could you double-check and try again?",
          );
          return true;
        }
        setLeadData((prev) => ({ ...prev, email: userInput }));
        addMessage(
          "assistant",
          "And your **phone number**? This helps our team reach you faster for time-sensitive quotes.",
        );
        setLeadStep("phone");
        return true;
      }

      if (leadStep === "phone") {
        const cleaned = userInput.replace(/\D/g, "");
        if (cleaned.length < 10) {
          addMessage(
            "assistant",
            "Please enter a valid phone number (at least 10 digits).",
          );
          return true;
        }
        const finalLead = { ...leadData, phone: userInput };
        setLeadData(finalLead);
        setLeadStep("submitted");
        setLeadCaptured(true);

        await submitLead(finalLead, messages);

        addMessage(
          "assistant",
          `You're all set, ${finalLead.name}!\n\nOur sourcing team will reach out within **1 business hour** with personalized pricing for your project.\n\nIn the meantime, you can also call us directly: **(713) 927-1500**\n\nIs there anything else I can help you with?`,
        );
        return true;
      }

      return false;
    },
    [leadStep, leadData],
  );

  const resetLeadCapture = useCallback(() => {
    setLeadStep("idle");
    setLeadData({ name: "", email: "", phone: "" });
    setLeadCaptured(false);
  }, []);

  return {
    leadStep,
    leadCaptured,
    startCapture,
    processLeadInput,
    resetLeadCapture,
  };
}
