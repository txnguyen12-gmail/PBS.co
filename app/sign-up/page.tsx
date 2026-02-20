"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Send,
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
  Clock,
  ArrowRight,
} from "lucide-react";

const benefits = [
  "Wholesale pricing for contractors and builders",
  "Volume discounts on bulk orders",
  "Dedicated sourcing support",
  "90+ products across 9 categories",
  "Fast quotes — usually within 24 hours",
];

const roles = [
  "General Contractor",
  "Builder / Developer",
  "Interior Designer",
  "Architect",
  "Property Manager",
  "Homeowner",
  "Other",
];

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required";
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
    if (!formData.role) newErrors.role = "Please select your role";
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setIsSubmitting(false);
      setSubmitted(true);
    }
  }

  function handleChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  if (submitted) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center bg-surface-light">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-md mx-auto px-4 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check className="w-10 h-10 text-accent-green" strokeWidth={2.5} />
          </motion.div>
          <h1 className="font-heading text-3xl font-extrabold text-charcoal mb-3">
            Message Sent!
          </h1>
          <p className="text-gray-500 mb-3">
            Thanks for reaching out, {formData.firstName}. Our team will review your
            request and get back to you with pricing and details.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-accent-orange font-medium mb-8">
            <Clock className="w-4 h-4" />
            Typical response time: within 24 hours
          </div>
          <div>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-orange text-white font-bold rounded-md hover:bg-brick transition-all"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex">
      {/* Left: Benefits */}
      <div className="hidden lg:flex lg:w-[45%] bg-charcoal text-white p-12 xl:p-16 flex-col justify-center relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-orange/15 rounded-full text-accent-orange text-sm font-medium mb-8">
            <Clock className="w-3.5 h-3.5" />
            Quotes in 24 hours
          </div>

          <h1 className="font-heading text-4xl xl:text-5xl font-extrabold mb-4 leading-tight">
            Get a Quote
            <br />
            <span className="text-accent-orange">from PBS</span>
          </h1>
          <p className="text-white/60 text-lg mb-12 max-w-sm">
            Tell us what you need and our team will follow up with pricing.
          </p>

          <ul className="space-y-5">
            {benefits.map((benefit, i) => (
              <li key={benefit} className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 rounded-full bg-accent-orange/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-accent-orange" />
                </div>
                <span className="text-white/70 text-[15px]">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-14 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm mb-1">Questions? Email us at</p>
            <a
              href="mailto:sales@perfectbuildingsupply.com"
              className="text-white/80 text-sm hover:text-white transition-colors"
            >
              sales@perfectbuildingsupply.com
            </a>
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="w-full lg:w-[55%] flex items-center justify-center p-6 sm:p-12 bg-white">
        <div className="w-full max-w-lg">
          {/* Mobile header */}
          <div className="lg:hidden mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-orange/10 rounded-full text-accent-orange text-sm font-medium mb-4">
              <Clock className="w-3.5 h-3.5" />
              Quotes in 24 hours
            </div>
            <h2 className="text-2xl font-bold text-charcoal mb-1">
              Get a Quote from PBS
            </h2>
            <p className="text-gray-500 text-sm">
              Tell us what you need and we&apos;ll follow up with pricing.
            </p>
          </div>

          {/* Desktop header */}
          <h2 className="hidden lg:block text-2xl font-bold text-charcoal mb-1">
            Request a Quote
          </h2>
          <p className="hidden lg:block text-gray-500 text-sm mb-8">
            Fill out the form below and we&apos;ll get back to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-orange/30 focus:border-accent-orange outline-none transition-all ${
                      errors.firstName ? "border-red-400 bg-red-50/50" : "border-gray-200"
                    }`}
                    placeholder="John"
                  />
                </div>
                <AnimatePresence>
                  {errors.firstName && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="text-red-500 text-xs mt-1.5"
                    >
                      {errors.firstName}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-orange/30 focus:border-accent-orange outline-none transition-all ${
                      errors.lastName ? "border-red-400 bg-red-50/50" : "border-gray-200"
                    }`}
                    placeholder="Smith"
                  />
                </div>
                <AnimatePresence>
                  {errors.lastName && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="text-red-500 text-xs mt-1.5"
                    >
                      {errors.lastName}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-orange/30 focus:border-accent-orange outline-none transition-all ${
                    errors.email ? "border-red-400 bg-red-50/50" : "border-gray-200"
                  }`}
                  placeholder="john@company.com"
                />
              </div>
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-red-500 text-xs mt-1.5"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Phone + Company row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Phone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-orange/30 focus:border-accent-orange outline-none transition-all ${
                      errors.phone ? "border-red-400 bg-red-50/50" : "border-gray-200"
                    }`}
                    placeholder="(555) 000-0000"
                  />
                </div>
                <AnimatePresence>
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="text-red-500 text-xs mt-1.5"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Company{" "}
                  <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-orange/30 focus:border-accent-orange outline-none transition-all"
                    placeholder="Your company"
                  />
                </div>
              </div>
            </div>

            {/* Role chips */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2.5">
                I am a...
              </label>
              <div className="flex flex-wrap gap-2">
                {roles.map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => handleChange("role", role)}
                    className={`px-3.5 py-2 text-sm rounded-lg border transition-all cursor-pointer ${
                      formData.role === role
                        ? "bg-accent-orange text-white border-accent-orange font-medium"
                        : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
              <AnimatePresence>
                {errors.role && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-red-500 text-xs mt-1.5"
                  >
                    {errors.role}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Message{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={3}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-orange/30 focus:border-accent-orange outline-none transition-all resize-none"
                  placeholder="What products are you looking for? Any quantities or project details..."
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 py-3.5 bg-accent-orange text-white font-bold rounded-md transition-all ${
                isSubmitting
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:bg-brick cursor-pointer active:scale-[0.98]"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="opacity-25"
                    />
                    <path
                      d="M4 12a8 8 0 018-8"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="opacity-75"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Request
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-xs text-gray-400 text-center">
              By submitting, you agree to our{" "}
              <a
                href="/terms-of-service"
                className="text-gray-500 hover:text-accent-orange transition-colors"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy-policy"
                className="text-gray-500 hover:text-accent-orange transition-colors"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
