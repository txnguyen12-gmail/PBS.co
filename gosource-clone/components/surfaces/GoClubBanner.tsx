"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function TanClubBanner() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              TanClub™ — Get More From Every Order
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-lg">
              Unlock best wholesale pricing, tier-based TanCash rewards, and top-level priority support with every TanWinWin order.
            </p>
            <Button href="/goclub" variant="white" size="lg">
              Join TanClub™
            </Button>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            {["Dedicated support", "Priority shipping", "Cashback on every order"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-3 bg-white/10 rounded-xl p-4"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
