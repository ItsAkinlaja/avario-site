import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/caseStudies";
import { insights } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.SITE_URL || "http://localhost:3000";
  const base = siteUrl.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/growth-systems",
    "/products",
    "/products/relavicx",
    "/products/martpoint",
    "/products/school-suite",
    "/case-studies",
    "/insights",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const caseRoutes = caseStudies.map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    lastModified: new Date(),
  }));

  const insightRoutes = insights.map((p) => ({
    url: `${base}/insights/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...caseRoutes, ...insightRoutes];
}
