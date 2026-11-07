import { createFileRoute } from "@tanstack/react-router";
import { GlobalPresenceView } from "@/components/configusa-site";

export const Route = createFileRoute("/global-presence")({
  component: GlobalPresenceView,
  head: () => ({
    meta: [
      { title: "Global Presence | ConfigUSA" },
      { name: "description", content: "Global capabilities. Regional understanding. One commitment to excellence across the United States, India, and Canada." },
      { property: "og:title", content: "Global Presence | ConfigUSA" },
      { property: "og:description", content: "Global capabilities. Regional understanding. One commitment to excellence." },
      { property: "og:type", content: "website" },
    ],
  }),
});

