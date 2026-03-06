import type { ReactNode } from "react";
import { createPageMetadata } from "../../../lib/metadata";

export const metadata = createPageMetadata({
  title: "BIMO Demo",
  description: "Interactive BIMO demo route inside the portfolio.",
  keywords: ["BIMO demo", "flight concierge demo", "portfolio demo"],
  noIndex: true,
});

export default function BimoDemoLayout({ children }: { children: ReactNode }) {
  return children;
}
