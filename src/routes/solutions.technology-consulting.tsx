import { createFileRoute } from "@tanstack/react-router";
import { TechnologyConsultingView } from "@/components/configusa-site";

export const Route = createFileRoute("/solutions/technology-consulting")({
  component: TechnologyConsultingView,
  head: () => ({
    meta: [
      { title: "Technology Consulting & Resource Augmentation | ConfigUSA" },
      { name: "description", content: "The expertise to support your most important technology initiatives. Specialized resource augmentation for enterprise modernization." },
      { property: "og:title", content: "Technology Consulting & Resource Augmentation | ConfigUSA" },
      { property: "og:description", content: "The expertise to support your most important technology initiatives." },
      { property: "og:type", content: "website" },
    ],
  }),
});

