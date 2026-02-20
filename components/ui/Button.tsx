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
  const base = "inline-flex items-center justify-center font-bold rounded-md transition-all duration-200 cursor-pointer active:scale-[0.98]";

  const variants = {
    primary: "bg-accent-orange text-white hover:bg-brick",
    secondary: "bg-charcoal text-white border border-accent-orange hover:bg-charcoal-light",
    outline: "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
    white: "bg-white text-charcoal hover:bg-gray-100",
    accent: "bg-accent-orange text-white hover:bg-brick",
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
