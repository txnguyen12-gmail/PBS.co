"use client";

import { motion } from "framer-motion";
import { UserPlus, Tag, Wallet, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    Icon: UserPlus,
    title: "Join PBS Supply Co.",
    description: "Create your free trade account in minutes. No fees, no minimums.",
    accent: "#E8762B",
    bgClass: "bg-[#E8762B]/10",
    iconBgClass: "bg-[#E8762B]/15",
    iconColorClass: "text-[#E8762B]",
    numberColorClass: "text-[#E8762B]",
    borderClass: "border-[#E8762B]/20",
  },
  {
    number: "02",
    Icon: Tag,
    title: "Unlock Trade Pricing",
    description: "Instant access to wholesale rates across 300,000+ products.",
    accent: "#4A6B5E",
    bgClass: "bg-[#4A6B5E]/10",
    iconBgClass: "bg-[#4A6B5E]/15",
    iconColorClass: "text-[#4A6B5E]",
    numberColorClass: "text-[#4A6B5E]",
    borderClass: "border-[#4A6B5E]/20",
  },
  {
    number: "03",
    Icon: Wallet,
    title: "Order & Earn PBScash",
    description: "Purchase materials and earn cashback rewards on every order.",
    accent: "#D4883B",
    bgClass: "bg-[#D4883B]/10",
    iconBgClass: "bg-[#D4883B]/15",
    iconColorClass: "text-[#D4883B]",
    numberColorClass: "text-[#D4883B]",
    borderClass: "border-[#D4883B]/20",
  },
];

export default function ThreeStepProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-3">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Start saving in three simple steps
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Join thousands of trade professionals already sourcing smarter.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 mb-14">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-start md:flex-col gap-5 md:gap-0 md:items-stretch relative">
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`flex-1 rounded-2xl border ${step.borderClass} ${step.bgClass} p-7 flex flex-col gap-5`}
              >
                {/* Top row: number + icon */}
                <div className="flex items-center justify-between">
                  <span className={`text-5xl font-black leading-none ${step.numberColorClass} opacity-25 select-none`}>
                    {step.number}
                  </span>
                  <div className={`w-12 h-12 rounded-xl ${step.iconBgClass} flex items-center justify-center`}>
                    <step.Icon className={`w-6 h-6 ${step.iconColorClass}`} strokeWidth={1.75} />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1.5">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>

              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full border border-gray-100 shadow-sm items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button href="/sign-up" variant="accent" size="lg">
            Create Free Account
          </Button>
          <p className="text-gray-400 text-sm mt-4">No credit card required</p>
        </div>
      </div>
    </section>
  );
}
