"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
}

export default function ContactSection({
  title = "Want to learn more? Contact our team",
  subtitle = "Our team of PBS Supply Co. pros is ready to help you.",
}: ContactSectionProps) {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/contact/contact-wrap.png')",
          }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          {title}
        </h2>
        <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a
            href="tel:+17139271500"
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-accent-orange/10 to-accent-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:from-accent-orange/20 group-hover:to-accent-gold/20 transition-colors">
              <Phone className="w-6 h-6 text-accent-orange" />
            </div>
            <h3 className="font-semibold text-navy mb-1">Call Us</h3>
            <p className="text-sm text-gray-500 mb-2">Speak with our sourcing pros</p>
            <span className="text-navy font-semibold">(713) 927-1500</span>
          </a>

          <a
            href="mailto:hello@pbssupply.co"
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-accent-orange/10 to-accent-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:from-accent-orange/20 group-hover:to-accent-gold/20 transition-colors">
              <Mail className="w-6 h-6 text-accent-orange" />
            </div>
            <h3 className="font-semibold text-navy mb-1">Email Us</h3>
            <p className="text-sm text-gray-500 mb-2">Get detailed information</p>
            <span className="text-navy font-semibold">hello@pbssupply.co</span>
          </a>

          <a
            href="/ai-assistant"
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-accent-orange/10 to-accent-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:from-accent-orange/20 group-hover:to-accent-gold/20 transition-colors">
              <MessageCircle className="w-6 h-6 text-accent-orange" />
            </div>
            <h3 className="font-semibold text-navy mb-1">Live Chat</h3>
            <p className="text-sm text-gray-500 mb-2">Get instant answers from our pros</p>
            <span className="text-navy font-semibold">Start a chat</span>
          </a>
        </div>
      </div>
    </section>
  );
}
