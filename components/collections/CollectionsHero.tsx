"use client";

import { motion } from "framer-motion";

export default function CollectionsHero() {
  return (
    <section className="relative bg-charcoal py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-3"
        >
          Product Catalog
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          Browse Our Collections
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/70 text-lg max-w-2xl mx-auto"
        >
          Trade-grade building materials sourced directly for contractors and
          builders. From cabinets to flooring, everything you need for your next
          project.
        </motion.p>
      </div>
    </section>
  );
}
