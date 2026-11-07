import { createFileRoute } from "@tanstack/react-router";
import { AboutView } from "@/components/configusa-site";

export const Route = createFileRoute("/about")({
  component: AboutView,
  head: () => ({
    meta: [
      { title: "About Us | ConfigUSA" },
      { name: "description", content: "ConfigUSA is an enterprise technology staffing and workforce solutions partner built on trust, expertise, and dependable global delivery." },
      { property: "og:title", content: "About Us | ConfigUSA" },
      { property: "og:description", content: "ConfigUSA is an enterprise technology staffing and workforce solutions partner built on trust, expertise, and dependable global delivery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

