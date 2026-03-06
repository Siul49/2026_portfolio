import type { ReactNode } from "react";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "BIMO",
  description:
    "A multimodal flight concierge backend case study that improved LLM recognition by 20%+ through preprocessing and structured response design.",
  keywords: ["BIMO", "multimodal AI", "Gemini", "travel backend"],
});

export default function BimoLayout({ children }: { children: ReactNode }) {
  return children;
}
