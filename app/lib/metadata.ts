import type { Metadata } from "next";

const SITE_NAME = "Kim Gyeongsu";
const SITE_TITLE = "Kim Gyeongsu | The Architect of Dreams";
const DEFAULT_DESCRIPTION =
  "Kim Gyeongsu's 2026 portfolio featuring backend, AI, automation, and desktop app case studies.";
const DEFAULT_KEYWORDS = [
  "Kim Gyeongsu",
  "portfolio",
  "backend developer",
  "AI",
  "automation",
  "React",
  "Next.js",
];

type PageMetadataOptions = {
  title: string;
  description: string;
  keywords?: string[];
  noIndex?: boolean;
};

export const rootMetadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  openGraph: {
    title: SITE_TITLE,
    description: DEFAULT_DESCRIPTION,
    type: "website",
    locale: "ko_KR",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
};

export function createPageMetadata({
  title,
  description,
  keywords = [],
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    keywords: [...DEFAULT_KEYWORDS, ...keywords],
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : undefined,
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      locale: "ko_KR",
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
