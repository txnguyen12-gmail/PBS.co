"use client";

import { motion } from "framer-motion";
import { DollarSign, Coins, Headphones, Package } from "lucide-react";
import Button from "@/components/ui/Button";

const features = [
  {
    icon: DollarSign,
    title: "Save More",
    description: "Access exclusive wholesale pricing powered by TanWinWin's national buying scale, built to make every project more profitable.",
  },
  {
    icon: Coins,
    title: "Earn TanCash",
    description: "Get instant cashback on every order with TanWinWin — reinvest it in your next project and boost your bottom line.",
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
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
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
                <h3 className="text-lg font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Side image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="https://images.prismic.io/gs-web/aVo9TnNYClf9owj5_Fabricator_GoCash_Square.png"
                alt="TanWinWin value proposition"
                className="w-full h-full object-cover"
              />
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
