"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const metrics = [
  { label: "On Spec", value: "11%", suffix: "Increase in IRR" },
  { label: "On Time", value: "2X", suffix: "Faster turnaround" },
  { label: "On Budget", value: "22%", suffix: "Average savings" },
];

export default function MultifamilyHero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center bg-navy overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-orange/5 -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-accent-gold/5 translate-x-48 translate-y-48" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 to-navy/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-8 max-w-3xl"
        >
          The Future of Multifamily Renovations
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <Button href="#contact" variant="accent" size="lg">
            Schedule a Walk Through
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-8 md:gap-16"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="text-white">
              <div className="text-sm text-white/50 uppercase tracking-wider mb-1">{metric.label}</div>
              <div className="text-3xl md:text-4xl font-bold">{metric.value}</div>
              <div className="text-white/60 text-sm">{metric.suffix}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
