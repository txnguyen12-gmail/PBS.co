"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageSquare, Zap, DollarSign, Search, ArrowRight, Package, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const chatMessages = [
  {
    role: "user" as const,
    text: "Find me white quartz slabs under $45/sqft for a kitchen island",
  },
  {
    role: "assistant" as const,
    text: "I found 23 white quartz slabs under $45/sqft. Here are the top 3 matches for kitchen islands:",
    results: [
      { name: "Calacatta Classique", brand: "Caesarstone", price: "$38/sqft", match: "98%" },
      { name: "Statuario Maximus", brand: "Caesarstone", price: "$42/sqft", match: "95%" },
      { name: "Empira White", brand: "Silestone", price: "$41/sqft", match: "93%" },
    ],
  },
];

const prompts = [
  "Compare Taj Mahal quartzite vs Calacatta marble",
  "Best porcelain tile for high-traffic commercial",
  "Price 200sqft of engineered hardwood, mid-range",
  "Show me trending countertop colors for 2026",
  "Find waterproof vinyl plank under $4/sqft",
  "Get me a quote for a 50-unit bathroom reno",
];

const capabilities = [
  {
    icon: Search,
    title: "Instant Material Search",
    description: "Search 300,000+ products across slabs, tiles, flooring, and appliances. Find exactly what you need in seconds.",
  },
  {
    icon: DollarSign,
    title: "Real-Time Price Comparison",
    description: "Compare prices across hundreds of suppliers instantly. See wholesale vs retail pricing side by side.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Queries",
    description: "Ask questions the way you think. No filters to learn, no catalogs to browse — just describe what you need.",
  },
  {
    icon: Zap,
    title: "Instant Quote Generation",
    description: "Get detailed quotes in seconds, not hours. Include materials, quantities, and delivery estimates.",
  },
  {
    icon: Package,
    title: "Smart Recommendations",
    description: "AI learns your preferences over time. Get personalized suggestions based on your project history and style.",
  },
  {
    icon: ShieldCheck,
    title: "Spec Verification",
    description: "Verify material specifications, certifications, and compatibility before you commit. Reduce costly mistakes.",
  },
];

const stats = [
  { value: "300K+", label: "Products indexed" },
  { value: "<3s", label: "Average response" },
  { value: "500+", label: "Supplier network" },
  { value: "24/7", label: "Always available" },
];

function TypingDots() {
  return (
    <div className="flex gap-1 items-center h-6">
      <div className="w-2 h-2 bg-accent-orange/60 rounded-full animate-bounce [animation-delay:0ms]" />
      <div className="w-2 h-2 bg-accent-orange/60 rounded-full animate-bounce [animation-delay:150ms]" />
      <div className="w-2 h-2 bg-accent-orange/60 rounded-full animate-bounce [animation-delay:300ms]" />
    </div>
  );
}

function ChatDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 2000),
      setTimeout(() => setStep(3), 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden max-w-xl w-full">
      {/* Chat header */}
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/10 bg-white/[0.03]">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-orange to-accent-gold flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">TanWinWin AI</p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <p className="text-xs text-white/50">Online</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="p-5 space-y-4 min-h-[320px]">
        {/* User message */}
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-end"
          >
            <div className="bg-accent-orange/20 border border-accent-orange/30 text-white rounded-2xl rounded-tr-md px-4 py-3 max-w-[85%]">
              <p className="text-sm">{chatMessages[0].text}</p>
            </div>
          </motion.div>
        )}

        {/* Typing indicator */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-start gap-2"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-orange to-accent-gold flex items-center justify-center flex-shrink-0 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="bg-white/10 rounded-2xl rounded-tl-md px-4 py-3">
              <TypingDots />
            </div>
          </motion.div>
        )}

        {/* AI response */}
        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-2"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-orange to-accent-gold flex items-center justify-center flex-shrink-0 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="bg-white/10 rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%]">
              <p className="text-sm text-white/80 mb-3">{chatMessages[1].text}</p>
              <div className="space-y-2">
                {chatMessages[1].results!.map((r, i) => (
                  <motion.div
                    key={r.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 * i }}
                    className="flex items-center justify-between gap-3 bg-white/10 rounded-xl px-3 py-2.5"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white truncate">{r.name}</p>
                      <p className="text-xs text-white/50">{r.brand}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-bold text-accent-orange">{r.price}</p>
                      <p className="text-xs text-accent-green">{r.match} match</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input bar */}
      <div className="px-5 pb-5">
        <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3 border border-white/10">
          <span className="text-sm text-white/30 flex-1">Ask anything about materials...</span>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-accent-orange to-accent-gold flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AIAssistantPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-charcoal">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent-orange/8 rounded-full blur-[120px] animate-glow-drift" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-gold/6 rounded-full blur-[100px] animate-glow-drift-reverse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-orange/3 rounded-full blur-[150px]" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent-orange/10 border border-accent-orange/20 rounded-full text-sm text-accent-orange mb-6"
              >
                <Sparkles className="w-4 h-4" />
                AI-Powered Sourcing
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]"
              >
                Your AI
                <span className="block bg-gradient-to-r from-accent-orange to-accent-gold bg-clip-text text-transparent">
                  Sourcing Expert
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/60 mb-8 max-w-lg"
              >
                Find materials, compare prices, and get instant quotes — just by asking. Like having a sourcing expert who knows every product, every supplier, and every price.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Link
                  href="/sign-up"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-orange to-accent-gold text-white font-semibold rounded-full hover:opacity-90 transition-all active:scale-[0.98] shadow-lg shadow-accent-orange/25 text-lg"
                >
                  <Sparkles className="w-5 h-5" />
                  Try AI Assistant
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all text-lg"
                >
                  See How It Works
                </Link>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-6"
              >
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-white/40">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Chat demo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex justify-center lg:justify-end"
            >
              <ChatDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Try Asking section */}
      <section className="py-16 bg-charcoal border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-white/40 uppercase tracking-wider mb-6">Try asking</p>
          <div className="flex flex-wrap justify-center gap-3">
            {prompts.map((prompt, i) => (
              <motion.div
                key={prompt}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="px-5 py-3 bg-white/5 backdrop-blur-sm rounded-xl text-sm text-white/70 border border-white/10 hover:bg-accent-orange/10 hover:border-accent-orange/20 hover:text-white transition-all cursor-pointer"
              >
                &ldquo;{prompt}&rdquo;
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-navy mb-4"
            >
              What the AI Can Do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              Everything a sourcing expert does — but instant, 24/7, and across your entire supply chain.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-accent-orange/30 hover:shadow-xl hover:shadow-accent-orange/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-orange/10 to-accent-gold/10 flex items-center justify-center mb-5 group-hover:from-accent-orange/20 group-hover:to-accent-gold/20 transition-colors">
                  <cap.icon className="w-7 h-7 text-accent-orange" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{cap.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — steps */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-navy text-center mb-16"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: MessageSquare,
                title: "Ask Anything",
                description: "Describe what you need in plain language. The AI understands materials, specs, budgets, and project requirements.",
              },
              {
                step: "02",
                icon: Zap,
                title: "Get Instant Results",
                description: "In under 3 seconds, receive matched products with real-time pricing, availability, and supplier details.",
              },
              {
                step: "03",
                icon: Clock,
                title: "Quote & Order",
                description: "Lock in pricing, generate a quote, and place your order — all without leaving the conversation.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="text-7xl font-bold text-accent-orange/10 mb-2">{item.step}</div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-orange to-accent-gold flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-16 right-0 translate-x-1/2 w-16 h-0.5 bg-accent-orange/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-orange/8 rounded-full blur-[120px] animate-glow-drift" />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent-gold/6 rounded-full blur-[100px] animate-glow-drift-reverse" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-orange to-accent-gold flex items-center justify-center mx-auto mb-8">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ready to Source Smarter?
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-lg mx-auto">
              Join thousands of trade professionals who source faster, save more, and never wait for a quote again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-orange to-accent-gold text-white font-semibold rounded-full hover:opacity-90 transition-all active:scale-[0.98] shadow-lg shadow-accent-orange/25 text-lg"
              >
                <Sparkles className="w-5 h-5" />
                Get Started Free
              </Link>
              <Link
                href="tel:+14242507795"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all text-lg"
              >
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
