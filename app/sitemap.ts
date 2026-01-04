/* eslint-disable */

import { siteConfig } from "@/lib/site";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let siteList = [
    {
      url: siteConfig.domain,
      changefreq: "daily",
      priority: 1.0,
    },
  ];

  for (const route of siteConfig.menu_links) {
    siteList.push({
      url: `${siteConfig.base_url}${route.href}/`,
      changefreq: "daily",
      priority: 0.8,
    });
  }

  return siteList;
}
