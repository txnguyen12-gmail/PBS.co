"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
}

export default function ContactSection({
  title = "Want to learn more? Contact our team",
  subtitle = "Our team of Perfect Building Supply Co. pros is ready to help you.",
}: ContactSectionProps) {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-charcoal-light">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/contact/contact-wrap.png')",
          }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white text-center mb-4">
          {title}
        </h2>
        <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a
            href="tel:+17139271500"
            className="flex flex-col items-center p-6 md:p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="w-14 h-14 bg-accent-orange/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-orange/20 transition-colors">
              <Phone className="w-6 h-6 text-accent-orange" />
            </div>
            <h3 className="font-semibold text-charcoal mb-1">Call Us</h3>
            <p className="text-sm text-gray-500 mb-2">Speak with our sourcing pros</p>
            <span className="text-charcoal font-semibold">(713) 927-1500</span>
          </a>

          <a
            href="mailto:LettonLLC@gmail.com"
            className="flex flex-col items-center p-6 md:p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="w-14 h-14 bg-accent-orange/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-orange/20 transition-colors">
              <Mail className="w-6 h-6 text-accent-orange" />
            </div>
            <h3 className="font-semibold text-charcoal mb-1">Email Us</h3>
            <p className="text-sm text-gray-500 mb-2">Get detailed information</p>
            <span className="text-charcoal font-semibold">LettonLLC@gmail.com</span>
          </a>

          <a
            href="/ai-assistant"
            className="flex flex-col items-center p-6 md:p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="w-14 h-14 bg-accent-orange/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-orange/20 transition-colors">
              <MessageCircle className="w-6 h-6 text-accent-orange" />
            </div>
            <h3 className="font-semibold text-charcoal mb-1">Live Chat</h3>
            <p className="text-sm text-gray-500 mb-2">Get instant answers from our pros</p>
            <span className="text-charcoal font-semibold">Start a chat</span>
          </a>
        </div>
      </div>
    </section>
  );
}
