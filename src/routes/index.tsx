import { createFileRoute } from "@tanstack/react-router";
import { HomeView } from "@/components/configusa-site";

// The home route ships no og:image, so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: HomeView,
  head: () => ({
    meta: [
      { title: "ConfigUSA | Technology. Talent. Transformation." },
      { name: "description", content: "Specialized technology talent, flexible workforce solutions, and dependable global delivery for enterprises." },
      { property: "og:title", content: "ConfigUSA | Technology. Talent. Transformation." },
      { property: "og:description", content: "Specialized technology talent, flexible workforce solutions, and dependable global delivery for enterprises." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
