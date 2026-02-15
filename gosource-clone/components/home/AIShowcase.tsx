"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Sourcing",
    description: "Our AI assistant helps you find the perfect materials instantly, comparing prices across hundreds of suppliers.",
  },
  {
    icon: Zap,
    title: "Instant Quotes",
    description: "Get real-time pricing on any surface material. No more waiting hours for a response.",
  },
  {
    icon: Shield,
    title: "Unbeatable Prices",
    description: "Direct partnerships with vendors and distributors eliminate middleman markups.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Track your spending, TanCash earnings, and project history all in one dashboard.",
  },
];

const promptCards = [
  "Find me white quartz slabs under $45/sqft",
  "Compare Caesarstone vs Silestone for kitchen countertops",
  "What's the best porcelain tile for high-traffic areas?",
];

export default function AIShowcase() {
  return (
    <section className="py-20 bg-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6"
          >
            <Sparkles className="w-4 h-4" />
            AI-Powered Platform
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            The Future of Construction Sourcing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Experience a smarter way to source materials with our AI-powered platform
          </motion.p>
        </div>

        {/* Prompt cards */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {promptCards.map((prompt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="px-5 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-sm text-white/80 border border-white/10 hover:bg-white/15 transition-colors cursor-pointer"
            >
              &ldquo;{prompt}&rdquo;
            </motion.div>
          ))}
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-orange/20 to-accent-gold/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent-orange" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-white/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
