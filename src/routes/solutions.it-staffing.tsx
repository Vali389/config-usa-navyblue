import { createFileRoute } from "@tanstack/react-router";
import { ITStaffingView } from "@/components/configusa-site";

export const Route = createFileRoute("/solutions/it-staffing")({
  component: ITStaffingView,
  head: () => ({
    meta: [
      { title: "IT Staffing Solutions | ConfigUSA" },
      { name: "description", content: "Exceptional technology talent precisely aligned with your business. Contract, contract-to-hire, and project-based staffing." },
      { property: "og:title", content: "IT Staffing Solutions | ConfigUSA" },
      { property: "og:description", content: "Exceptional technology talent precisely aligned with your business." },
      { property: "og:type", content: "website" },
    ],
  }),
});

