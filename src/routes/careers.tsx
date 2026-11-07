import { createFileRoute } from "@tanstack/react-router";
import { CareersView } from "@/components/configusa-site";

export const Route = createFileRoute("/careers")({
  component: CareersView,
  head: () => ({
    meta: [
      { title: "Careers & Job Opportunities | ConfigUSA" },
      { name: "description", content: "Your skills. Your ambition. Your next opportunity. Explore open requisitions across SAP, Workday, Cloud, AI, and Engineering." },
      { property: "og:title", content: "Careers & Job Opportunities | ConfigUSA" },
      { property: "og:description", content: "Your skills. Your ambition. Your next opportunity." },
      { property: "og:type", content: "website" },
    ],
  }),
});

