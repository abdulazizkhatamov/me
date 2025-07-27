import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2025-07-27");

  return [
    {
      url: "https://www.abdulazizkhatamov.com",
      lastModified,
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: "https://www.abdulazizkhatamov.com/about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.abdulazizkhatamov.com/skills",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.abdulazizkhatamov.com/projects",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.abdulazizkhatamov.com/experience",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.abdulazizkhatamov.com/testimonials",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://www.abdulazizkhatamov.com/contact",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
