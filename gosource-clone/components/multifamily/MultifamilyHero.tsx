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
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="https://gs-web.cdn.prismic.io/gs-web/aRGmcbpReVYa4R0X_multifamily.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl"
        >
          The Future of Multifamily Renovations
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-6 md:gap-12 mb-10"
        >
          {metrics.map((metric, i) => (
            <div key={metric.label} className="text-white">
              <div className="text-sm text-white/50 uppercase tracking-wider mb-1">{metric.label}</div>
              <div className="text-3xl md:text-4xl font-bold">{metric.value}</div>
              <div className="text-white/60 text-sm">{metric.suffix}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button href="#contact" variant="white" size="lg">
            Schedule a Walk Through
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex gap-8 text-white/50"
        >
          <span>Hundreds of properties</span>
          <span>Thousands of projects</span>
        </motion.div>
      </div>
    </section>
  );
}
