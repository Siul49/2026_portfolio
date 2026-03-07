import type { ReactNode } from "react";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "Pick Habju",
  description:
    "A Pick Habju case study based on the current 2026 crawler flow: priority-area discovery, Apollo state parsing, Booking GraphQL enrichment, fallback recovery, and reservation-aware filtering.",
  keywords: [
    "Pick Habju",
    "Playwright crawler",
    "Booking GraphQL",
    "reservation filtering",
    "FastAPI",
    "backend archive",
  ],
});

export default function PickHabjuLayout({ children }: { children: ReactNode }) {
  return children;
}
