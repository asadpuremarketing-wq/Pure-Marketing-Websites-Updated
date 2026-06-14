import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/checkout/", "/checkout/success/"],
      },
    ],
    sitemap: "https://puremarketing.ca/sitemap.xml",
  };
}
