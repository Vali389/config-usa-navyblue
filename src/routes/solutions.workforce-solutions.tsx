import { createFileRoute } from "@tanstack/react-router";
import { WorkforceSolutionsView } from "@/components/configusa-site";

export const Route = createFileRoute("/solutions/workforce-solutions")({
  component: WorkforceSolutionsView,
  head: () => ({
    meta: [
      { title: "Workforce Solutions | ConfigUSA" },
      { name: "description", content: "Workforce support shaped around your business priorities. Scalable, flexible staffing models across North America and India." },
      { property: "og:title", content: "Workforce Solutions | ConfigUSA" },
      { property: "og:description", content: "Workforce support shaped around your business priorities." },
      { property: "og:type", content: "website" },
    ],
  }),
});

