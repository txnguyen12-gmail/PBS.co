"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    title: "Get Started with Free Trade Account",
    description: "Sign up in minutes to unlock exclusive pricing, rewards, and tools designed to streamline your sourcing and grow your business.",
    icon: "https://gs-web.cdn.prismic.io/gs-web/aS6mQnNYClf9nrao_01icon.svg",
  },
  {
    number: "02",
    title: "Purchase Materials and Earn TanCash",
    description: "Earn TanCash on every order. The more you source through TanWinWin, the more you earn — helping you boost profits with every project.",
    icon: "https://gs-web.cdn.prismic.io/gs-web/aS6mYXNYClf9nra3_02icon.svg",
  },
  {
    number: "03",
    title: "Use TanCash on Your Next Order",
    description: "Redeem your TanCash balance on future purchases to enjoy greater savings on premium materials. Your sourcing gets smarter every time you buy.",
    icon: "https://gs-web.cdn.prismic.io/gs-web/aS6ml3NYClf9nrbX_03icon.svg",
  },
];

export default function GoCashSteps() {
  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sm text-navy/60 uppercase tracking-wider font-medium">
            Simple, transparent, rewarding
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          How TanCash Works
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden aspect-video bg-navy order-2 lg:order-1"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://gs-web.cdn.prismic.io/gs-web/aU1KmnNYClf9oo9Z__model_veo3_202512251619_d079i.mp4" type="video/mp4" />
            </video>
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
                I want TanCash
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
