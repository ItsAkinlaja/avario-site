export type WpRendered = { rendered: string };

export type WpEmbeddedMedia = {
  source_url?: string;
  alt_text?: string;
};

export type WpEmbeddedTerm = {
  id: number;
  name: string;
  taxonomy?: string;
};

export type WpPost = {
  id: number;
  slug: string;
  link?: string;
  date?: string;
  title: WpRendered;
  excerpt?: WpRendered;
  content?: WpRendered;
  _embedded?: {
    "wp:featuredmedia"?: WpEmbeddedMedia[];
    "wp:term"?: WpEmbeddedTerm[][];
  };
};

function getWpApiBaseUrl() {
  const siteUrl = process.env.WORDPRESS_URL;
  const apiBase = process.env.WORDPRESS_API_BASE_URL;
  if (apiBase) return apiBase.replace(/\/$/, "");
  if (!siteUrl) return null;
  try {
    return new URL("/wp-json/wp/v2", siteUrl).toString().replace(/\/$/, "");
  } catch {
    return null;
  }
}

async function wpGet<T>(path: string, init?: RequestInit) {
  const base = getWpApiBaseUrl();
  if (!base) return null;
  const url = `${base}${path.startsWith("/") ? "" : "/"}${path}`;
  
  const headers: Record<string, string> = {
    accept: "application/json",
    ...(init?.headers as Record<string, string> || {}),
  };

  // Add JWT token if configured and endpoint requires auth
  const jwtSecret = process.env.WORDPRESS_JWT_SECRET;
  if (jwtSecret && path.includes("protected")) {
    const token = Buffer.from(`:${jwtSecret}`).toString("base64");
    headers["authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    ...init,
    headers,
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  return (await res.json()) as T;
}

export async function getWpBySlug<T extends WpPost>(
  postType: string,
  slug: string,
) {
  const items = await wpGet<T[]>(
    `/${encodeURIComponent(postType)}?slug=${encodeURIComponent(slug)}&_embed=wp:featuredmedia,wp:term&_fields=id,slug,title,excerpt,content,date,link,_embedded`,
  );
  return items?.[0] ?? null;
}

export async function getWpList<T extends WpPost>(
  postType: string,
  opts?: { perPage?: number },
) {
  const perPage = opts?.perPage ?? 12;
  return (
    (await wpGet<T[]>(
      `/${encodeURIComponent(postType)}?per_page=${perPage}&_embed=wp:featuredmedia,wp:term&_fields=id,slug,title,excerpt,content,date,link,_embedded`,
    )) ?? []
  );
}

export function stripWpHtml(value?: string) {
  if (!value) return "";
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function getWpFeaturedImage(post?: WpPost | null) {
  return post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
}

export function getWpPrimaryCategory(post?: WpPost | null) {
  const terms = post?._embedded?.["wp:term"] ?? [];
  const categories = terms
    .flat()
    .filter((term) => term.taxonomy === "category" && term.name);
  return categories[0]?.name ?? null;
}

/**
 * Fetch posts by category slug (e.g., "insights", "case-studies")
 */
export async function getWpByCategory<T extends WpPost>(
  postType: string,
  category: string,
  opts?: { perPage?: number },
) {
  const perPage = opts?.perPage ?? 12;
  return (
    (await wpGet<T[]>(
      `/${encodeURIComponent(postType)}?categories=${encodeURIComponent(category)}&per_page=${perPage}&_embed=wp:featuredmedia,wp:term&_fields=id,slug,title,excerpt,content,date,link,_embedded`,
    )) ?? []
  );
}

/**
 * Get all published posts (commonly used for blogs/insights)
 */
export async function getPublishedPosts(opts?: { perPage?: number; before?: string; after?: string }) {
  const params = new URLSearchParams({
    status: "publish",
    per_page: String(opts?.perPage ?? 12),
    orderby: "date",
    order: "desc",
    _embed: "wp:featuredmedia,wp:term",
    _fields: "id,slug,title,excerpt,content,date,link,_embedded",
  });
  
  if (opts?.before) params.append("before", opts.before);
  if (opts?.after) params.append("after", opts.after);
  
  return (
    (await wpGet<WpPost[]>(`/posts?${params.toString()}`)) ?? []
  );
}
