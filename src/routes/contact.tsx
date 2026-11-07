import { createFileRoute } from "@tanstack/react-router";
import { ContactView } from "@/components/configusa-site";

export const Route = createFileRoute("/contact")({
  component: ContactView,
  head: () => ({
    meta: [
      { title: "Contact Us | ConfigUSA" },
      { name: "description", content: "Let's start a conversation that moves your business forward. Request specialized talent or discuss an MSP workforce partnership." },
      { property: "og:title", content: "Contact Us | ConfigUSA" },
      { property: "og:description", content: "Let's start a conversation that moves your business forward." },
      { property: "og:type", content: "website" },
    ],
  }),
});

