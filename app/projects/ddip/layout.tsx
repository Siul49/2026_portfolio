import type { ReactNode } from "react";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "DDIP",
  description:
    "A community commerce project that rethinks neighborhood group buying and sharing through a state-driven user experience.",
  keywords: ["DDIP", "community commerce", "group buying", "UX architecture"],
});

export default function DdipLayout({ children }: { children: ReactNode }) {
  return children;
}
