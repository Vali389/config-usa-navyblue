import { createFileRoute } from "@tanstack/react-router";
import { TermsView } from "@/components/configusa-site";

export const Route = createFileRoute("/terms")({
  component: TermsView,
  head: () => ({
    meta: [
      { title: "Terms of Use | ConfigUSA" },
      { name: "description", content: "ConfigUSA Terms of Use and website usage terms." },
    ],
  }),
});

