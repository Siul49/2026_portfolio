import type { ReactNode } from "react";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "Pick Habju",
  description:
    "A Pick Habju case study spanning a 2024 semantic crawling prototype and 2026 service-shaped backend assets, including FastAPI APIs, Supabase persistence, and testing.",
  keywords: [
    "Pick Habju",
    "semantic crawling",
    "FastAPI",
    "Supabase",
    "backend archive",
  ],
});

export default function PickHabjuLayout({ children }: { children: ReactNode }) {
  return children;
}
