"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { pricingPackages } from "@/data/pricing";

export default function PricingPackages() {
  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-widest text-accent-orange font-semibold text-center mb-4">
          TanWinWin Renovation Packages
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          Compare Renovation Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPackages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow ${
                pkg.popular ? "ring-2 ring-accent-orange" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-orange text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-navy mb-2">{pkg.name}</h3>
              <div className="mb-1">
                <span className="text-3xl font-bold text-navy">{pkg.price}</span>
                {pkg.price !== "Custom" && <span className="text-gray-500 text-sm">/unit</span>}
              </div>
              <p className="text-sm text-gray-500 mb-2">{pkg.turnaround} turnaround</p>
              <p className="text-sm text-gray-600 mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="#contact"
                variant={pkg.popular ? "primary" : "outline"}
                size="md"
                className="w-full"
              >
                {pkg.ctaText}
              </Button>
              <Button
                href="#contact"
                variant="outline"
                size="md"
                className="w-full mt-3"
              >
                See Specifications
              </Button>
              {/* Product Gallery */}
              <div className="grid grid-cols-3 gap-2 mt-6">
                {[1, 2, 3, 4, 5, 6].map((img) => (
                  <div
                    key={img}
                    className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center"
                  >
                    <span className="text-xs text-gray-400">{img}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
