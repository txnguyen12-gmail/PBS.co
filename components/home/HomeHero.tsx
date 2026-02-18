"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { DollarSign, Package, Settings } from "lucide-react";

const valuePills = [
  { icon: DollarSign, label: "Wholesale Pricing" },
  { icon: Package, label: "Bulk Orders Welcome" },
  { icon: Settings, label: "Custom Configurations" },
];

export default function HomeHero() {
  return (
    <section className="relative min-h-[550px] md:min-h-[650px] flex items-center overflow-hidden bg-charcoal">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent-orange/5 translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-gold/5 -translate-x-24 translate-y-24" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        {/* Logo lockup — desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden sm:flex items-center gap-4 mb-6"
        >
          <img
            src="/images/logo/pbs-logo.jpeg"
            alt="Perfect Building Supply Co."
            className="h-16 md:h-20 w-16 md:w-20 object-contain bg-white rounded-lg p-1"
          />
          <div>
            <p className="text-white/60 text-sm font-medium tracking-wider uppercase">
              The Perfect
            </p>
            <p className="text-white text-lg md:text-xl font-bold leading-tight">
              Building Supply Co.
            </p>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight"
        >
          Cabinets. WPC Walls. Ceilings.
          <br />
          <span className="text-accent-orange">Trade Prices.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-xl lg:text-2xl text-white/70 mb-6 max-w-2xl"
        >
          Wholesale building materials for contractors, builders, and trade
          professionals. Custom configurations, bulk pricing, and dedicated
          support.
        </motion.p>

        <div className="flex flex-wrap gap-3 md:gap-4 mb-8">
          {valuePills.map((pill, i) => (
            <motion.div
              key={pill.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2.5"
            >
              <pill.icon className="w-4 h-4 text-accent-orange flex-shrink-0" />
              <span className="text-white text-sm font-medium">
                {pill.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Button href="/sign-up" variant="accent" size="lg">
            Get a Quote
          </Button>
          <Button
            href="tel:+17139271500"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-charcoal"
          >
            Call (713) 927-1500
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
