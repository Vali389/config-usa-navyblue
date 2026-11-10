import { createFileRoute } from "@tanstack/react-router";
import { PalantirView } from "@/components/PalantirView";

export const Route = createFileRoute("/palantir")({
  component: PalantirView,
  head: () => ({
    meta: [
      { title: "Palantir Foundry & AIP Services | ConfigUSA" },
      {
        name: "description",
        content:
          "Specialized Palantir Foundry and AIP talent, ontology modeling, and operational data pipelines for enterprise organizations.",
      },
      { property: "og:title", content: "Palantir Foundry & AIP Services | ConfigUSA" },
      { property: "og:type", content: "website" },
    ],
  }),
});

