"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Crown, Check } from "lucide-react";
import Button from "@/components/ui/Button";

const fabricatorPerks = [
  "Dedicated support",
  "Priority shipping",
  "Volume discounts",
];

function FabricatorImage() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="w-full h-full bg-white/60 rounded-2xl flex items-center justify-center">
        <Crown className="w-24 h-24 text-accent-orange/30" />
      </div>
    );
  }

  return (
    <img
      src="/images/surfaces/fabricator-banner-desktop.png"
      alt="Stone fabricator at work"
      className="w-full h-full object-cover rounded-2xl"
      onError={() => setImgError(true)}
    />
  );
}

export default function FabricatorBanner() {
  return (
    <section className="py-16 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-accent-orange font-semibold text-sm uppercase tracking-wider mb-4">
              <Crown className="w-5 h-5" />
              Fabricator Exclusive
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-charcoal mb-4">
              Stone fabricator? Unlock your extra discount.
            </h2>
            <p className="text-charcoal/70 text-lg mb-6 max-w-lg">
              Verified fabricators receive <strong>additional discounts</strong> on all wholesale prices.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {fabricatorPerks.map((perk) => (
                <div key={perk} className="flex items-center gap-2 text-charcoal/80 text-sm">
                  <Check className="w-4 h-4 text-accent-orange" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/sign-up" variant="accent" size="lg">
                Get My Fabricator Discount
              </Button>
              <Button href="/about-us" variant="outline" size="md">
                Learn more
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <div className="aspect-[4/3] overflow-hidden">
              <FabricatorImage />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
