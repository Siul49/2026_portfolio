"use client";

import { cn } from "../../lib/utils";

interface StepIndicatorProps {
  step: number;
  variant?: "navy" | "blue" | "muted";
  size?: "sm" | "md";
  className?: string;
}

const variantStyles = {
  navy: "bg-deep-navy text-white",
  blue: "bg-serene-blue text-white",
  muted: "bg-neutral-300 text-white",
};

export default function StepIndicator({
  step,
  variant = "navy",
  size = "md",
  className,
}: StepIndicatorProps) {
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center font-mono shrink-0",
        variantStyles[variant],
        size === "sm" ? "w-6 h-6 text-[10px]" : "w-8 h-8 text-xs",
        className
      )}
    >
      {step}
    </div>
  );
}
