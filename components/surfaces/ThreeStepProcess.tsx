"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    title: "Join TanWinWin",
    description: "Create your free account as a trade professional.",
    mockupImage: "/images/surfaces/step-01-desktop.png",
  },
  {
    number: "02",
    title: "Unlock Trade Pricing",
    description: "Get access to exclusive pricing built for professionals.",
    mockupImage: "/images/surfaces/step-02-desktop.png",
  },
  {
    number: "03",
    title: "Order & Earn TanCash",
    description: "Purchase materials and earn cashback on every order.",
    mockupImage: "/images/surfaces/step-03-desktop.png",
  },
];

function StepMockup({ step }: { step: typeof steps[number] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-48 h-64 md:w-56 md:h-72 rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
      {imgError ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
          <span className="text-5xl font-bold text-gray-200 mb-2">{step.number}</span>
          <span className="text-xs text-gray-400">Phone Mockup</span>
        </div>
      ) : (
        <img
          src={step.mockupImage}
          alt={`Step ${step.number}: ${step.title}`}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  );
}

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
              {/* Phone mockup image */}
              <div className="mb-6 flex justify-center">
                <StepMockup step={step} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-32 right-0 translate-x-1/2 w-16 h-0.5 bg-navy/10" />
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
