import { MetadataRoute } from "next"
import { ALL_SOLUTIONS } from "@/content/solutions"

const BASE_URL = "https://www.aliigndata.com"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const solutionRoutes: MetadataRoute.Sitemap = ALL_SOLUTIONS.map(
    (solution) => ({
      url: `${BASE_URL}/solutions/${solution.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  )

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...solutionRoutes,
  ]
}
