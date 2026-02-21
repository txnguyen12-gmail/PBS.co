"use client";

import { useCallback, useMemo } from "react";
import { useChat as useAIChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import type { ChatMessage } from "./types";

const transport = new DefaultChatTransport({ api: "/api/chat" });

export const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Welcome to **PBS Supply Co.**! I'm your AI assistant — here to help you find the right building materials at the best prices.\n\nI can help you with:\n- **Product search** — cabinets, flooring, quartz, fixtures & more\n- **Pricing** — wholesale pricing direct from manufacturers\n- **Quotes** — get a quote with direct trucking to your jobsite\n\nWhat are you looking for today?",
  timestamp: new Date(),
  quickActions: [
    "I need cabinets for 20 units",
    "SPC flooring pricing",
    "What brands do you carry?",
    "Get a quote",
  ],
};

/** Extract text content from a UIMessage parts array */
function getTextFromParts(parts: Array<{ type: string; text?: string }>): string {
  return parts
    .filter((p) => p.type === "text" && p.text)
    .map((p) => p.text!)
    .join("");
}

const FOLLOW_UP_MARKER = "<<FOLLOW_UP>>";

/** Parse content into display text + follow-up questions */
function parseFollowUps(raw: string): { content: string; quickActions?: string[] } {
  const idx = raw.indexOf(FOLLOW_UP_MARKER);
  if (idx === -1) return { content: raw };

  const content = raw.slice(0, idx).trimEnd();
  const questions = raw
    .slice(idx + FOLLOW_UP_MARKER.length)
    .split("\n")
    .map((q) => q.trim())
    .filter((q) => q.length > 0);

  return { content, quickActions: questions.length > 0 ? questions : undefined };
}

export function useChat() {
  const {
    messages: aiMessages,
    status,
    sendMessage,
    setMessages: setAIMessages,
  } = useAIChat({ transport });

  const isLoading = status === "submitted" || status === "streaming";

  // Map AI SDK UIMessage[] → ChatMessage[], prepend welcome message
  const messages: ChatMessage[] = useMemo(() => {
    const mapped = aiMessages.map((m) => {
      const raw = getTextFromParts(m.parts);
      const role = m.role as "user" | "assistant";
      if (role === "assistant") {
        const { content, quickActions } = parseFollowUps(raw);
        return { id: m.id, role, content, timestamp: new Date(), quickActions };
      }
      return { id: m.id, role, content: raw, timestamp: new Date() };
    });
    return [WELCOME_MESSAGE, ...mapped];
  }, [aiMessages]);

  const send = useCallback(
    async (text: string) => {
      if (isLoading || !text.trim()) return;
      sendMessage({ text });
    },
    [isLoading, sendMessage],
  );

  // Add a local message (for lead capture flow)
  const addLocalMessage = useCallback(
    (role: "user" | "assistant", content: string) => {
      const id = `${role}_${Date.now()}_${Math.random()}`;
      setAIMessages((prev) => [
        ...prev,
        {
          id,
          role,
          parts: [{ type: "text" as const, text: content }],
        },
      ]);
      return {
        id,
        role,
        content,
        timestamp: new Date(),
      } as ChatMessage;
    },
    [setAIMessages],
  );

  const clearChat = useCallback(() => {
    setAIMessages([]);
  }, [setAIMessages]);

  return {
    messages,
    isTyping: isLoading,
    sendMessage: send,
    addLocalMessage,
    clearChat,
  };
}
