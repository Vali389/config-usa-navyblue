import { createFileRoute } from "@tanstack/react-router";
import { PrivacyView } from "@/components/configusa-site";

export const Route = createFileRoute("/privacy")({
  component: PrivacyView,
  head: () => ({
    meta: [
      { title: "Privacy Policy | ConfigUSA" },
      { name: "description", content: "ConfigUSA Privacy Policy and data protection practices." },
    ],
  }),
});

