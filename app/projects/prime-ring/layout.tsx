import type { ReactNode } from "react";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "PrimeRing",
  description:
    "An emotion-aware desktop calendar and diary app built with Electron, React, Zustand, and WebLLM.",
  keywords: ["PrimeRing", "Electron", "WebLLM", "desktop app"],
});

export default function PrimeRingLayout({ children }: { children: ReactNode }) {
  return children;
}
