import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Assistant — TanWinWin",
  description: "Chat with TanWinWin's AI assistant to find the right construction materials, get pricing, and connect with our sourcing team.",
};

export default function AIAssistantLayout({ children }: { children: React.ReactNode }) {
  return children;
}
