import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Sourcing Agent — Perfect Building Supply Co.",
  description: "Chat with our AI Sourcing Agent to find building materials, get instant pricing, and connect with our supply team.",
};

export default function AIAssistantLayout({ children }: { children: React.ReactNode }) {
  return children;
}
