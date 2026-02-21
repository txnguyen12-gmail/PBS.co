"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import type { ChatMessage } from "./types";
import { QuickActions } from "./QuickActions";
import { productLinkRegex, getProductUrl } from "@/lib/product-links";

interface ChatBubbleProps {
  message: ChatMessage;
  isLastAssistant: boolean;
  onQuickAction?: (action: string) => void;
}

/** Turn a plain text segment into fragments with product hyperlinks */
function linkifyProducts(text: string, keyPrefix: string): React.ReactNode[] {
  // Reset regex state (global flag)
  productLinkRegex.lastIndex = 0;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = productLinkRegex.exec(text)) !== null) {
    const name = match[1];
    const url = getProductUrl(name);
    if (!url) continue;

    // Text before match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(
      <Link
        key={`${keyPrefix}-link-${match.index}`}
        href={url}
        className="text-accent-orange underline decoration-accent-orange/30 hover:decoration-accent-orange transition-colors"
      >
        {name}
      </Link>,
    );
    lastIndex = match.index + name.length;
  }

  // Remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

function formatContent(text: string): React.ReactNode[] {
  return text.split("\n").map((line, i, arr) => (
    <span key={i}>
      {line.split(/(\*\*[^*]+\*\*)/).map((part, j) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={j} className="font-semibold text-charcoal">
            {linkifyProducts(part.slice(2, -2), `${i}-${j}`)}
          </strong>
        ) : (
          <span key={j}>{linkifyProducts(part, `${i}-${j}`)}</span>
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
