import type { ReactNode } from "react";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "BIMO",
  description:
    "A personal flight concierge project that turns boarding-pass OCR and multimodal AI analysis into tailored travel guidance.",
  keywords: ["BIMO", "OCR", "Gemini", "travel assistant"],
});

export default function BimoLayout({ children }: { children: ReactNode }) {
  return children;
}
