import { createFileRoute } from "@tanstack/react-router";
import { AIDigitalView } from "@/components/configusa-site";

export const Route = createFileRoute("/expertise/ai-data-digital")({
  component: AIDigitalView,
  head: () => ({
    meta: [
      { title: "AI, Data & Digital Engineering | ConfigUSA" },
      { name: "description", content: "Accelerating digital ambition through the right expertise: Machine Learning, Data Platforms, Cloud-native App Engineering." },
      { property: "og:title", content: "AI, Data & Digital Engineering | ConfigUSA" },
      { property: "og:description", content: "Accelerating digital ambition through the right expertise." },
      { property: "og:type", content: "website" },
    ],
  }),
});

