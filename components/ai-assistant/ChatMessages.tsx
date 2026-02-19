"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import type { ChatMessage } from "./types";
import { ChatBubble } from "./ChatBubble";
import { TypingIndicator } from "./TypingIndicator";

interface ChatMessagesProps {
  messages: ChatMessage[];
  isTyping: boolean;
  onQuickAction: (action: string) => void;
}

export function ChatMessages({
  messages,
  isTyping,
  onQuickAction,
}: ChatMessagesProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const lastAssistantIdx = messages.reduce(
    (acc, msg, i) => (msg.role === "assistant" ? i : acc),
    -1,
  );

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <ChatBubble
              key={msg.id}
              message={msg}
              isLastAssistant={i === lastAssistantIdx}
              onQuickAction={onQuickAction}
            />
          ))}
        </AnimatePresence>

        {isTyping && <TypingIndicator />}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
