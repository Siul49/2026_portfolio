"use client";

import Link from "next/link";
import { cn } from "../../lib/utils";

interface BackLinkProps {
  href?: string;
  label?: string;
  className?: string;
}

export default function BackLink({
  href = "/",
  label = "BACK TO HOME",
  className,
}: BackLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-xs font-mono text-serene-blue hover:text-deep-navy hover:underline mb-8 block transition-colors duration-300",
        className
      )}
    >
      &larr; {label}
    </Link>
  );
}
