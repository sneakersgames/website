import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", ...(siteConfig.isIndexable ? { allow: "/" } : { disallow: "/" }) },
    ...(siteConfig.isIndexable ? { sitemap: `${siteConfig.siteUrl}/sitemap.xml` } : {}),
  };
}
