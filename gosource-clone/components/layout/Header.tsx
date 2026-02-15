"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  {
    label: "Shop",
    children: [
      { label: "Slabs", href: "/collections/slabs" },
      { label: "Tiles", href: "/collections/tile" },
      { label: "Flooring", href: "/collections/all-flooring" },
      { label: "Appliances", href: "/collections/appliance" },
      { label: "Price Drop", href: "/price-drop" },
      { label: "New Arrivals", href: "/collections/new-arrivals" },
    ],
  },
  { label: "Surfaces", href: "/surfaces" },
  { label: "Multifamily", href: "/multifamily" },
  { label: "TanClub™", href: "/goclub" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about-us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-2xl font-bold text-white tracking-tight">
              Tan<span className="text-accent-orange">Win</span>Win
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium hover:text-white/80 transition-colors cursor-pointer">
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 bg-white rounded-xl shadow-xl py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href!}
                  className="px-4 py-2 text-sm font-medium hover:text-white/80 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/sign-up"
              className="px-5 py-2 text-sm font-semibold bg-white text-navy rounded-full hover:bg-gray-100 transition-colors"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="px-5 py-2 text-sm font-semibold border border-white/30 rounded-full hover:bg-white/10 transition-colors"
            >
              Log In
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 cursor-pointer"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setShopOpen(!shopOpen)}
                    className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium cursor-pointer"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${shopOpen ? "rotate-180" : ""}`} />
                  </button>
                  {shopOpen && (
                    <div className="pl-4 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-white/70 hover:text-white"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href!}
                  className="block px-3 py-3 text-sm font-medium hover:text-white/80"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 flex flex-col gap-2">
              <Link
                href="/sign-up"
                className="block text-center px-5 py-2.5 text-sm font-semibold bg-white text-navy rounded-full"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="block text-center px-5 py-2.5 text-sm font-semibold border border-white/30 rounded-full"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
