import { createFileRoute } from "@tanstack/react-router";
import { WhyConfigUSAView } from "@/components/configusa-site";

export const Route = createFileRoute("/why-configusa")({
  component: WhyConfigUSAView,
  head: () => ({
    meta: [
      { title: "Why ConfigUSA | The ConfigUSA Advantage" },
      { name: "description", content: "The difference is in how we deliver. Enterprise-focused expertise, specialized recruiting capabilities, and MSP/VMS discipline." },
      { property: "og:title", content: "Why ConfigUSA | The ConfigUSA Advantage" },
      { property: "og:description", content: "The difference is in how we deliver. Enterprise-focused expertise, specialized recruiting capabilities, and MSP/VMS discipline." },
      { property: "og:type", content: "website" },
    ],
  }),
});

