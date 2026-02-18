"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

function BannerImage() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="w-full h-full bg-white/10 rounded-2xl flex items-center justify-center">
        <span className="text-white/20 text-3xl font-bold">PBS Club™</span>
      </div>
    );
  }

  return (
    <img
      src="/images/surfaces/why-choose-gosource.png"
      alt="Builders using PBS Club"
      className="w-full h-full object-cover rounded-2xl"
      onError={() => setImgError(true)}
    />
  );
}

export default function GoClubBanner() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-4">
              Loyalty That Pays Off
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              PBS Club™ — Get More From Every Order
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-lg">
              Unlock best wholesale pricing, tier-based PBScash rewards, and top-level priority support with every PBS Supply Co. order.
            </p>
            <Button href="/goclub" variant="accent" size="lg">
              Join PBS Club™
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/3] overflow-hidden"
          >
            <BannerImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
