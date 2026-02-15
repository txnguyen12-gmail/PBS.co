"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agreed: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-()+ ]{7,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.agreed) newErrors.agreed = "You must agree to the privacy policy";
    return newErrors;
  }

  function handleChange(field: string, value: string | boolean) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <section id="contact" className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - heading and description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-white/70 mb-8 text-lg leading-relaxed">
              Be part of something bigger &mdash; apply now and help us build the future of multifamily renovations. We&apos;re always looking for talented people to join our team.
            </p>
            <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Schedule Free Consultation</p>
                <p className="text-sm text-white/60">Book a time that works for you</p>
              </div>
            </div>
          </motion.div>

          {/* Right column - form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-white text-navy rounded-2xl p-8 shadow-xl text-center">
                <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-accent-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  We&apos;ve received your request. A renovation expert will contact you within 24 hours to schedule your free consultation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white text-navy rounded-2xl p-8 shadow-xl"
              >
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition-all ${errors.name ? "border-red-400" : "border-gray-200"}`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition-all ${errors.email ? "border-red-400" : "border-gray-200"}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition-all ${errors.phone ? "border-red-400" : "border-gray-200"}`}
                      placeholder="(555) 000-0000"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreed}
                      onChange={(e) => handleChange("agreed", e.target.checked)}
                      className="mt-1"
                    />
                    <span className={`text-sm ${errors.agreed ? "text-red-500" : "text-gray-600"}`}>
                      I agree to the Privacy Policy and consent to being contacted.
                    </span>
                  </label>
                  {errors.agreed && <p className="text-red-500 text-xs -mt-2">{errors.agreed}</p>}
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-accent-orange to-accent-gold text-white font-semibold rounded-xl hover:opacity-90 transition-all cursor-pointer active:scale-[0.98]"
                  >
                    Join Now
                  </button>
                  <a
                    href="#contact"
                    className="block w-full py-3 text-center border-2 border-navy text-navy font-semibold rounded-xl hover:bg-navy hover:text-white transition-all"
                  >
                    Schedule Free Consultation
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
