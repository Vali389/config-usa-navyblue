import { createFileRoute } from "@tanstack/react-router";
import { LeadershipView } from "@/components/configusa-site";

export const Route = createFileRoute("/leadership")({
  component: LeadershipView,
  head: () => ({
    meta: [
      { title: "Leadership | ConfigUSA" },
      { name: "description", content: "ConfigUSA leadership grounded in relationships, accountability, and international workforce growth." },
      { property: "og:title", content: "Leadership | ConfigUSA" },
      { property: "og:description", content: "ConfigUSA leadership grounded in relationships, accountability, and international workforce growth." },
      { property: "og:type", content: "website" },
    ],
  }),
});

