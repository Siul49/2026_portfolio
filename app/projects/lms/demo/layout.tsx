import type { ReactNode } from "react";
import { createPageMetadata } from "../../../lib/metadata";

export const metadata = createPageMetadata({
  title: "LMS Downloader Demo",
  description: "Interactive LMS Downloader demo route inside the portfolio.",
  keywords: ["LMS demo", "automation demo", "portfolio demo"],
  noIndex: true,
});

export default function LmsDemoLayout({ children }: { children: ReactNode }) {
  return children;
}
