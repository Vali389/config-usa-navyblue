import { createFileRoute } from "@tanstack/react-router";
import { AccessibilityView } from "@/components/configusa-site";

export const Route = createFileRoute("/accessibility")({
  component: AccessibilityView,
  head: () => ({
    meta: [
      { title: "Accessibility Statement | ConfigUSA" },
      { name: "description", content: "ConfigUSA accessibility statement and digital inclusion standards." },
    ],
  }),
});

