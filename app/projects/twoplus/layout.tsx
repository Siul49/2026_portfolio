import type { ReactNode } from "react";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "TwoPlus",
  description:
    "An early frontend portfolio project exploring responsiveness, motion, and interaction design decisions.",
  keywords: ["TwoPlus", "frontend", "interaction design", "responsive UI"],
});

export default function TwoPlusLayout({ children }: { children: ReactNode }) {
  return children;
}
