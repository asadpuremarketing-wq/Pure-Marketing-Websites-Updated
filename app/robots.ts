import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/checkout/", "/checkout/success/"],
      },
      // Explicitly allow AI crawler user agents for GEO (Generative Engine Optimization)
      {
        userAgent: [
          "GPTBot",           // OpenAI / ChatGPT
          "ChatGPT-User",     // ChatGPT real-time browsing
          "OAI-SearchBot",    // OpenAI search
          "PerplexityBot",    // Perplexity AI
          "ClaudeBot",        // Anthropic Claude
          "anthropic-ai",     // Anthropic web crawl
          "Google-Extended",  // Google Gemini / AI Overviews
          "Bytespider",       // ByteDance AI
          "cohere-ai",        // Cohere AI
          "YouBot",           // You.com AI
          "ia_archiver",      // Internet Archive
        ],
        allow: "/",
      },
    ],
    sitemap: "https://puremarketing.ca/sitemap.xml",
    host: "https://puremarketing.ca",
  };
}
