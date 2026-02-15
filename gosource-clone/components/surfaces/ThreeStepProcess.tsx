"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    title: "Join TanWinWin",
    description: "Create your free account as a trade professional.",
  },
  {
    number: "02",
    title: "Unlock Trade Pricing",
    description: "Get access to exclusive pricing built for professionals.",
  },
  {
    number: "03",
    title: "Order & Earn TanCash",
    description: "Purchase materials and earn cashback on every order.",
  },
];

export default function ThreeStepProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          Join Thousands of Pros Saving More with TanWinWin
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-xl mx-auto">
          Simple, transparent, rewarding
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="text-6xl font-bold text-navy/10 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 w-16 h-0.5 bg-navy/10" />
              )}
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button href="/sign-up" variant="primary" size="lg">
            Join Now
          </Button>
        </div>
      </div>
    </section>
  );
}
