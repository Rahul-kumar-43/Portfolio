import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rahulkumar43.dev";
    const siteUrl = rawSiteUrl.replace(/\/$/, "");

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
