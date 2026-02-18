"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Surfaces",
    description: "Marketplace for surfaces in the U.S.",
    video: "https://gs-web.cdn.prismic.io/gs-web/aRGmcrpReVYa4R0Z_surfaces.mp4",
    href: "/surfaces",
    cta: "Explore",
  },
  {
    title: "Multifamily",
    description: "AI-powered multifamily renovations",
    video: "https://gs-web.cdn.prismic.io/gs-web/aRGmcbpReVYa4R0X_multifamily.mp4",
    href: "/multifamily",
    cta: "Explore",
  },
];

function LogoMark() {
  return (
    <div className="w-[88px] h-[88px] rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
      <span className="text-lg font-bold text-white tracking-tight">
        Tan<span className="text-accent-orange">W</span>W
      </span>
    </div>
  );
}

export default function CTACards() {
  return (
    <section className="pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link
                href={card.href}
                className="group relative block rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[4/3]"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source src={card.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  {/* Logo mark — 88x88 */}
                  <div className="mb-4">
                    <LogoMark />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-white/80 mb-4">{card.description}</p>
                  <span className="inline-flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                    {card.cta}
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
