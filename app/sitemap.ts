import { MetadataRoute } from "next"
export default function sitemap(): MetadataRoute.Sitemap {
    return [{
        url: "https://www.esotericnetwork.site/",
        lastModified: new Date(),
        priority: 1
    }]
}
