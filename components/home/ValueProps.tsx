"use client";

import { motion } from "framer-motion";
import { DollarSign, Boxes, Settings, Headphones } from "lucide-react";
import Button from "@/components/ui/Button";

const props = [
  {
    icon: DollarSign,
    title: "Trade Pricing",
    description:
      "Wholesale rates for contractors and builders. Direct partnerships with manufacturers eliminate middleman markups.",
  },
  {
    icon: Boxes,
    title: "Bulk Orders",
    description:
      "Volume discounts on large projects. Whether it's 10 units or 100, we scale pricing to match your needs.",
  },
  {
    icon: Settings,
    title: "Custom Configurations",
    description:
      "Custom sizes, finishes, and project-based quotes. We work with you to spec exactly what your project requires.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Every trade account gets a dedicated account manager. Priority responses, order tracking, and project coordination.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-3">
            Why Trade Pros Choose PBS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Built for How You Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Flexible ordering, transparent pricing, and hands-on support — designed for contractors who need materials on time and on budget.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {props.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-accent-orange/10 rounded-xl flex items-center justify-center mb-5">
                <prop.icon className="w-7 h-7 text-accent-orange" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-3">
                {prop.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/sign-up" variant="accent" size="lg">
            Request Trade Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
