import type { ReactNode } from "react";
import { createPageMetadata } from "../../../lib/metadata";

export const metadata = createPageMetadata({
  title: "Time Table Demo",
  description: "Interactive Time Table demo route inside the portfolio.",
  keywords: ["Time Table demo", "JavaScript demo", "portfolio demo"],
  noIndex: true,
});

export default function TimetableDemoLayout({ children }: { children: ReactNode }) {
  return children;
}
