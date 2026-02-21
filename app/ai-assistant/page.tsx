"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

import { useChat } from "@/components/ai-assistant/use-chat";
import { useLeadCapture } from "@/components/ai-assistant/use-lead-capture";
import { ChatMessages } from "@/components/ai-assistant/ChatMessages";
import { ChatInput } from "@/components/ai-assistant/ChatInput";

const isQuoteIntent = (msg: string) =>
  /\b(quote|get a quote|pricing|price list)\b/i.test(msg);

export default function AIAssistantPage() {
  const { messages, isTyping, sendMessage, addLocalMessage, clearChat } =
    useChat();
  const {
    leadStep,
    leadCaptured,
    startCapture,
    processLeadInput,
    resetLeadCapture,
  } = useLeadCapture();

  const handleNewChat = useCallback(() => {
    clearChat();
    resetLeadCapture();
  }, [clearChat, resetLeadCapture]);

  const handleSend = useCallback(
    async (text: string) => {
      // 1. Lead capture active — process inline
      if (leadStep !== "idle" && leadStep !== "submitted") {
        await processLeadInput(text, messages, (role, content) =>
          addLocalMessage(role, content),
        );
        return;
      }

      // 2. Quote intent + lead not yet captured — start capture
      if (isQuoteIntent(text) && !leadCaptured) {
        addLocalMessage("user", text);
        addLocalMessage(
          "assistant",
          "I'd love to get you a personalized quote! Let me collect a few details.\n\nWhat's your **name**?",
        );
        startCapture();
        return;
      }

      // 3. Normal message — send to Claude
      sendMessage(text);
    },
    [
      leadStep,
      leadCaptured,
      messages,
      processLeadInput,
      addLocalMessage,
      startCapture,
      sendMessage,
    ],
  );

  return (
    <div className="flex h-screen flex-col bg-[#f9fafb]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white border-b border-gray-200">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-charcoal"
        >
          <img
            src="/images/logo/logo.png"
            alt="PBS"
            className="h-7 w-7 object-contain"
          />
          AI Sourcing Agent
        </Link>
      </div>

      <ChatMessages
        messages={messages}
        isTyping={isTyping}
        onQuickAction={handleSend}
      />

      {/* Lead capture success banner */}
      {leadCaptured && leadStep === "submitted" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center py-2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 text-xs rounded-full border border-green-200">
            <CheckCircle className="w-3.5 h-3.5" />
            Contact info submitted — our team will reach out soon
          </div>
        </motion.div>
      )}

      <ChatInput
        onSend={handleSend}
        onNewChat={handleNewChat}
        disabled={isTyping}
        leadStep={leadStep}
        showChips={false}
      />
    </div>
  );
}
