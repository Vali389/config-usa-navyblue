import React from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
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
        />

        {/* Section 1: Talent Areas */}
        <section id="talent-areas" className="py-12 lg:py-16 bg-white border-b border-[#e2e8f0] scroll-mt-24">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-8 items-start mb-10">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                    TALENT AREAS
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                  Specialist technical capability across complex data architectures.
                </h2>
              </div>
              <div className="lg:col-span-5 text-slate-600 text-sm sm:text-base leading-relaxed lg:pt-2">
                Connecting enterprises with qualified engineers, architects and delivery leads who understand mission-critical data platforms.
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {talentAreas.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-[#102B4E] mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-bold text-[#102B4E] tracking-tight mb-2.5">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 2: Our Talent Process */}
        <section className="py-12 lg:py-16 bg-[#F8FAFC] border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                  OUR TALENT PROCESS
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                A structured, rigorous selection path ensuring fit and capability.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {talentSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-xl border border-slate-200/90 bg-white p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-2xl font-black text-[#C83B43] tracking-tight block mb-4">
                      {step.step}
                    </span>
                    <h3 className="text-base font-bold text-[#102B4E] tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Transparent Engagement */}
        <section className="py-12 lg:py-16 bg-white border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                    TRANSPARENT ENGAGEMENT
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight leading-tight mb-6">
                  What clients can expect throughout the talent engagement.
                </h2>

                <div className="space-y-3.5 mb-8">
                  {transparentEngagement.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C83B43] text-white mt-0.5">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-slate-700 leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
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

        {/* Section 4: Important Clarification Box */}
        <section className="py-10 lg:py-12 bg-[#F3F5F8] border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-200 mt-1">
                  <ShieldAlert className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#102B4E] tracking-tight mb-2">
                    Important clarification
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    ConfigUSA's role in each engagement will be stated accurately. Talent sourcing, staffing and implementation services are distinct offerings. Any partner or authorised status will be claimed only where formally approved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Exact Horizontal Navy Bottom Banner (NO GIANT FORM, NO EMPTY SPACE!) */}
        <section className="bg-[#102B4E] text-white py-8 lg:py-10 border-t border-white/10">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Need specialist data or platform talent?
                </h2>
              </div>
              <div className="lg:col-span-4 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
                Let us know the technical environment, seniority and deployment timeline you require.
              </div>
              <div className="lg:col-span-3 lg:text-right">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded bg-gold px-6 py-3 text-sm font-bold text-primary shadow-md hover:bg-gold/90 transition-all"
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
