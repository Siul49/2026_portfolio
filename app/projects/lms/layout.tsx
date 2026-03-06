import type { ReactNode } from "react";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "LMS Downloader",
  description:
    "A Python and Playwright automation tool built to streamline repeated Canvas LMS material downloads.",
  keywords: ["LMS Downloader", "Python", "Playwright", "automation"],
});

export default function LmsLayout({ children }: { children: ReactNode }) {
  return children;
}
