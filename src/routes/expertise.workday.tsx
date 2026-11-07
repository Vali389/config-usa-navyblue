import { createFileRoute } from "@tanstack/react-router";
import { WorkdayView } from "@/components/configusa-site";

export const Route = createFileRoute("/expertise/workday")({
  component: WorkdayView,
  head: () => ({
    meta: [
      { title: "Workday Talent Solutions | ConfigUSA" },
      { name: "description", content: "Specialized Workday expertise for enterprise transformation and operational excellence: HCM, Financials, Integrations, and Reporting." },
      { property: "og:title", content: "Workday Talent Solutions | ConfigUSA" },
      { property: "og:description", content: "Specialized Workday expertise for enterprise transformation." },
      { property: "og:type", content: "website" },
    ],
  }),
});

