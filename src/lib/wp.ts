export type WpRendered = { rendered: string };

export type WpPost = {
  id: number;
  slug: string;
  link?: string;
  date?: string;
  title: WpRendered;
  excerpt?: WpRendered;
  content?: WpRendered;
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
  const res = await fetch(url, {
    ...init,
    headers: {
      accept: "application/json",
      ...(init?.headers || {}),
    },
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
    `/${encodeURIComponent(postType)}?slug=${encodeURIComponent(slug)}&_fields=id,slug,title,excerpt,content,date,link`,
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
      `/${encodeURIComponent(postType)}?per_page=${perPage}&_fields=id,slug,title,excerpt,date,link`,
    )) ?? []
  );
}
