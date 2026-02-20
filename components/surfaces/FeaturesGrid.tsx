"use client";

import { motion } from "framer-motion";
import { DollarSign, Coins, Headphones, Package } from "lucide-react";
import Button from "@/components/ui/Button";

const features = [
  {
    icon: DollarSign,
    title: "Save More",
    description: "Access exclusive wholesale pricing powered by Perfect Building Supply Co.'s national buying scale, built to make every project more profitable.",
  },
  {
    icon: Coins,
    title: "Volume Discounts",
    description: "The more you order, the more you save. Unlock deeper wholesale pricing with Perfect Building Supply Co. on every project.",
  },
  {
    icon: Headphones,
    title: "Get Priority Support",
    description: "Enjoy dedicated trade assistance with faster response times and smooth coordination across every step.",
  },
  {
    icon: Package,
    title: "Largest Inventory",
    description: "Nationwide surface inventories from top brands, centralized into one powerful marketplace for trade pros.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider text-center mb-4">
          A marketplace designed for trade professionals
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-charcoal text-center mb-4">
          A Surface Ordering Experience Like Never Before
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Everything you need to source surfaces smarter, faster, and more profitably.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-accent-orange/10 rounded-xl flex items-center justify-center mb-5">
                  <feature.icon className="w-7 h-7 text-accent-orange" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Trade pricing card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-72 h-96 rounded-3xl bg-charcoal overflow-hidden shadow-2xl flex flex-col justify-between p-8">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-accent-orange translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 left-0 w-36 h-36 rounded-full bg-accent-orange -translate-x-10 translate-y-10" />
              </div>

              {/* Top: logo + label */}
              <div className="relative z-10 flex items-center gap-3">
                <img src="/images/logo/logo.png" alt="PBS" className="h-10 w-10 object-contain" />
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-widest">Perfect Building Supply</p>
                  <p className="text-white font-semibold text-sm">Trade Pricing</p>
                </div>
              </div>

              {/* Middle: savings */}
              <div className="relative z-10 text-center">
                <p className="text-white/50 text-sm mb-1">Average Savings</p>
                <p className="text-5xl font-bold text-accent-orange leading-tight">20%</p>
                <p className="text-white/60 text-xs mt-2">Off retail on every order</p>
              </div>

              {/* Bottom: notification */}
              <div className="relative z-10 bg-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-orange/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-orange text-base">✓</span>
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Trade pricing unlocked!</p>
                  <p className="text-white/50 text-xs">Wholesale rates on 300,000+ products</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Button href="/sign-up" variant="accent" size="lg">
            Create an Account
          </Button>
        </div>
      </div>
    </section>
  );
}
