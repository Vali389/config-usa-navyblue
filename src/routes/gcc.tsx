import { createFileRoute } from "@tanstack/react-router";
import { GCCView } from "@/components/GCCView";

export const Route = createFileRoute("/gcc")({
  component: GCCView,
  head: () => ({
    meta: [
      { title: "Global Capability Centers (GCC) | ConfigUSA" },
      {
        name: "description",
        content:
          "End-to-end Global Capability Center setup, scaling, and talent delivery powered by ConfigUSA's Hyderabad India Technology Delivery Center.",
      },
      { property: "og:title", content: "Global Capability Centers (GCC) | ConfigUSA" },
      {
        property: "og:description",
        content:
          "Establish high-maturity offshore capability centers in India with world-class engineering, compliance, and governance.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

