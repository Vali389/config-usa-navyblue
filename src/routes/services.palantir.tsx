import { createFileRoute } from "@tanstack/react-router";
import { PalantirView } from "@/components/PalantirView";

export const Route = createFileRoute("/services/palantir")({
  component: PalantirView,
  head: () => ({
    meta: [
      { title: "Palantir Foundry & AIP Specialized Talent | ConfigUSA" },
      {
        name: "description",
        content:
          "Specialized Palantir Foundry and AIP engineers, platform architects, and data pipeline specialists deployed rapidly for high-impact enterprise data initiatives.",
      },
      { property: "og:title", content: "Palantir Foundry & AIP Services | ConfigUSA" },
      {
        property: "og:description",
        content:
          "Enterprise Palantir talent: Ontology architects, PySpark data engineers, Workshop & Slate developers, and AIP AI practitioners.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});
