"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function PBSClubHero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-charcoal">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-orange/5 translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-gold/5 -translate-x-20 translate-y-20" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-accent-green/5 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-3"
        >
          PBS Club™ by Perfect Building Supply Co.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl"
        >
          The First Loyalty Club for Trade Pros
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-10"
        >
          {["Bigger Discounts", "Free Qualified Leads", "24/7 Priority Support"].map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm"
            >
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {benefit}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button href="/sign-up" variant="white" size="lg">
            Join Our Club
          </Button>
          <Button href="tel:+17139271500" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-charcoal">
            Call An Account Manager
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
