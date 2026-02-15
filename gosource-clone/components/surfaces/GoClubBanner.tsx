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
          className="text-center"
        >
          <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-4">
            Loyalty That Pays Off
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            TanClub™ — Get More From Every Order
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Unlock best wholesale pricing, tier-based TanCash rewards, and top-level priority support with every TanWinWin order.
          </p>
          <Button href="/goclub" variant="accent" size="lg">
            Join TanClub™
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
