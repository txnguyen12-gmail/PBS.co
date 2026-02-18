"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, Sparkles, User, ShoppingCart, Search } from "lucide-react";

interface SubMenuItem {
  label: string;
  href: string;
}

interface SubMenuGroup {
  title?: string;
  items: SubMenuItem[];
}

interface CategoryNavItem {
  label: string;
  href: string;
  submenu?: SubMenuGroup[];
}

const categoryNav: CategoryNavItem[] = [
  {
    label: "Slabs",
    href: "/collections/slabs",
    submenu: [
      {
        title: "By Type",
        items: [
          { label: "All Slabs", href: "/collections/slabs" },
          { label: "Quartz", href: "/collections/quartz" },
          { label: "Quartzite", href: "/collections/quartzite" },
          { label: "Marble", href: "/collections/marble" },
          { label: "Granite", href: "/collections/granite" },
          { label: "Porcelain Slabs", href: "/collections/porcelain-slabs" },
        ],
      },
      {
        title: "By Brand",
        items: [
          { label: "MSI", href: "/collections/slabs?brand=msi" },
          { label: "Caesarstone", href: "/collections/slabs?brand=caesarstone" },
          { label: "Cambria", href: "/collections/slabs?brand=cambria" },
          { label: "Silestone", href: "/collections/slabs?brand=silestone" },
          { label: "Dekton", href: "/collections/slabs?brand=dekton" },
          { label: "Daltile", href: "/collections/slabs?brand=daltile" },
          { label: "Raphael Stone", href: "/collections/slabs?brand=raphael-stone" },
          { label: "LX Hausys", href: "/collections/slabs?brand=lx-hausys" },
        ],
      },
    ],
  },
  {
    label: "Tiles",
    href: "/collections/tile",
    submenu: [
      {
        items: [
          { label: "All Tiles", href: "/collections/tile" },
          { label: "Porcelain", href: "/collections/porcelain-tile" },
          { label: "Ceramic", href: "/collections/ceramic-tile" },
          { label: "Mosaic", href: "/collections/mosaic-tile" },
          { label: "Wall Tiles", href: "/collections/wall-tile" },
        ],
      },
    ],
  },
  {
    label: "Flooring",
    href: "/collections/all-flooring",
    submenu: [
      {
        items: [
          { label: "All Flooring", href: "/collections/all-flooring" },
          { label: "Hardwood", href: "/collections/hardwood" },
          { label: "Vinyl", href: "/collections/vinyl" },
          { label: "Laminate", href: "/collections/laminate" },
        ],
      },
    ],
  },
  {
    label: "Building Materials",
    href: "/collections/building-materials",
    submenu: [
      {
        title: "Interior",
        items: [
          { label: "Cabinets", href: "/collections/cabinets" },
          { label: "WPC Walls", href: "/collections/wpc-walls" },
          { label: "Ceilings", href: "/collections/ceilings" },
          { label: "SPC/LVP Flooring", href: "/collections/spc-lvp-flooring" },
        ],
      },
      {
        title: "Exterior & More",
        items: [
          { label: "Fencing", href: "/collections/fencing" },
          { label: "Siding & Cladding", href: "/collections/siding-cladding" },
          { label: "Artificial Turf", href: "/collections/artificial-turf" },
        ],
      },
    ],
  },
  {
    label: "Fixtures & Systems",
    href: "/collections/fixtures",
    submenu: [
      {
        items: [
          { label: "Sanitaryware & Fixtures", href: "/collections/sanitaryware-fixtures" },
          { label: "Plumbing", href: "/collections/plumbing" },
          { label: "Lighting", href: "/collections/lighting" },
          { label: "Electrical Wires", href: "/collections/electrical-wires" },
          { label: "Gas & Water Accessories", href: "/collections/gas-water-accessories" },
        ],
      },
    ],
  },
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
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState<string | null>(null);
  const submenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const handleSubmenuEnter = useCallback((label: string) => {
    if (submenuTimeout.current) {
      clearTimeout(submenuTimeout.current);
      submenuTimeout.current = null;
    }
    setActiveSubmenu(label);
  }, []);

  const handleSubmenuLeave = useCallback(() => {
    submenuTimeout.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 150);
  }, []);

  if (pathname === "/ai-assistant") return null;

  return (
    <header className="sticky top-0 z-50 bg-charcoal">
      {/* Row 1 — Logo | Search | AI Sourcing | GoClub | Resources | Account | Cart */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img src="/images/logo/pbs-logo.jpeg" alt="PBS Supply Co." className="h-9 w-9 object-contain" />
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
            {/* AI Sourcing pill */}
            <Link
              href="/ai-assistant"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-charcoal bg-yellow-300 border border-yellow-400 rounded-full hover:bg-yellow-200 transition-colors"
            >
              AI Sourcing
              <Sparkles className="w-3.5 h-3.5" />
            </Link>

            {/* PBS Club */}
            <Link
              href="/goclub"
              className="px-3 py-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              PBS Club™
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
              {categoryNav.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.submenu && handleSubmenuEnter(item.label)}
                  onMouseLeave={handleSubmenuLeave}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-colors ${
                      activeSubmenu === item.label
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown className={`w-3 h-3 transition-transform ${activeSubmenu === item.label ? "rotate-180" : ""}`} />
                    )}
                  </Link>

                  {/* Submenu dropdown */}
                  {item.submenu && activeSubmenu === item.label && (
                    <div
                      className="absolute top-full left-0 mt-0 pt-1 z-50"
                      onMouseEnter={() => handleSubmenuEnter(item.label)}
                      onMouseLeave={handleSubmenuLeave}
                    >
                      <div className={`bg-white border border-gray-200 rounded-lg shadow-xl py-3 ${
                        item.submenu.length > 1 ? "flex gap-0 min-w-[380px]" : "min-w-[180px]"
                      }`}>
                        {item.submenu.map((group, gi) => (
                          <div
                            key={gi}
                            className={`px-2 ${
                              gi > 0 ? "border-l border-gray-100" : ""
                            }`}
                          >
                            {group.title && (
                              <p className="px-3 pb-1.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                                {group.title}
                              </p>
                            )}
                            {group.items.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="block px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-charcoal rounded-md transition-colors whitespace-nowrap"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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

            {/* AI Sourcing link */}
            <Link
              href="/ai-assistant"
              className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-charcoal"
              onClick={() => setMobileOpen(false)}
            >
              <Sparkles className="w-4 h-4 text-accent-orange" />
              AI Sourcing
            </Link>

            <div className="border-t border-gray-100 my-2" />

            {/* Main nav */}
            <Link href="/goclub" className="block px-3 py-3 text-sm text-gray-600 hover:text-charcoal" onClick={() => setMobileOpen(false)}>
              PBS Club™
            </Link>
            <Link href="/blog" className="block px-3 py-3 text-sm text-gray-600 hover:text-charcoal" onClick={() => setMobileOpen(false)}>
              Blog
            </Link>
            <Link href="/about-us" className="block px-3 py-3 text-sm text-gray-600 hover:text-charcoal" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>

            <div className="border-t border-gray-100 my-2" />

            {/* Category nav with expandable submenus */}
            <p className="px-3 text-xs font-medium text-gray-400 uppercase tracking-wider pt-1">
              Shop
            </p>
            {categoryNav.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileExpandedCategory(
                          mobileExpandedCategory === item.label ? null : item.label
                        )
                      }
                      className="flex items-center justify-between w-full px-3 py-2.5 text-sm text-gray-600 hover:text-charcoal cursor-pointer"
                    >
                      {item.label}
                      <ChevronRight
                        className={`w-4 h-4 text-gray-400 transition-transform ${
                          mobileExpandedCategory === item.label ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {mobileExpandedCategory === item.label && (
                      <div className="pl-4 pb-1">
                        {item.submenu.map((group, gi) => (
                          <div key={gi}>
                            {group.title && (
                              <p className="px-3 pt-1 pb-0.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                                {group.title}
                              </p>
                            )}
                            {group.items.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="block px-3 py-2 text-sm text-gray-500 hover:text-charcoal"
                                onClick={() => setMobileOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2.5 text-sm text-gray-600 hover:text-charcoal"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
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
