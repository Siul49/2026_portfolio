import type { Variants, Transition } from "framer-motion";

// ─── Base Transitions ────────────────────────────────────────────
// Slow, calm, deliberate — editorial pacing with gentle deceleration.

const ease = [0.22, 0.03, 0.26, 1]; // soft deceleration curve

export const smooth: Transition = {
  duration: 0.9,
  ease,
};

export const smoothSlow: Transition = {
  duration: 1.2,
  ease,
};

export const smoothSpring: Transition = {
  type: "spring",
  stiffness: 60,
  damping: 24,
  mass: 1,
};

export const smoothBounce: Transition = {
  type: "spring",
  stiffness: 80,
  damping: 22,
  mass: 0.8,
};

// ─── Variant Presets ─────────────────────────────────────────────

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.5, ease },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease },
  },
};

export const slideTransition: Variants = {
  hidden: { opacity: 0, x: 14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease },
  },
  exit: {
    opacity: 0,
    x: -14,
    transition: { duration: 0.45, ease },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease },
  },
};

export const lineExpand: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100px",
    transition: { duration: 1.6, ease },
  },
};

// ─── Stagger Containers ─────────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// ─── Hover / Interaction ────────────────────────────────────────

export const hoverLift = {
  whileHover: { y: -3, scale: 1.015, transition: { duration: 0.4, ease } },
  whileTap: { scale: 0.985, transition: { duration: 0.2 } },
};

export const hoverScale = {
  whileHover: { scale: 1.02, transition: { duration: 0.4, ease } },
  whileTap: { scale: 0.98, transition: { duration: 0.2 } },
};

// ─── Page Transitions ───────────────────────────────────────────

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.5, ease },
  },
};
