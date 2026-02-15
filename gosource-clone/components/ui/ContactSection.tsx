"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          Want to learn more? Contact our team
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Our club experts are ready to onboard you!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a
            href="tel:+14242507795"
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-accent-orange/10 to-accent-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:from-accent-orange/20 group-hover:to-accent-gold/20 transition-colors">
              <Phone className="w-6 h-6 text-accent-orange" />
            </div>
            <h3 className="font-semibold text-navy mb-1">Call Us</h3>
            <p className="text-sm text-gray-500 mb-2">Speak with our sourcing pros</p>
            <span className="text-navy font-semibold">(424) 250-7795</span>
          </a>

          <a
            href="mailto:hello@tanwinwin.com"
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-accent-orange/10 to-accent-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:from-accent-orange/20 group-hover:to-accent-gold/20 transition-colors">
              <Mail className="w-6 h-6 text-accent-orange" />
            </div>
            <h3 className="font-semibold text-navy mb-1">Email Us</h3>
            <p className="text-sm text-gray-500 mb-2">Get detailed information</p>
            <span className="text-navy font-semibold">hello@tanwinwin.com</span>
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
