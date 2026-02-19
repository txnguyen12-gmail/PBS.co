"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex"
    >
      <div className="w-7 h-7 rounded-md bg-accent-orange flex items-center justify-center flex-shrink-0 mt-1 mr-3">
        <Sparkles className="w-3.5 h-3.5 text-white" />
      </div>
      <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:0ms]" />
          <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:150ms]" />
          <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
    </motion.div>
  );
}
