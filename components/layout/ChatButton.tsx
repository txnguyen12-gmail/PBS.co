"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

export default function ChatButton() {
  const pathname = usePathname();

  // Hide on the AI assistant page itself
  if (pathname === "/ai-assistant") return null;

  return (
    <Link
      href="/ai-assistant"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-accent-orange text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:bg-brick transition-colors group"
      aria-label="Chat with AI Sourcing Agent"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-semibold">AI Sourcing</span>
    </Link>
  );
}
