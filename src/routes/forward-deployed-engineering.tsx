import { createFileRoute } from "@tanstack/react-router";
import { ForwardDeployedEngineeringView } from "@/components/ForwardDeployedEngineeringView";

export const Route = createFileRoute("/forward-deployed-engineering")({
  component: ForwardDeployedEngineeringView,
  head: () => ({
    meta: [
      { title: "Forward-Deployed Engineering | ConfigUSA" },
      {
        name: "description",
        content:
          "Elite forward-deployed engineers embedded beside your operational business units to solve complex workflow challenges.",
      },
      { property: "og:title", content: "Forward-Deployed Engineering | ConfigUSA" },
      { property: "og:type", content: "website" },
    ],
  }),
});
