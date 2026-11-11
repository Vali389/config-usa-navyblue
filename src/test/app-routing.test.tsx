import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { inquirySchema } from "@/lib/inquiry-schema";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("accepts a complete valid talent inquiry", () => {
    expect(inquirySchema.safeParse({
      inquiryType: "talent",
      fullName: "Avery Smith",
      email: "avery@example.com",
      company: "Example Co",
      phone: "+1 555-0199",
      country: "United States",
      subject: "SAP S/4HANA Talent Request",
      message: "We are looking for SAP implementation support.",
      consent: true,
    }).success).toBe(true);
  });

  it("rejects an invalid business email", () => {
    expect(inquirySchema.safeParse({
      inquiryType: "business",
      name: "Avery Smith",
      email: "not-an-email",
      company: "Example Co",
      message: "We would like to discuss a partnership.",
    }).success).toBe(false);
  });

  it("rejects a message shorter than ten characters", () => {
    expect(inquirySchema.safeParse({
      inquiryType: "msp",
      fullName: "Avery Smith",
      email: "avery@example.com",
      company: "Example Co",
      phone: "+1 555-0199",
      country: "United States",
      subject: "MSP Inquiry",
      message: "Too short",
      consent: true,
    }).success).toBe(false);
  });

  it("verifies all eight primary navigation routes resolve correctly", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const keyRoutes = [
      "/",
      "/about",
      "/why-configusa",
      "/leadership",
      "/solutions/it-staffing",
      "/solutions/workforce-solutions",
      "/solutions/msp-vms",
      "/solutions/technology-consulting",
      "/services/forward-deployed-engineering",
      "/services/palantir",
      "/gcc",
      "/expertise/sap",
      "/expertise/workday",
      "/expertise/cloud-infrastructure",
      "/expertise/ai-data-digital",
      "/industries",
      "/global-presence",
      "/careers",
      "/contact",
    ];

    for (const path of keyRoutes) {
      const matches = router.matchRoutes(path);
      expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    }
  });
});
