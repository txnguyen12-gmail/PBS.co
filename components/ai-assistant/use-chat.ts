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
    const mapped = aiMessages.map((m) => ({
      id: m.id,
      role: m.role as "user" | "assistant",
      content: getTextFromParts(m.parts),
      timestamp: new Date(),
    }));
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
