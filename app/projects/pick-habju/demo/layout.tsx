import type { ReactNode } from "react";
import { createPageMetadata } from "../../../lib/metadata";

export const metadata = createPageMetadata({
  title: "Pick Habju Demo",
  description: "Interactive Pick Habju demo route inside the portfolio.",
  keywords: ["Pick Habju demo", "LLM demo", "portfolio demo"],
  noIndex: true,
});

export default function PickHabjuDemoLayout({ children }: { children: ReactNode }) {
  return children;
}
