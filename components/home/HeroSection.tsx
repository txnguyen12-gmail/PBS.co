"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-white pt-12 pb-10 md:pt-16 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-3"
        >
          Welcome to Perfect Building Supply Co.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto"
        >
          Lower prices than your current supplier — guaranteed. Direct trucking to your jobsite.
        </motion.p>
      </div>
    </section>
  );
}
