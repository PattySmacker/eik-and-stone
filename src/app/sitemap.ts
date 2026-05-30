import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://andersbuild.com";

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/portfolio`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/process`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${baseUrl}/accessibility`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const servicePages = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const projectPages = projects.map((p) => ({
    url: `${baseUrl}/portfolio/${p.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...projectPages,
  ].map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}