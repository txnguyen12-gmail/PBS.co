"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "white" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer active:scale-[0.98] shadow-md";

  const variants = {
    primary: "bg-gradient-to-r from-charcoal to-charcoal-light text-white hover:opacity-90",
    secondary: "bg-white text-navy hover:bg-gray-100",
    outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
    white: "bg-white text-navy hover:bg-gray-100 shadow-lg",
    accent: "bg-gradient-to-r from-accent-orange to-accent-gold text-white hover:opacity-90",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
