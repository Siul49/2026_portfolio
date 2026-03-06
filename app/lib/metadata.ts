import type { Metadata } from "next";
import { getSiteUrl, withBasePath } from "./site";

const SITE_NAME = "Kim Gyeongsu";
const SITE_TITLE = "Kim Gyeongsu | Backend Developer Portfolio";
const DEFAULT_DESCRIPTION =
  "Kim Gyeongsu's backend-focused portfolio featuring data pipelines, multimodal AI backends, automation, and product case studies.";
const DEFAULT_KEYWORDS = [
  "Kim Gyeongsu",
  "portfolio",
  "backend developer",
  "data pipeline",
  "multimodal AI",
  "AI",
  "automation",
  "Next.js",
];
const OG_IMAGE_PATH = withBasePath("/images/projects/pick-habju.png");
const siteUrl = getSiteUrl();
const metadataBase = new URL(siteUrl).origin;

type PageMetadataOptions = {
  title: string;
  description: string;
  keywords?: string[];
  noIndex?: boolean;
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(metadataBase),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  icons: {
    icon: withBasePath("/favicon.ico"),
    shortcut: withBasePath("/favicon.ico"),
  },
  openGraph: {
    title: SITE_TITLE,
    description: DEFAULT_DESCRIPTION,
    type: "website",
    locale: "ko_KR",
    siteName: SITE_NAME,
    url: siteUrl,
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: "Kim Gyeongsu backend developer portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE_PATH],
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
      url: siteUrl,
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: `${title} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}
