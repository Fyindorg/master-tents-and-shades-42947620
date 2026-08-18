import { createFileRoute } from "@tanstack/react-router";
import { PAGES, PageRenderer } from "@/components/PageRenderer";

const home = PAGES[""]!;
const description =
  "Master Tents and Shades LLC is a leading supplier and manufacturer of car parking shades, pergolas, tents and tensile shade structures in Dubai, Sharjah, Abu Dhabi and all the UAE.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: home.title },
      { name: "description", content: home.desc || description },
      { property: "og:title", content: home.title },
      { property: "og:description", content: home.desc || description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Master Tents and Shades LLC",
          telephone: "+971 56 222 1906",
          email: "info@mastertentsandshades.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "# 601, Abraj Almamzar",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <PageRenderer page={home} />;
}
