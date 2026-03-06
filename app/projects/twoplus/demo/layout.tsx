import type { ReactNode } from "react";
import { createPageMetadata } from "../../../lib/metadata";

export const metadata = createPageMetadata({
  title: "TwoPlus Demo",
  description: "Interactive TwoPlus demo route inside the portfolio.",
  keywords: ["TwoPlus demo", "frontend demo", "portfolio demo"],
  noIndex: true,
});

export default function TwoPlusDemoLayout({ children }: { children: ReactNode }) {
  return children;
}
