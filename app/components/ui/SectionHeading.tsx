"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { fadeInUp, smooth } from "../../lib/animations";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export default function SectionHeading({
  children,
  className,
  animated = true,
}: SectionHeadingProps) {
  const classes = cn(
    "text-5xl md:text-7xl font-serif font-bold text-deep-navy",
    className
  );

  if (animated) {
    return (
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={smooth}
        className={classes}
      >
        {children}
      </motion.h1>
    );
  }

  return <h1 className={classes}>{children}</h1>;
}
