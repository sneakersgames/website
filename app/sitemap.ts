import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.isIndexable) return [];
  return [{ url: siteConfig.siteUrl, changeFrequency: "monthly", priority: 1 }];
}
