const ABSOLUTE_PROTOCOL = /^(?:[a-z]+:)?\/\//i;

export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export function withBasePath(path: string) {
  if (!path) {
    return basePath || "/";
  }

  if (ABSOLUTE_PROTOCOL.test(path) || path.startsWith("mailto:") || path.startsWith("#")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (!basePath || normalizedPath === basePath || normalizedPath.startsWith(`${basePath}/`)) {
    return normalizedPath;
  }

  return `${basePath}${normalizedPath}`;
}

export function getSiteUrl() {
  const explicitSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (explicitSiteUrl) {
    return explicitSiteUrl.replace(/\/$/, "");
  }

  const [owner = "", repo = ""] = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
  const isUserPageRepo = owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

  if (owner && repo) {
    return isUserPageRepo
      ? `https://${owner}.github.io`
      : `https://${owner}.github.io/${repo}`;
  }

  return "http://localhost:3000";
}
