import type { MetadataRoute } from "next";
import { ROOMS } from "./lib/rooms";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bruinspace.vercel.app";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/planner`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const roomPages: MetadataRoute.Sitemap = ROOMS.map((room) => ({
    url: `${baseUrl}/room/${room.id}`,
    lastModified: new Date(),
    changeFrequency: "hourly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...roomPages];
}
