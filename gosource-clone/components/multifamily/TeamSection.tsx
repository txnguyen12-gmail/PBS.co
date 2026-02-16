"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { teamMembers } from "@/data/team";

export default function TeamSection() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-widest text-accent-orange font-semibold text-center mb-4">
          Built by Experts
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Where Craft Meets Execution
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-xl mx-auto">
          Our team of experienced professionals is ready to transform your properties
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-charcoal/20 to-slate flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
              </div>
              <h3 className="font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-gray-300 mb-1">{member.role}</p>
              <div className="flex items-center justify-center gap-1 text-xs text-gray-400 mb-2">
                <MapPin className="w-3 h-3" />
                {member.location}
              </div>
              {member.bio && (
                <p className="text-xs text-gray-400 leading-relaxed">{member.bio}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
