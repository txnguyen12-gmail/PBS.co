"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Multifamily", href: "/multifamily" },
      { label: "PBS Club™", href: "/pbsclub" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/about-us#offices" },
    ],
  },
  {
    title: "Products & Tools",
    links: [
      { label: "AI Sourcing", href: "/ai-assistant" },
      { label: "Get an Estimate", href: "/surfaces" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Slabs", href: "/collections/slabs" },
      { label: "Tiles", href: "/collections/tile" },
      { label: "Flooring", href: "/collections/all-flooring" },
      { label: "Cabinets", href: "/collections/cabinets" },
      { label: "Sanitaryware", href: "/collections/sanitaryware-fixtures" },
      { label: "Siding & Cladding", href: "/collections/siding-cladding" },
      { label: "Fencing", href: "/collections/fencing" },
      { label: "Electrical", href: "/collections/electrical-wires" },
    ],
  },
  {
    title: "Legal & Policies",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Silica Safety", href: "/silica-safety" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const paymentMethods = [
  { name: "Visa", icon: "/images/payments/visa.svg" },
  { name: "Mastercard", icon: "/images/payments/mastercard.svg" },
  { name: "Amex", icon: "/images/payments/amex.svg" },
  { name: "Discover", icon: "/images/payments/discover.svg" },
  { name: "JCB", icon: "/images/payments/jcb.svg" },
  { name: "Diners Club", icon: "/images/payments/diners-club.svg" },
];

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/ai-assistant") return null;

  return (
    <footer className="bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
            <Link href="/" className="inline-block">
              <img src="/images/logo/pbs-logo.jpeg" alt="Perfect Building Supply Co." className="h-12 w-12 object-contain mb-2" />
            </Link>
            <p className="text-xs text-white/60 leading-snug mb-3">
              The Perfect Building<br />Supply Company
            </p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white/60 hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-sm mb-3 text-white">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              Copyright {new Date().getFullYear()} &copy; Perfect Building Supply Co.
            </p>
            <div className="flex items-center gap-2">
              {paymentMethods.map((card) => (
                <div
                  key={card.name}
                  className="px-1.5 py-1 bg-white/10 border border-white/10 rounded"
                >
                  <img src={card.icon} alt={card.name} className="h-5 w-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
