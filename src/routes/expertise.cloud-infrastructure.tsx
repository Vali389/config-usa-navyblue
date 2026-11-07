import { createFileRoute } from "@tanstack/react-router";
import { CloudInfrastructureView } from "@/components/configusa-site";

export const Route = createFileRoute("/expertise/cloud-infrastructure")({
  component: CloudInfrastructureView,
  head: () => ({
    meta: [
      { title: "Cloud & Infrastructure Expertise | ConfigUSA" },
      { name: "description", content: "Powering modern IT environments with specialized talent: AWS, Azure, Google Cloud, DevOps, and Cybersecurity." },
      { property: "og:title", content: "Cloud & Infrastructure Expertise | ConfigUSA" },
      { property: "og:description", content: "Powering modern IT environments with specialized technology talent." },
      { property: "og:type", content: "website" },
    ],
  }),
});

