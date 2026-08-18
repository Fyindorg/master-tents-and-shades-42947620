import { createFileRoute, notFound } from "@tanstack/react-router";
import { PAGES, PageRenderer } from "@/components/PageRenderer";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const page = PAGES[params.slug];
    if (!page) throw notFound();
    return { page, slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Page not found — Master Tents and Shades" }, { name: "robots", content: "noindex" }] };
    }
    const { page, slug } = loaderData;
    const desc =
      page.desc ||
      "Master Tents and Shades LLC — leading supplier and manufacturer of tents, pergolas, car parking shades and tensile shade structures in Dubai and across the UAE.";
    return {
      meta: [
        { title: page.title },
        { name: "description", content: desc },
        { property: "og:title", content: page.title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/${slug}/` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/${slug}/` }],
    };
  },
  component: SlugPage,
});

function SlugPage() {
  const { page, slug } = Route.useLoaderData();
  return <PageRenderer page={page} slug={slug} />;
}
