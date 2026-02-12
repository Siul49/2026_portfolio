"use client";

import { cn } from "../../lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-deep-navy text-white hover:bg-neutral-900 shadow-sm hover:shadow-md",
  secondary:
    "bg-serene-blue text-white hover:bg-neutral-700",
  outline:
    "border-2 border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white",
  ghost:
    "text-serene-blue hover:text-deep-navy hover:underline",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm font-medium",
  lg: "px-8 py-4 text-base font-bold",
};

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  variant = "primary",
  size = "lg",
  href,
  external,
  className,
  children,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full transition-all duration-300 ease-out",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

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
