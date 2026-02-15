"use client";

import { motion } from "framer-motion";

const segments = [
  {
    title: "Fabricators",
    description: "Designed for high-volume sourcing, with fabricator-only pricing, access to new leads, and fulfillment routed directly to your shop.",
    image: "https://images.prismic.io/gs-web/aU1VfXNYClf9oo-u_Fabricators.png",
  },
  {
    title: "Designers & Architects",
    description: "Built to support specification and client-facing workflows, with easy material discovery and TanCash rewards on homeowner-managed projects.",
    image: "https://images.prismic.io/gs-web/aU1VfHNYClf9oo-t_Designers%26Architects.png",
  },
  {
    title: "Builders & Contractors",
    description: "Optimized for speed and reliability across jobs, with nationwide availability and smooth coordination for delivery or pickup.",
    image: "https://images.prismic.io/gs-web/aU1Ve3NYClf9oo-s_BuildersAndcontractors.png",
  },
];

export default function TradeProSegments() {
  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          Built for Trade Professionals
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Whether you fabricate, design, or build — TanClub is made for you
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {segments.map((segment, i) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={segment.image}
                  alt={segment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-3">{segment.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{segment.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
