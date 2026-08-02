import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alexjohnson.dev";
  const sections = ["about", "skills", "projects", "experience", "education", "certificates", "contact"];

  const sectionUrls = sections.map((section) => ({
    url: `${baseUrl}/#${section}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...sectionUrls,
  ];
}
