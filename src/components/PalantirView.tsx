import React from "react";
import { Link } from "@tanstack/react-router";
import {
  Layers,
  Database,
  Cpu,
  Network,
  BriefcaseBusiness,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { PageHero } from "./PageHero";
import { CredentialsSection } from "./CredentialsSection";
import { InquiryForm } from "./InquiryForm";

export function PalantirView() {
  const capabilityAreas = [
    {
      title: "Platform & Solution Architecture",
      icon: Layers,
      desc: "Enterprise architects with deep platform knowledge, ontology modeling skills, and large-scale data system design experience.",
      skills: ["Ontology Design", "Data Lineage", "Multi-tenant Architecture", "Foundry Security"],
    },
    {
      title: "Data Engineering & Analytics",
      icon: Database,
      desc: "Engineers specializing in multi-source ingestion pipelines, dataset transformation, semantic modeling, and analytics enablement.",
      skills: ["PySpark & SQL", "Code Repositories", "Contour & Quiver", "Data Health Checks"],
    },
    {
      title: "Application & Software Engineering",
      icon: Cpu,
      desc: "Frontend and full-stack developers building operational user applications, analytics dashboards, and workflow tooling.",
      skills: ["Workshop Apps", "Slate Dashboards", "TypeScript & React", "OSDK Integrations"],
    },
    {
      title: "Integration & Infrastructure Roles",
      icon: Network,
      desc: "Specialists managing API connectivity, legacy system integration, cloud infrastructure, and security access controls.",
      skills: ["Data Connectors", "REST/GraphQL APIs", "Kafka Streaming", "Hybrid Cloud Deployments"],
    },
    {
      title: "Business Analysis & Delivery Leadership",
      icon: BriefcaseBusiness,
      desc: "Subject-matter experts and delivery managers who translate complex operational requirements into actionable technical backlogs.",
      skills: ["Agile Delivery", "Operational Workflows", "Stakeholder Alignment", "Value Realization"],
    },
    {
      title: "Palantir AIP & Machine Learning Logic",
      icon: Sparkles,
      desc: "Applied AI practitioners embedding LLM workflows, automated decision loops, and governed generative AI into core business processes.",
      skills: ["AIP Logic", "Prompt Engineering", "Model Evaluation", "Operational Guardrails"],
    },
  ];

  const lifecycleSteps = [
    { num: "01", title: "Clarify Role & Context", desc: "Define the operating environment, technical scope, and project objectives." },
    { num: "02", title: "Agree Essential Skills", desc: "Align on required platform expertise, domain background, and seniority." },
    { num: "03", title: "Source and Assess", desc: "Engage vetted candidates through targeted market mapping and technical review." },
    { num: "04", title: "Validate Experience", desc: "Confirm hands-on platform project experience, references, and availability." },
    { num: "05", title: "Coordinate Onboarding", desc: "Facilitate client interviews, compliance verification, and rapid deployment." },
  ];

  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="PALANTIR TALENT & SPECIALIST WORKFORCE"
          title="Specialist Talent for Data-Driven Enterprise Platforms."
          description="ConfigUSA supports organisations seeking specialist professionals for complex data, analytics and enterprise technology environments. Where aligned to client requirements, we can help identify and engage talent with relevant platform and domain experience."
          image="palantir"
          primaryCta={{ label: "Discuss Specialist Talent Needs", to: "/contact" }}
          secondaryCta={{ label: "Explore Capabilities", to: "/services/palantir#areas" }}
        />

        {/* Section 1: Core Capability Areas */}
        <section id="areas" className="py-12 sm:py-16 bg-background scroll-mt-20">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">SPECIALIST TALENT</span>
                  <span className="w-8 h-[2px] bg-gold" />
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
                  Specialist Technical Capability Across Complex Data Architectures
                </h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
                Connecting enterprises with qualified engineers, architects, and delivery leads who understand mission-critical data platforms.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {capabilityAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div
                    key={area.title}
                    className="group rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 mb-5 group-hover:bg-primary group-hover:text-gold transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-primary group-hover:text-slate-brand transition-colors">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {area.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/70 flex flex-wrap gap-1.5">
                      {area.skills.map((s) => (
                        <span key={s} className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 2: Visual Showcase & Data Flow Architecture */}
        <section className="py-12 sm:py-16 bg-slate-50/70 border-y border-border">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">ONTOLOGY & OPERATIONAL LOOP</span>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-primary">
                  Accelerating Value Across the Entire Data Lifecycle
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  From multi-system data ingestion and real-time streaming pipelines to ontology modeling, application development, and AIP agent deployment, ConfigUSA deploys verified talent to accelerate your operational roadmap.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3.5 rounded-xl border border-border bg-white p-4 shadow-xs">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-primary">Multi-Source Ingestion & Lineage</h4>
                      <p className="mt-0.5 text-xs text-muted-foreground">Connecting transactional ERPs, data lakes, legacy mainframes, and IoT sensor feeds into unified semantic layers.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-xl border border-border bg-white p-4 shadow-xs">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-primary">Frontline Operational Applications</h4>
                      <p className="mt-0.5 text-xs text-muted-foreground">Building intuitive user tools with Workshop and Slate that translate complex machine intelligence into decisive frontline actions.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-xl border border-border bg-white p-4 shadow-xs">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-primary">Palantir AIP & Generative Intelligence</h4>
                      <p className="mt-0.5 text-xs text-muted-foreground">Implementing governed Artificial Intelligence Platform capabilities with strict role-based access control and audited logic.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-border bg-slate-900 shadow-xl">
                <img
                  src="/assets/palantir-data-flow.jpg"
                  alt="Palantir dynamic enterprise data pipeline architecture"
                  width={1600}
                  height={900}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-gold">Enterprise Data Platform</p>
                  <p className="text-sm font-medium text-white/90 mt-1">Unified Data Ingestion, Semantic Ontology & Real-Time Operational Decisioning</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Sourcing & Vetting Lifecycle */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">ENGAGEMENT LIFECYCLE</span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-primary">
                A Disciplined Approach to Specialist Talent Delivery
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Rigorous candidate vetting, technical skill validation, and rapid onboarding aligned to your delivery milestones.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {lifecycleSteps.map((step) => (
                <div key={step.num} className="rounded-xl border border-border bg-card p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-gold font-mono text-sm font-bold mb-3">
                      {step.num}
                    </span>
                    <h3 className="text-base font-bold text-primary">{step.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Sourcing Form */}
            <div className="mt-16 rounded-2xl border border-border bg-slate-50/60 p-6 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-brand">TALENT REQUISITION</span>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-primary">
                    Need Specialist Palantir Engineers or Data Architects?
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Tell us about your project requirements, technical stack, and timeline. Our enterprise talent team will align vetted platform practitioners for your review.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary shadow-sm px-6 text-sm font-semibold text-primary-foreground hover:bg-slate-brand transition-colors"
                    >
                      Request Specialist Profiles
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div>
                  <InquiryForm
                    title="Palantir Talent Inquiry"
                    subtitle="Connect with certified data engineers, ontology architects, and AIP developers."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <CredentialsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
