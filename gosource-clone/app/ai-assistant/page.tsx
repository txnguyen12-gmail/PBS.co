import { Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "AI Assistant - Coming Soon | TanWinWin",
  description: "TanWinWin's AI-powered sourcing assistant is coming soon. Get instant quotes and material recommendations.",
};

export default function AIAssistantPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-surface-light">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-accent-orange/20 to-accent-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <Sparkles className="w-10 h-10 text-accent-orange" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Coming Soon</h1>
        <p className="text-gray-600 text-lg mb-8">
          Our AI-powered sourcing assistant is being built to help you find materials, compare prices, and get instant quotes — all through a simple conversation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/sign-up" variant="accent" size="lg">
            Join the Waitlist
          </Button>
          <Button href="/" variant="outline" size="lg">
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
