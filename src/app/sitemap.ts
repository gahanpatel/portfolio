import { MetadataRoute } from "next";
import { personalInfo } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = personalInfo.siteUrl;
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/reading`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/uses`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/writing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
