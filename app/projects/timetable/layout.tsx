import type { ReactNode } from "react";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "Time Table",
  description:
    "A vanilla JavaScript timetable generator focused on direct DOM control and constraint-based scheduling logic.",
  keywords: ["Time Table", "vanilla JavaScript", "DOM", "scheduling"],
});

export default function TimetableLayout({ children }: { children: ReactNode }) {
  return children;
}
