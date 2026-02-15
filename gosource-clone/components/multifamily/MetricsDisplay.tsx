"use client";

import { motion } from "framer-motion";

const capabilities = [
  "Faster turns through coordinated crews",
  "On-schedule renos with vendor alignment",
  "More units online via phased delivery",
  "Weeks saved with efficient turnovers",
  "Quicker rent-ready units at every property",
  "Leased faster with market-ready finishes",
  "Unlock stronger portfolio performance with speedier turnovers",
  "Keep units filled and cash flow steady across every asset",
  "Cut project timelines in half and move residents in sooner",
];

export default function MetricsDisplay() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          What We Deliver
        </h2>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex gap-6 animate-scroll-left w-max">
            {[...capabilities, ...capabilities].map((cap, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-72 p-6 bg-surface-light rounded-2xl border border-gray-100"
              >
                <p className="text-navy font-medium">{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
