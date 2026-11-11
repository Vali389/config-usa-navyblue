import React from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  Network,
  UsersRound,
  ShieldAlert,
} from "lucide-react";

import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { PageHero } from "./PageHero";
import { CredentialsSection } from "./CredentialsSection";

export function PalantirView() {
  const talentAreas = [
    {
      icon: Layers,
      title: "Platform and solution architecture",
      desc: "Enterprise architects with deep platform knowledge, ontology modeling skills, and large-scale data system design experience.",
    },
    {
      icon: Database,
      title: "Data engineering and analytics",
      desc: "Engineers specializing in multi-source ingestion pipelines, dataset transformation, semantic modeling, and analytics enablement.",
    },
    {
      icon: Cpu,
      title: "Application and software engineering",
      desc: "Frontend and full-stack developers building operational user applications, analytics dashboards, and workflow tooling.",
    },
    {
      icon: Network,
      title: "Integration and infrastructure roles",
      desc: "Specialists managing API connectivity, legacy system integration, cloud infrastructure, and security access controls.",
    },
    {
      icon: UsersRound,
      title: "Business analysis, product and delivery leadership",
      desc: "Subject-matter experts and delivery managers who translate complex operational requirements into actionable technical backlogs.",
    },
  ];

  const talentSteps = [
    {
      step: "01",
      title: "Clarify role & context",
      desc: "Define the operating environment, technical scope, and project objectives.",
    },
    {
      step: "02",
      title: "Agree essential skills",
      desc: "Align on required platform expertise, domain background, and seniority.",
    },
    {
      step: "03",
      title: "Source and assess",
      desc: "Engage vetted candidates through targeted market mapping and technical review.",
    },
    {
      step: "04",
      title: "Validate experience",
      desc: "Confirm hands-on platform project experience, references, and availability.",
    },
    {
      step: "05",
      title: "Coordinate onboarding",
      desc: "Facilitate client interviews, compliance verification, and rapid deployment.",
    },
  ];

  const transparentEngagement = [
    "A clearly defined search brief tailored to your data environment.",
    "Transparent candidate status throughout the sourcing cycle.",
    "Relevant skill validation and practitioner-led assessment.",
    "Regular communication from initial requirement to deployment.",
  ];

  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="PALANTIR TALENT & SPECIALIST WORKFORCE"
          title="Specialist talent for data-driven enterprise platforms."
          description="ConfigUSA supports organisations seeking specialist professionals for complex data, analytics and enterprise technology environments. Where aligned to client requirements, we can help identify and engage talent with relevant platform and domain experience."
          image="palantir"
          primaryCta={{ label: "Request Specialist Talent", to: "/contact" }}
          secondaryCta={{ label: "Talent Areas", to: "#talent-areas" }}
          badgeText="Enterprise Technology, Workforce & Managed Delivery Partner"
        />

        {/* Section 1: Talent Areas */}
        <section id="talent-areas" className="py-12 lg:py-16 bg-white border-b border-border/80 scroll-mt-24">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-8 items-start mb-10">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-px w-7 bg-gold" aria-hidden="true" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-brand">
                    TALENT AREAS
                  </p>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight leading-tight">
                  Specialist technical capability across complex data architectures.
                </h2>
              </div>
              <div className="lg:col-span-5 text-muted-foreground text-sm sm:text-base leading-relaxed lg:pt-2">
                Connecting enterprises with qualified engineers, architects and delivery leads who understand mission-critical data platforms.
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {talentAreas.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all flex flex-col"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-bold text-primary tracking-tight mb-2.5">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 2: Our Talent Process */}
        <section className="py-12 lg:py-16 bg-slate-50/70 border-b border-border/80">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-7 bg-gold" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-brand">
                  OUR TALENT PROCESS
                </p>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight leading-tight">
                A structured, rigorous selection path ensuring fit and capability.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {talentSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="font-display text-2xl font-bold text-gold tracking-tight block mb-4">
                      {step.step}
                    </span>
                    <h3 className="text-base font-bold text-primary tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Transparent Engagement - Strictly on ConfigUSA Theme */}
        <section className="py-12 lg:py-16 bg-white border-b border-border/80">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-px w-7 bg-gold" aria-hidden="true" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-brand">
                    TRANSPARENT ENGAGEMENT
                  </p>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight leading-tight mb-6">
                  What clients can expect throughout the talent engagement.
                </h2>

                <div className="space-y-3.5 mb-8">
                  {transparentEngagement.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-semibold text-primary leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg">
                  <img
                    src="/assets/hero-data-exact.jpg"
                    alt="Enterprise Data Engineering Team"
                    className="w-full h-80 sm:h-96 object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Important Clarification Box - ConfigUSA Theme */}
        <section className="py-10 lg:py-12 bg-slate-50/70 border-b border-border/80">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8 lg:p-10 shadow-xs max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 mt-1">
                  <ShieldAlert className="h-5 w-5 text-gold" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-primary tracking-tight mb-2">
                    Important clarification
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    ConfigUSA's role in each engagement will be stated accurately. Talent sourcing, staffing and implementation services are distinct offerings. Any partner or authorised status will be claimed only where formally approved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: ConfigUSA Theme Horizontal Navy Bottom Banner */}
        <section className="bg-primary text-primary-foreground py-10 lg:py-12 border-t border-primary/20">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                  Need specialist data or platform talent?
                </h2>
              </div>
              <div className="lg:col-span-4 text-primary-foreground/80 text-sm sm:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
                Let us know the technical environment, seniority and deployment timeline you require.
              </div>
              <div className="lg:col-span-3 lg:text-right">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded bg-gold px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-gold/90 transition-all"
                >
                  Discuss Specialist Talent Needs
                  <ArrowRight className="h-4 w-4" />
                </Link>
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
