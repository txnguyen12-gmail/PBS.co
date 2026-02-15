"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageSquare, Zap, DollarSign, Search, Package, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";

// ━━━ Configure your chat embed URL here ━━━
const CHAT_EMBED_URL = "https://ai-assist.tanwinwin.com";
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const capabilities = [
  {
    icon: Search,
    title: "Instant Material Search",
    description: "Search 300,000+ products across slabs, tiles, flooring, and appliances.",
  },
  {
    icon: DollarSign,
    title: "Real-Time Pricing",
    description: "Compare prices across hundreds of suppliers instantly.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language",
    description: "Just describe what you need — no filters or catalogs required.",
  },
  {
    icon: Zap,
    title: "Instant Quotes",
    description: "Get detailed quotes in seconds, not hours.",
  },
  {
    icon: Package,
    title: "Smart Recommendations",
    description: "Personalized suggestions based on your project history.",
  },
  {
    icon: ShieldCheck,
    title: "Spec Verification",
    description: "Verify specs and compatibility before you commit.",
  },
];

const stats = [
  { value: "300K+", label: "Products indexed" },
  { value: "<3s", label: "Average response" },
  { value: "500+", label: "Supplier network" },
  { value: "24/7", label: "Always available" },
];

export default function AIAssistantPage() {
  return (
    <>
      {/* Chat Embed — full viewport */}
      <section className="relative bg-charcoal">
        {/* Branded bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-orange to-accent-gold flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">TanWinWin AI Assistant</p>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <p className="text-xs text-white/50">Online</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="hidden sm:block text-right">
                <p className="text-sm font-bold text-white">{stat.value}</p>
                <p className="text-[10px] text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Iframe embed */}
        <div className="w-full" style={{ height: "calc(100vh - 120px)" }}>
          <iframe
            src={CHAT_EMBED_URL}
            className="w-full h-full border-0"
            allow="microphone; clipboard-write"
            title="TanWinWin AI Assistant"
          />
        </div>
      </section>

      {/* Capabilities — below the chat */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-navy mb-4"
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
                className="group p-6 rounded-2xl border border-gray-100 hover:border-accent-orange/30 hover:shadow-xl hover:shadow-accent-orange/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-orange/10 to-accent-gold/10 flex items-center justify-center mb-4 group-hover:from-accent-orange/20 group-hover:to-accent-gold/20 transition-colors">
                  <cap.icon className="w-6 h-6 text-accent-orange" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{cap.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-surface-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-navy text-center mb-12"
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
                <div className="text-6xl font-bold text-accent-orange/10 mb-2">{item.step}</div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-orange to-accent-gold flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 right-0 translate-x-1/2 w-16 h-0.5 bg-accent-orange/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-orange/8 rounded-full blur-[120px] animate-glow-drift" />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent-gold/6 rounded-full blur-[100px] animate-glow-drift-reverse" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source Smarter?
          </h2>
          <p className="text-lg text-white/60 mb-8 max-w-lg mx-auto">
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
        </div>
      </section>
    </>
  );
}
