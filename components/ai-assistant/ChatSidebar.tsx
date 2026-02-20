"use client";

import {
  Plus,
  FileText,
  Heart,
  ShoppingBag,
  Info,
  Phone,
  UserCircle,
} from "lucide-react";
import Link from "next/link";

interface ChatSidebarProps {
  onNewChat: () => void;
  sidebarOpen: boolean;
  onClose: () => void;
}

export function ChatSidebar({
  onNewChat,
  sidebarOpen,
  onClose,
}: ChatSidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-[200px] bg-white border-r border-gray-200 flex flex-col transition-transform duration-200 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-4 pt-5 pb-4">
          <Link href="/" className="flex items-center gap-1">
            <img
              src="/images/logo/logo.png"
              alt="Perfect Building Supply Co."
              className="h-8 w-8 object-contain"
            />
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-1 text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 space-y-1">
          <button
            onClick={() => {
              onNewChat();
              onClose();
            }}
            className="flex items-center gap-2.5 w-full px-3 py-2.5 text-sm font-medium text-charcoal hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            New Chat
          </button>
          <Link
            href="/surfaces"
            className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <FileText className="w-4 h-4" />
            My Quote
          </Link>
          <Link
            href="/surfaces"
            className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Heart className="w-4 h-4" />
            Favorites
          </Link>
        </nav>

        {/* Bottom nav */}
        <div className="border-t border-gray-200 px-3 py-3 space-y-0.5">
          <Link
            href="/surfaces"
            className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Shop
          </Link>
          <Link
            href="/about-us"
            className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Info className="w-4 h-4" />
            About Us
          </Link>
          <Link
            href="tel:+17139271500"
            className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Us
          </Link>
          <Link
            href="/sign-up"
            className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <UserCircle className="w-4 h-4" />
            Account
          </Link>
        </div>
      </aside>
    </>
  );
}
