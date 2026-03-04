import type { Metadata } from "next";
import AIAssistantClient from "./AIAssistantClient";

export const metadata: Metadata = {
  title: "AI Sourcing Agent | Perfect Building Supply Co.",
  description:
    "Chat with our AI sourcing agent to find building materials, get product recommendations, and request quotes instantly.",
  alternates: { canonical: "/ai-assistant" },
};

export default function AIAssistantPage() {
  return <AIAssistantClient />;
}
