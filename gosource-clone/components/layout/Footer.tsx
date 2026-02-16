"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Multifamily", href: "/multifamily" },
      { label: "TanClub™", href: "/goclub" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Appliances", href: "/collections/appliance" },
      { label: "Slabs", href: "/collections/slabs" },
      { label: "Flooring", href: "/collections/all-flooring" },
      { label: "Tile", href: "/collections/tile" },
      { label: "Plumbing", href: "/collections/plumbing" },
      { label: "Accessories", href: "/collections/accessories" },
      { label: "Lighting", href: "/collections/lighting" },
      { label: "Artificial Turf", href: "/collections/artificial-turf" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Silica Safety", href: "/silica-safety" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/tanwinwin", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/tanwinwin", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/tanwinwin", label: "LinkedIn" },
];

const paymentMethods = ["Visa", "Amex", "Discover", "JCB", "Diners Club", "Mastercard"];

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/ai-assistant") return null;

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
            <Link href="/">
              <span className="text-xl font-bold text-charcoal tracking-tight inline-block mb-4">
                Tan<span className="text-accent-orange">Win</span>Win
              </span>
            </Link>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-500 hover:text-charcoal"
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
              <h3 className="font-semibold text-sm mb-3 text-charcoal">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-charcoal transition-colors"
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
        <div className="mt-10 pt-6 border-t border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} TanWinWin. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              {paymentMethods.map((card) => (
                <div
                  key={card}
                  className="px-2 py-1 bg-gray-50 border border-gray-100 rounded text-[10px] text-gray-400"
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
