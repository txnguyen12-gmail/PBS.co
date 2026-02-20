"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, Sparkles } from "lucide-react";

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
    label: "Building Materials",
    href: "/collections/building-materials",
    submenu: [
      {
        title: "Core Products",
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
    label: "Slabs",
    href: "/collections/slabs",
    submenu: [
      {
        items: [
          { label: "All Slabs", href: "/collections/slabs" },
          { label: "Quartz", href: "/collections/quartz" },
          { label: "Quartzite", href: "/collections/quartzite" },
          { label: "Marble", href: "/collections/marble" },
          { label: "Granite", href: "/collections/granite" },
          { label: "Porcelain Slabs", href: "/collections/porcelain-slabs" },
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

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
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
      {/* Row 1 — Logo | Search | AI Sourcing | About Us | Sign Up */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <img src="/images/logo/logo.png" alt="Perfect Building Supply Co." className="h-9 w-9 object-contain" />
            <span className="hidden xl:block text-white font-semibold text-sm tracking-tight leading-tight">
              PBS<span className="text-accent-orange">.</span> Supply Co<span className="text-accent-orange">.</span>
            </span>
          </Link>

          {/* Nav items */}
          <nav className="hidden lg:flex items-center gap-1 ml-auto">
            {/* AI Sourcing pill */}
            <Link
              href="/ai-assistant"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-accent-orange rounded-md hover:bg-brick transition-colors"
            >
              AI Sourcing
              <Sparkles className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/about-us"
              className={`px-3 py-2 text-sm transition-colors ${
                pathname === "/about-us"
                  ? "text-white underline decoration-accent-orange underline-offset-4"
                  : "text-white/80 hover:text-white"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/sign-up"
              className="px-4 py-1.5 text-sm font-bold bg-accent-orange text-white rounded-md hover:bg-brick transition-colors"
            >
              Sign Up
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            className="lg:hidden p-2.5 text-white cursor-pointer ml-auto"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Row 2 — Categories */}
      <div className="hidden lg:block border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center h-10">
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
                      activeSubmenu === item.label || pathname === item.href || pathname.startsWith(item.href + "/")
                        ? "text-white underline decoration-accent-orange underline-offset-4"
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
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-1">
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

            <Link
              href="/sign-up"
              className="block text-center px-4 py-2.5 text-sm font-bold bg-accent-orange text-white rounded-md hover:bg-brick transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
