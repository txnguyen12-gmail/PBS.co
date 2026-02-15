"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sparkles, User, ShoppingCart } from "lucide-react";

const primaryNav = [
  { label: "TanClub™", href: "/goclub" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about-us" },
];

const categoryNav = [
  { label: "Slabs", href: "/collections/slabs" },
  { label: "Tiles", href: "/collections/tile" },
  { label: "Flooring", href: "/collections/all-flooring" },
  { label: "Appliances", href: "/collections/appliance" },
  { label: "Price Drop", href: "/price-drop" },
  { label: "New Arrivals", href: "/collections/new-arrivals" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  if (pathname === "/ai-assistant") return null;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Primary row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xl font-bold text-charcoal tracking-tight">
              Tan<span className="text-accent-orange">Win</span>Win
            </span>
          </Link>

          {/* Desktop primary nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {primaryNav.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-600 hover:text-charcoal transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/ai-assistant"
              className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-charcoal border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent-orange" />
              AI Mode
            </Link>
            <Link
              href="/sign-up"
              className="p-2 text-gray-500 hover:text-charcoal transition-colors"
              title="Account"
            >
              <User className="w-5 h-5" />
            </Link>
            <Link
              href="/surfaces"
              className="p-2 text-gray-500 hover:text-charcoal transition-colors relative"
              title="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-charcoal text-white text-[10px] rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-600 cursor-pointer"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Secondary row — categories */}
      <div className="hidden lg:block border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 h-10">
            {categoryNav.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-sm text-gray-500 hover:text-charcoal transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-1">
            {/* AI Mode link */}
            <Link
              href="/ai-assistant"
              className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-charcoal"
              onClick={() => setMobileOpen(false)}
            >
              <Sparkles className="w-4 h-4 text-accent-orange" />
              AI Mode
            </Link>

            <div className="border-t border-gray-100 my-2" />

            {/* Primary nav */}
            {primaryNav.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-3 py-3 text-sm text-gray-600 hover:text-charcoal"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-gray-100 my-2" />

            {/* Category nav */}
            <p className="px-3 text-xs font-medium text-gray-400 uppercase tracking-wider pt-1">
              Shop
            </p>
            {categoryNav.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-3 py-2.5 text-sm text-gray-600 hover:text-charcoal"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-gray-100 my-2" />

            <div className="flex gap-2 pt-1">
              <Link
                href="/sign-up"
                className="flex-1 text-center px-4 py-2.5 text-sm font-medium bg-charcoal text-white rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="flex-1 text-center px-4 py-2.5 text-sm font-medium border border-gray-200 text-charcoal rounded-lg"
                onClick={() => setMobileOpen(false)}
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
