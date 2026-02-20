"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import { useSession } from "@/components/ai-assistant/use-session";
import { useChat } from "@/components/ai-assistant/use-chat";
import { useLeadCapture } from "@/components/ai-assistant/use-lead-capture";
import { ChatSidebar } from "@/components/ai-assistant/ChatSidebar";
import { ChatMessages } from "@/components/ai-assistant/ChatMessages";
import { ChatInput } from "@/components/ai-assistant/ChatInput";

const isQuoteIntent = (msg: string) =>
  /\b(quote|get a quote|pricing|price list)\b/i.test(msg);

export default function AIAssistantPage() {
  const { sessionId, resetSession } = useSession();
  const { messages, isTyping, sendMessage, addLocalMessage, clearChat } =
    useChat(sessionId);
  const {
    leadStep,
    leadCaptured,
    startCapture,
    processLeadInput,
    resetLeadCapture,
  } = useLeadCapture();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNewChat = useCallback(() => {
    resetSession();
    clearChat();
    resetLeadCapture();
    setSidebarOpen(false);
  }, [resetSession, clearChat, resetLeadCapture]);

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

      // 3. Normal message — send to SourceAI
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
    <div className="flex h-screen bg-white">
      <ChatSidebar
        onNewChat={handleNewChat}
        sidebarOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0 bg-[#f9fafb]">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-200">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-1.5 text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <span className="text-sm font-semibold text-charcoal flex items-center gap-2">
            <img
              src="/images/logo/logo.png"
              alt="PBS"
              className="h-6 w-6 object-contain"
            />
            AI Sourcing Agent
          </span>
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
    </div>
  );
}
