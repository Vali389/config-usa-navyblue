import { createFileRoute } from "@tanstack/react-router";
import { SAPView } from "@/components/configusa-site";

export const Route = createFileRoute("/expertise/sap")({
  component: SAPView,
  head: () => ({
    meta: [
      { title: "SAP Talent Solutions | ConfigUSA" },
      { name: "description", content: "Specialized SAP talent for complex enterprise environments: S/4HANA, FICO, MM/SD, ABAP, Basis, and Integration specialists." },
      { property: "og:title", content: "SAP Talent Solutions | ConfigUSA" },
      { property: "og:description", content: "Specialized SAP talent for complex enterprise environments." },
      { property: "og:type", content: "website" },
    ],
  }),
});

