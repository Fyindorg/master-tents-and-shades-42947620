import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import siteData from "@/data/site.json";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const slugs = Object.keys(siteData as Record<string, unknown>);
        const paths = ["/", ...slugs.filter(Boolean).map((s) => `/${s}/`)];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...paths.map((p) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${p}</loc>`,
              `    <changefreq>monthly</changefreq>`,
              `    <priority>${p === "/" ? "1.0" : "0.8"}</priority>`,
              `  </url>`,
            ].join("\n"),
          ),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
