import { MetadataRoute } from "next";
import ProjectService from "../services/sanityProjects";
import { Any } from "next-sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projectService = new ProjectService();

  const projects = await projectService.getAllProjects();

  const projectUrls = projects.map((project: Any) => ({
    url: `https://guilhermeb.vercel.app/projetos/${project.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [
    {
      url: "https://guilhermeb.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://guilhermeb.vercel.app/projetos",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projectUrls,
  ];
}
