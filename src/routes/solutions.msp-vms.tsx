import { createFileRoute } from "@tanstack/react-router";
import { MSPView } from "@/components/configusa-site";

export const Route = createFileRoute("/solutions/msp-vms")({
  component: MSPView,
  head: () => ({
    meta: [
      { title: "MSP & VMS Workforce Delivery | ConfigUSA" },
      { name: "description", content: "Enterprise workforce delivery with discipline, responsiveness, and accountability across leading MSP/VMS programs." },
      { property: "og:title", content: "MSP & VMS Workforce Delivery | ConfigUSA" },
      { property: "og:description", content: "Enterprise workforce delivery with discipline, responsiveness, and accountability." },
      { property: "og:type", content: "website" },
    ],
  }),
});

