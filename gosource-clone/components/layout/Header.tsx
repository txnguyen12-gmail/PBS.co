"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sparkles, User, ShoppingCart } from "lucide-react";

const mainNav = [
  { label: "GoClub™", href: "/goclub" },
  { label: "Vendor Portal", href: "/surfaces" },
  { label: "Fabricators Index", href: "/surfaces" },
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
  const [shopOpen, setShopOpen] = useState(false);
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

          {/* Desktop nav — AI Mode + Shop + links */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* AI Mode inline toggle */}
            <Link
              href="/ai-assistant"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-charcoal hover:text-accent-orange transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent-orange" />
              AI Mode
            </Link>

            {/* Shop dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-charcoal transition-colors cursor-pointer">
                Shop
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${shopOpen ? "rotate-180" : ""}`} />
              </button>
              {shopOpen && (
                <div className="absolute top-full left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  {categoryNav.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-charcoal"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="w-px h-4 bg-gray-200 mx-1" />

            {/* Main nav links */}
            {mainNav.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-600 hover:text-charcoal transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side — Account + Cart */}
          <div className="hidden lg:flex items-center gap-1">
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

            {/* Main nav */}
            {mainNav.map((link) => (
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
