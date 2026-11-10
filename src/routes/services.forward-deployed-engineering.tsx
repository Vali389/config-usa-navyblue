import { createFileRoute } from "@tanstack/react-router";
import { ForwardDeployedEngineeringView } from "@/components/ForwardDeployedEngineeringView";

export const Route = createFileRoute("/services/forward-deployed-engineering")({
  component: ForwardDeployedEngineeringView,
  head: () => ({
    meta: [
      { title: "Forward-Deployed Engineering (FDE) | ConfigUSA" },
      {
        name: "description",
        content:
          "Elite forward-deployed engineers embedded beside your operational business units to solve complex workflow challenges and accelerate production velocity.",
      },
      { property: "og:title", content: "Forward-Deployed Engineering | ConfigUSA" },
      {
        property: "og:description",
        content:
          "Engineers embedded at the operational frontline to shorten feedback loops and ship high-value software into production.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});
