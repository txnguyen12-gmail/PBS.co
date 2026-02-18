"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    title: "Get Started with Free Trade Account",
    description: "Sign up in minutes to unlock exclusive pricing, rewards, and tools designed to streamline your sourcing and grow your business.",
    icon: "/images/icons/step-01.svg",
  },
  {
    number: "02",
    title: "Purchase Materials and Earn PBScash",
    description: "Earn PBScash on every order. The more you source through Perfect Building Supply Co., the more you earn — helping you boost profits with every project.",
    icon: "/images/icons/step-02.svg",
  },
  {
    number: "03",
    title: "Use PBScash on Your Next Order",
    description: "Redeem your PBScash balance on future purchases to enjoy greater savings on premium materials. Your sourcing gets smarter every time you buy.",
    icon: "/images/icons/step-03.svg",
  },
];

export default function PBSCashSteps() {
  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sm text-navy/60 uppercase tracking-wider font-medium">
            Simple, transparent, rewarding
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          How PBScash Works
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden aspect-video bg-charcoal order-2 lg:order-1"
          >
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent-orange/10 translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent-gold/10 -translate-x-8 translate-y-8" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-navy/90" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
              <div className="w-16 h-16 rounded-2xl bg-accent-orange/15 flex items-center justify-center mb-4">
                <span className="text-accent-orange text-2xl font-bold">$</span>
              </div>
              <p className="text-white font-bold text-xl mb-2">PBScash Rewards</p>
              <p className="text-white/50 text-sm">Earn cashback on every order</p>
            </div>
          </motion.div>

          <div className="space-y-8 order-1 lg:order-2">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-accent-orange/10 flex items-center justify-center">
                    <img src={step.icon} alt="" className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
            <div className="pt-4">
              <Button href="/sign-up" variant="primary" size="lg">
                I want PBScash
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
