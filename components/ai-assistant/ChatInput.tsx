"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Plus, Send } from "lucide-react";
import type { LeadStep } from "./types";

interface ChatInputProps {
  onSend: (message: string) => void;
  onNewChat: () => void;
  disabled: boolean;
  leadStep: LeadStep;
  suggestionChips?: string[];
  showChips: boolean;
}

export function ChatInput({
  onSend,
  onNewChat,
  disabled,
  leadStep,
  suggestionChips = [],
  showChips,
}: ChatInputProps) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = useCallback(
    (overrideMessage?: string) => {
      const text = overrideMessage || input.trim();
      if (!text) return;
      if (!overrideMessage) setInput("");
      onSend(text);
    },
    [input, onSend],
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const placeholder =
    leadStep === "name"
      ? "Enter your name..."
      : leadStep === "email"
        ? "Enter your email..."
        : leadStep === "phone"
          ? "Enter your phone number..."
          : "What would you like to know?";

  return (
    <div className="flex-shrink-0 border-t border-gray-100 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Suggestion chips */}
        {showChips && suggestionChips.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 pt-4 pb-2">
            {suggestionChips.map((chip) => (
              <button
                key={chip}
                onClick={() => handleSend(chip)}
                className="px-4 py-2 bg-white border border-gray-200 text-sm text-gray-700 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>
        )}

        {/* Input bar */}
        <div className="flex items-center gap-2 py-4">
          <button
            onClick={onNewChat}
            className="p-2.5 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            title="New chat"
          >
            <Plus className="w-5 h-5" />
          </button>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="flex-1 bg-transparent text-gray-800 placeholder:text-gray-400 text-sm focus:outline-none border-b border-gray-200 focus:border-accent-orange py-2 transition-colors"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || disabled}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-charcoal text-white hover:bg-charcoal-light transition-colors disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
