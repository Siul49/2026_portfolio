import type { ReactNode } from "react";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "Pick Habju",
  description:
    "An LLM-powered semantic extraction project for collecting and structuring rehearsal room reservation data.",
  keywords: ["Pick Habju", "LLM crawling", "semantic extraction", "data pipeline"],
});

export default function PickHabjuLayout({ children }: { children: ReactNode }) {
  return children;
}
