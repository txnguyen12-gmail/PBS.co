"use client";

import { useState, useCallback, useEffect } from "react";
import type {
  ChatMessage,
  ProductCard,
  SSEEvent,
  HistoryResponse,
} from "./types";

const API_BASE = "/api/sourceai";
const TENANT_ID = "pbs";

export const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Welcome to **PBS Supply Co.**! I'm your AI Sourcing Agent — here to help you find the right building materials at the best prices.\n\nI can help you with:\n- **Product search** — slabs, tiles, flooring, cabinets, fixtures & more\n- **Pricing** — lower prices than your current supplier, guaranteed\n- **Quotes** — get a quote with direct trucking to your jobsite\n\nWhat are you looking for today?",
  timestamp: new Date(),
  quickActions: [
    "I need cabinets for 20 units",
    "SPC flooring pricing",
    "What brands do you carry?",
    "Talk to sales",
  ],
};

// SSE stream parser — adapted from SourceAI chat-widget.tsx
async function* streamChatResponse(
  message: string,
  sessionId: string,
): AsyncGenerator<SSEEvent> {
  const response = await fetch(`${API_BASE}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      tenant_id: TENANT_ID,
      session_id: sessionId,
      message,
      context: {
        page_url:
          typeof window !== "undefined" ? window.location.href : undefined,
        referrer:
          typeof document !== "undefined" ? document.referrer : undefined,
      },
    }),
  });

  if (!response.ok || !response.body) {
    throw new Error(`Chat API error: ${response.status}`);
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";

    let currentEvent = "";
    for (const line of lines) {
      if (line.startsWith("event: ")) {
        currentEvent = line.slice(7).trim();
      } else if (line.startsWith("data: ") && currentEvent) {
        yield {
          type: currentEvent as SSEEvent["type"],
          data: JSON.parse(line.slice(6)),
        };
        currentEvent = "";
      }
    }
  }
}

export function useChat(sessionId: string) {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const [historyLoaded, setHistoryLoaded] = useState(false);

  // Load conversation history on mount
  useEffect(() => {
    if (!sessionId) return;

    fetch(
      `${API_BASE}/chat/history?tenant_id=${TENANT_ID}&session_id=${sessionId}`,
    )
      .then((res) => res.json())
      .then((data: HistoryResponse) => {
        if (data.messages && data.messages.length > 0) {
          setMessages(
            data.messages.map((m) => ({
              ...m,
              timestamp: new Date(),
            })),
          );
        }
      })
      .catch((err) => console.error("Failed to load history:", err))
      .finally(() => setHistoryLoaded(true));
  }, [sessionId]);

  // Process SSE events and update message state
  const handleEvents = useCallback(
    async (
      stream: AsyncGenerator<SSEEvent>,
      assistantId: string,
    ) => {
      let fullText = "";

      for await (const event of stream) {
        switch (event.type) {
          case "token":
            fullText += event.data as string;
            setMessages((prev) => {
              const existing = prev.find((m) => m.id === assistantId);
              if (existing) {
                return prev.map((m) =>
                  m.id === assistantId ? { ...m, content: fullText } : m,
                );
              }
              return [
                ...prev,
                {
                  id: assistantId,
                  role: "assistant" as const,
                  content: fullText,
                  timestamp: new Date(),
                },
              ];
            });
            break;
          case "cards": {
            const cards = event.data as ProductCard[];
            setMessages((prev) => {
              const existing = prev.find((m) => m.id === assistantId);
              if (existing) {
                return prev.map((m) =>
                  m.id === assistantId ? { ...m, cards } : m,
                );
              }
              return [
                ...prev,
                {
                  id: assistantId,
                  role: "assistant" as const,
                  content: fullText,
                  cards,
                  timestamp: new Date(),
                },
              ];
            });
            break;
          }
          case "quick_actions": {
            const quickActions = event.data as string[];
            setMessages((prev) => {
              const existing = prev.find((m) => m.id === assistantId);
              if (existing) {
                return prev.map((m) =>
                  m.id === assistantId ? { ...m, quickActions } : m,
                );
              }
              return [
                ...prev,
                {
                  id: assistantId,
                  role: "assistant" as const,
                  content: fullText,
                  quickActions,
                  timestamp: new Date(),
                },
              ];
            });
            break;
          }
          case "done":
            break;
        }
      }
    },
    [],
  );

  const sendMessage = useCallback(
    async (text: string) => {
      if (isTyping || !text.trim() || !sessionId) return;

      const userMsg: ChatMessage = {
        id: `user_${Date.now()}`,
        role: "user",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);

      const assistantId = `assistant_${Date.now()}`;

      try {
        const stream = streamChatResponse(text, sessionId);
        await handleEvents(stream, assistantId);
      } catch (error) {
        console.error("Chat stream error:", error);
        setMessages((prev) => [
          ...prev,
          {
            id: assistantId,
            role: "assistant",
            content:
              "I'm sorry, I'm having trouble connecting right now. Please try again or call us at **(713) 927-1500**.",
            timestamp: new Date(),
          },
        ]);
      } finally {
        setIsTyping(false);
      }
    },
    [isTyping, sessionId, handleEvents],
  );

  // Add a local message (for lead capture flow)
  const addLocalMessage = useCallback(
    (role: "user" | "assistant", content: string) => {
      const msg: ChatMessage = {
        id: `${role}_${Date.now()}_${Math.random()}`,
        role,
        content,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, msg]);
      return msg;
    },
    [],
  );

  const clearChat = useCallback(() => {
    setMessages([WELCOME_MESSAGE]);
  }, []);

  return {
    messages,
    isTyping,
    historyLoaded,
    sendMessage,
    addLocalMessage,
    clearChat,
  };
}
