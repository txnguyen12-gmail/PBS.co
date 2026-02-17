"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const benefits = [
  "Access exclusive wholesale pricing",
  "Earn TanCash rewards on every order",
  "Get priority support from sourcing experts",
  "Browse 300,000+ products in stock",
  "Lock in prices for up to 14 days",
];

const roles = [
  "Stone Fabricator",
  "General Contractor",
  "Interior Designer",
  "Architect",
  "Builder / Developer",
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
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
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
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-accent-green" />
          </div>
          <h1 className="text-3xl font-bold text-navy mb-4">Welcome to TanWinTan!</h1>
          <p className="text-gray-600 mb-8">
            Your account request has been received. Our team will reach out shortly to get you set up with trade pricing and full platform access.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-charcoal to-charcoal-light text-white font-semibold rounded-full hover:opacity-90 transition-all"
          >
            Back to Home
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex">
      {/* Left: Benefits */}
      <div className="hidden lg:flex lg:w-1/2 bg-charcoal text-white p-12 xl:p-16 flex-col justify-center">
        <h1 className="text-4xl xl:text-5xl font-bold mb-6">
          Join TanWinTan
        </h1>
        <p className="text-white/70 text-lg mb-10 max-w-md">
          Create your free trade account and start sourcing smarter today.
        </p>
        <ul className="space-y-4">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-accent-orange/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 text-accent-orange" />
              </div>
              <span className="text-white/80">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-2xl lg:hidden font-bold text-navy mb-2">Join TanWinTan</h2>
          <p className="lg:hidden text-gray-600 mb-8">Create your free trade account.</p>
          <h2 className="hidden lg:block text-2xl font-bold text-navy mb-8">Create Your Account</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition-all ${errors.firstName ? "border-red-400" : "border-gray-200"}`}
                  placeholder="John"
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition-all ${errors.lastName ? "border-red-400" : "border-gray-200"}`}
                  placeholder="Smith"
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition-all ${errors.email ? "border-red-400" : "border-gray-200"}`}
                placeholder="john@company.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition-all ${errors.phone ? "border-red-400" : "border-gray-200"}`}
                placeholder="(555) 000-0000"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Company <span className="text-gray-400">(optional)</span></label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition-all"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Role</label>
              <select
                value={formData.role}
                onChange={(e) => handleChange("role", e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition-all appearance-none bg-white ${errors.role ? "border-red-400" : "border-gray-200"}`}
              >
                <option value="">Select your role</option>
                {roles.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
              {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-accent-orange to-accent-gold text-white font-semibold rounded-xl hover:opacity-90 transition-all cursor-pointer active:scale-[0.98]"
            >
              Create Account
            </button>

            <p className="text-xs text-gray-500 text-center">
              By signing up, you agree to our{" "}
              <a href="/terms-of-service" className="text-accent-orange hover:underline">Terms of Service</a>
              {" "}and{" "}
              <a href="/privacy-policy" className="text-accent-orange hover:underline">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
