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
      inquiryType: "staffing",
      name: "Avery Smith",
      email: "avery@example.com",
      company: "Example Co",
      message: "We are looking for SAP implementation support.",
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
      name: "Avery Smith",
      email: "avery@example.com",
      company: "Example Co",
      message: "Too short",
    }).success).toBe(false);
  });
});
