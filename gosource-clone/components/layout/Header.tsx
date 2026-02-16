"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sparkles, User, ShoppingCart, Search } from "lucide-react";

const categoryNav = [
  { label: "Slabs", href: "/collections/slabs" },
  { label: "Tiles", href: "/collections/tile" },
  { label: "Flooring", href: "/collections/all-flooring" },
  { label: "More Categories", href: "/surfaces" },
  { label: "Price Drops", href: "/collections/price-drops" },
  { label: "New Arrivals", href: "/collections/new-arrivals" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about-us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const pathname = usePathname();

  if (pathname === "/ai-assistant") return null;

  return (
    <header className="sticky top-0 z-50 bg-charcoal">
      {/* Row 1 — Logo | Search | AI Mode | GoClub | Resources | Account | Cart */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xl font-bold text-white tracking-tight">
              Tan<span className="text-accent-orange">Win</span>Win
            </span>
          </Link>

          {/* Search bar */}
          <div className="hidden lg:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full pl-9 pr-4 py-2 text-sm border border-white/20 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-colors"
              />
            </div>
          </div>

          {/* Nav items */}
          <nav className="hidden lg:flex items-center gap-1 ml-auto">
            {/* AI Mode pill — yellow like GoSource */}
            <Link
              href="/ai-assistant"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-charcoal bg-yellow-300 border border-yellow-400 rounded-full hover:bg-yellow-200 transition-colors"
            >
              AI Mode
              <Sparkles className="w-3.5 h-3.5" />
            </Link>

            {/* GoClub */}
            <Link
              href="/goclub"
              className="px-3 py-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              GoClub™
            </Link>

            {/* Resources dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-white/80 hover:text-white transition-colors cursor-pointer">
                Resources
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full right-0 mt-0 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  {resourceLinks.map((link) => (
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

            {/* Account dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAccountOpen(true)}
              onMouseLeave={() => setAccountOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-white/80 hover:text-white transition-colors cursor-pointer">
                <User className="w-4 h-4" />
                Account
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${accountOpen ? "rotate-180" : ""}`} />
              </button>
              {accountOpen && (
                <div className="absolute top-full right-0 mt-0 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  <Link href="/sign-up" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-charcoal">
                    Sign Up
                  </Link>
                  <Link href="/login" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-charcoal">
                    Log In
                  </Link>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link
              href="/surfaces"
              className="p-2 text-white/80 hover:text-white transition-colors relative"
              title="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent-orange text-white text-[10px] rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white cursor-pointer ml-auto"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Row 2 — Categories (left) + Fabricators/Vendors (right) */}
      <div className="hidden lg:block border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-10">
            <div className="flex items-center gap-1">
              {categoryNav.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <Link
                href="/surfaces"
                className="px-3 py-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Fabricators Index
              </Link>
              <Link
                href="/surfaces"
                className="px-3 py-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Vendors Portal
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-1">
            {/* Search */}
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-gray-300"
              />
            </div>

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
            <Link href="/goclub" className="block px-3 py-3 text-sm text-gray-600 hover:text-charcoal" onClick={() => setMobileOpen(false)}>
              GoClub™
            </Link>
            <Link href="/blog" className="block px-3 py-3 text-sm text-gray-600 hover:text-charcoal" onClick={() => setMobileOpen(false)}>
              Blog
            </Link>
            <Link href="/about-us" className="block px-3 py-3 text-sm text-gray-600 hover:text-charcoal" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>

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
