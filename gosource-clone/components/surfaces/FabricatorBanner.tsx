"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function FabricatorBanner() {
  return (
    <section className="py-16 bg-lavender">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Are You a Stone Fabricator?
          </h2>
          <p className="text-navy/70 text-lg mb-8 max-w-2xl mx-auto">
            Get exclusive fabricator pricing, dedicated support, and access to the largest slab inventory in the country.
          </p>
          <Button href="/sign-up" variant="primary" size="lg">
            Get My Fabricator Discount
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
