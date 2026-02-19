"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { ChatMessage } from "./types";
import { ProductCard } from "./ProductCard";
import { QuickActions } from "./QuickActions";

interface ChatBubbleProps {
  message: ChatMessage;
  isLastAssistant: boolean;
  onQuickAction?: (action: string) => void;
}

function formatContent(text: string): React.ReactNode[] {
  return text.split("\n").map((line, i, arr) => (
    <span key={i}>
      {line.split(/(\*\*[^*]+\*\*)/).map((part, j) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={j} className="font-semibold text-charcoal">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={j}>{part}</span>
        ),
      )}
      {i < arr.length - 1 && <br />}
    </span>
  ));
}

export function ChatBubble({
  message,
  isLastAssistant,
  onQuickAction,
}: ChatBubbleProps) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      {!isUser && (
        <div className="w-7 h-7 rounded-md bg-accent-orange flex items-center justify-center flex-shrink-0 mt-1 mr-3">
          <Sparkles className="w-3.5 h-3.5 text-white" />
        </div>
      )}
      <div className="max-w-[85%] sm:max-w-[75%]">
        {/* Text bubble — hidden when content is empty (e.g. cards-only response) */}
        {message.content && (
          <div
            className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
              isUser
                ? "bg-white border border-gray-200 text-charcoal rounded-br-md"
                : "bg-white border border-gray-100 text-gray-800 rounded-bl-md shadow-sm"
            }`}
          >
            {formatContent(message.content)}
          </div>
        )}

        {/* Product cards */}
        {message.cards && message.cards.length > 0 && (
          <div className="mt-2 grid gap-2 grid-cols-1 sm:grid-cols-2">
            {message.cards.map((card) => (
              <ProductCard key={card.product_id} product={card} />
            ))}
          </div>
        )}

        {/* Quick actions — only on last assistant message */}
        {isLastAssistant && message.quickActions && onQuickAction && (
          <QuickActions
            actions={message.quickActions}
            onAction={onQuickAction}
          />
        )}
      </div>
    </motion.div>
  );
}
