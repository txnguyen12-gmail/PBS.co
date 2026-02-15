"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-navy text-white py-24 md:py-32 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Welcome to TanWinWin
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto"
        >
          Transforming the construction industry with AI
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/ai-assistant"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-orange to-accent-gold text-white font-semibold rounded-full hover:opacity-90 transition-all active:scale-[0.98] shadow-lg shadow-accent-orange/25 text-lg"
          >
            <Sparkles className="w-5 h-5" />
            Try AI Assistant
          </Link>
          <Button href="/surfaces" variant="white" size="lg">
            Explore Surfaces
          </Button>
          <Button href="/multifamily" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
            Multifamily Solutions
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
