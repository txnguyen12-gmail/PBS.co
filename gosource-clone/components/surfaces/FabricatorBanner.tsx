"use client";

import { motion } from "framer-motion";
import { Crown, Check } from "lucide-react";
import Button from "@/components/ui/Button";

const fabricatorPerks = [
  "Dedicated support",
  "Priority shipping",
  "Cashback on every order",
];

export default function FabricatorBanner() {
  return (
    <section className="py-16 bg-lavender">
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Stone fabricator? Unlock your extra discount.
            </h2>
            <p className="text-navy/70 text-lg mb-6 max-w-lg">
              Verified fabricators receive <strong>additional discounts</strong> on all wholesale prices.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {fabricatorPerks.map((perk) => (
                <div key={perk} className="flex items-center gap-2 text-navy/80 text-sm">
                  <Check className="w-4 h-4 text-accent-orange" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/sign-up" variant="accent" size="lg">
                Get My Fabricator Discount
              </Button>
              <Button href="/surfaces/fabricators" variant="outline" size="md">
                Learn more
              </Button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-white/60 rounded-full flex items-center justify-center">
              <Crown className="w-24 h-24 md:w-32 md:h-32 text-accent-orange/40" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
