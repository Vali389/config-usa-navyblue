import { createFileRoute } from "@tanstack/react-router";
import { ContentView } from "@/components/configusa-site";

export const Route = createFileRoute("/$slug")({
  component: SlugPage,
  head: ({ params }) => {
    const formatted = params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    const title = `${formatted} | ConfigUSA`;
    const description = "Explore ConfigUSA’s enterprise technology talent and workforce solutions.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
});

function SlugPage() {
  const { slug } = Route.useParams();
  return <ContentView slug={slug} />;
}
