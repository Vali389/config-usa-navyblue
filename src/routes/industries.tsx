import { createFileRoute } from "@tanstack/react-router";
import { IndustriesView } from "@/components/configusa-site";

export const Route = createFileRoute("/industries")({
  component: IndustriesView,
  head: () => ({
    meta: [
      { title: "Industries We Serve | ConfigUSA" },
      { name: "description", content: "Industry understanding. Technology expertise. Workforce confidence across Financial Services, Healthcare, Government, Manufacturing, and Tech." },
      { property: "og:title", content: "Industries We Serve | ConfigUSA" },
      { property: "og:description", content: "Industry understanding. Technology expertise. Workforce confidence." },
      { property: "og:type", content: "website" },
    ],
  }),
});

