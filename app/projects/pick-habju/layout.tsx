import type { ReactNode } from "react";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "Pick Habju",
  description:
    "A 2024 prototype case study for a semantic crawling pipeline that maintained 92% reservation-data collection success without code changes.",
  keywords: ["Pick Habju", "semantic crawling", "data pipeline", "backend prototype"],
});

export default function PickHabjuLayout({ children }: { children: ReactNode }) {
  return children;
}
