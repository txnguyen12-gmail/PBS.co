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
      { label: "TanClub™", href: "/goclub" },
      { label: "Blog", href: "/blog" },
      { label: "Get in touch", href: "tel:+14242507795" },
    ],
  },
  {
    title: "Products & Tools",
    links: [
      { label: "AI Assistant", href: "/ai-assistant" },
      { label: "TanWinWin Estimate", href: "https://estimate.tanwinwin.com/" },
      { label: "Slabs", href: "/collections/slabs" },
      { label: "Tiles", href: "/collections/tile" },
      { label: "Flooring", href: "/collections/all-flooring" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Plumbing", href: "/collections/plumbing" },
      { label: "Accessories", href: "/collections/accessories" },
      { label: "Lighting", href: "/collections/lighting" },
      { label: "Artificial Turf", href: "/collections/artificial-turf" },
      { label: "Appliances", href: "/collections/appliance" },
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
  { icon: Youtube, href: "https://youtube.com/tanwinwin", label: "YouTube" },
];

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/ai-assistant") return null;

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <Link href="/">
              <span className="text-2xl font-bold text-white tracking-tight inline-block mb-4">
                Tan<span className="text-accent-orange">Win</span>Win
              </span>
            </Link>
            <p className="text-sm text-white/60 mb-6 max-w-xs">
              Transforming the construction industry with AI-powered sourcing and procurement.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
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
              <h3 className="font-semibold text-sm mb-4 text-white/90">{column.title}</h3>
              <ul className="space-y-2.5">
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

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} TanWinWin. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs text-white/40 mr-2">We accept:</span>
              {["Visa", "Mastercard", "Amex", "Discover"].map((card) => (
                <div
                  key={card}
                  className="px-2 py-1 bg-white/10 rounded text-xs text-white/60"
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
