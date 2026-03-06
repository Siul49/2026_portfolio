import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const owner = process.env.GITHUB_REPOSITORY?.split("/")[0] ?? "";
const isUserPageRepo = owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const basePath = process.env.GITHUB_ACTIONS && !isUserPageRepo ? `/${repo}` : "";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (owner && repo
    ? isUserPageRepo
      ? `https://${owner}.github.io`
      : `https://${owner}.github.io/${repo}`
    : "http://localhost:3000");

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
};

export default nextConfig;
