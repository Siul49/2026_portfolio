import type { ReactNode } from "react";
import { createPageMetadata } from "../../../lib/metadata";

export const metadata = createPageMetadata({
  title: "PrimeRing Demo",
  description: "Interactive PrimeRing demo route inside the portfolio.",
  keywords: ["PrimeRing demo", "desktop app demo", "portfolio demo"],
  noIndex: true,
});

export default function PrimeRingDemoLayout({ children }: { children: ReactNode }) {
  return children;
}
