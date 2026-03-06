import type { ReactNode } from "react";
import { createPageMetadata } from "../../../lib/metadata";

export const metadata = createPageMetadata({
  title: "DDIP Demo",
  description: "Interactive DDIP demo route inside the portfolio.",
  keywords: ["DDIP demo", "commerce demo", "portfolio demo"],
  noIndex: true,
});

export default function DdipDemoLayout({ children }: { children: ReactNode }) {
  return children;
}
