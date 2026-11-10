import React from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  RefreshCw,
  TrendingUp,
  UserCheck,
  Users,
  Target,
  Cloud,
  Workflow,
  Landmark,
  Info,
} from "lucide-react";

import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { PageHero } from "./PageHero";
import { CredentialsSection } from "./CredentialsSection";

export function GCCView() {
  const supportCards = [
    {
      icon: Target,
      title: "Leadership and critical-role hiring.",
      desc: "Targeted executive search and practice-lead recruitment to establish strong operational governance from day one.",
    },
    {
      icon: Cpu,
      title: "Specialist technology and engineering talent.",
      desc: "Sourcing vetted software engineers, data architects, cloud specialists and enterprise platform professionals.",
    },
    {
      icon: TrendingUp,
      title: "Workforce ramp-up and mobilisation.",
      desc: "High-volume recruitment frameworks designed to meet aggressive expansion milestones without sacrificing quality.",
    },
    {
      icon: UserCheck,
      title: "Contract staffing and permanent hiring.",
      desc: "Flexible engagement structures offering contingent staffing, direct placement and contract-to-hire options.",
    },
    {
      icon: Layers,
      title: "Team build-out for new functions and capabilities.",
      desc: "Assembling multidisciplinary engineering and operational pods for emerging technology capabilities.",
    },
    {
      icon: RefreshCw,
      title: "Workforce transition and scaling support, where agreed.",
      desc: "Structured retention, workforce continuity and capability expansion protocols across mature GCC operations.",
    },
  ];

  const lifecycleSteps = [
    {
      step: "01",
      phase: "Plan",
      text: "Understand capability priorities, roles and ramp-up requirements.",
    },
    {
      step: "02",
      phase: "Build",
      text: "Identify leadership and specialist talent for priority functions.",
    },
    {
      step: "03",
      phase: "Scale",
      text: "Mobilise teams against agreed hiring plans and timelines.",
    },
    {
      step: "04",
      phase: "Strengthen",
      text: "Support retention, workforce continuity and capability expansion.",
    },
  ];

  const talentDomains = [
    {
      name: "AI and data",
      icon: Cpu,
      desc: "Machine learning, data engineering, analytics pipelines and business intelligence.",
    },
    {
      name: "Cloud and cybersecurity",
      icon: Cloud,
      desc: "Cloud infrastructure, DevOps, platform engineering and security operations.",
    },
    {
      name: "Enterprise applications",
      icon: Layers,
      desc: "Workday, SAP, MuleSoft, Salesforce and enterprise system integrations.",
    },
    {
      name: "Software engineering",
      icon: Workflow,
      desc: "Full-stack development, modern microservices, APIs and digital product engineering.",
    },
    {
      name: "Product and platform teams",
      icon: Users,
      desc: "Technical product management, architecture, agile delivery and quality engineering.",
    },
    {
      name: "Finance operations and risk technology",
      icon: Landmark,
      desc: "Quantitative analytics, financial technology, risk modeling and regulatory reporting.",
    },
  ];

  const engagementPoints = [
    "A dedicated client contact",
    "Agreed role priorities",
    "Transparent recruitment reporting",
    "A mobilisation plan aligned to the client's operating model",
  ];

  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="GCC SOLUTIONS"
          title="Build and scale your GCC with the right talent and workforce strategy."
          description="Global Capability Centres are evolving from cost-focused operations into strategic hubs for technology, data, engineering and business services. ConfigUSA supports organisations with specialist talent and workforce solutions aligned to their GCC growth plans."
          image="gcc"
          primaryCta={{ label: "Discuss Your GCC Plans", to: "/contact" }}
          secondaryCta={{ label: "How We Support GCCs", to: "#how-we-support" }}
        />

        {/* Section 1: How We Support GCCs */}
        <section id="how-we-support" className="py-12 lg:py-16 bg-white border-b border-border/80 scroll-mt-24">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-8 items-start mb-10">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-px w-7 bg-gold" aria-hidden="true" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-brand">
                    HOW WE SUPPORT GCCS
                  </p>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight leading-tight">
                  Specialist talent and workforce solutions across GCC initiatives.
                </h2>
              </div>
              <div className="lg:col-span-5 text-muted-foreground text-sm sm:text-base leading-relaxed lg:pt-2">
                ConfigUSA supports organisations with specialist talent and workforce solutions aligned to their GCC growth plans.
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportCards.map((card) => {
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

        {/* Section 2: Support Across the GCC Lifecycle */}
        <section className="py-12 lg:py-16 bg-slate-50/70 border-b border-border/80">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-7 bg-gold" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-brand">
                  SUPPORT ACROSS THE GCC LIFECYCLE
                </p>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight leading-tight">
                A structured roadmap supporting setup, scaling and maturity.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {lifecycleSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display text-2xl font-bold text-gold tracking-tight">
                        {step.step}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-1 rounded">
                        Phase {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-primary tracking-tight mb-2">
                      {step.phase}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Typical GCC Talent Domains */}
        <section className="py-12 lg:py-16 bg-white border-b border-border/80">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-8 items-start mb-10">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-px w-7 bg-gold" aria-hidden="true" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-brand">
                    TYPICAL GCC TALENT DOMAINS
                  </p>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight leading-tight">
                  Specialist capability across technical and operational domains.
                </h2>
              </div>
              <div className="lg:col-span-5 text-muted-foreground text-sm sm:text-base leading-relaxed lg:pt-2">
                AI and data, cloud and cybersecurity, enterprise applications, software engineering, product and platform teams, finance operations and risk technology—subject to confirmed sourcing capability.
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {talentDomains.map((domain) => {
                const Icon = domain.icon;
                return (
                  <div
                    key={domain.name}
                    className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all flex flex-col"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-primary tracking-tight mb-2">
                      {domain.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {domain.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4: Our Engagement Approach - Strictly on ConfigUSA Theme */}
        <section className="py-12 lg:py-16 bg-slate-50/70 border-b border-border/80">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-px w-7 bg-gold" aria-hidden="true" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-brand">
                    OUR ENGAGEMENT APPROACH
                  </p>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight leading-tight mb-6">
                  Accountable recruitment and talent delivery for GCC hubs.
                </h2>

                <div className="space-y-3.5 mb-8">
                  {engagementPoints.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                      <span className="text-sm sm:text-base font-semibold text-primary leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-border bg-card p-5 shadow-xs flex items-start gap-3.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5">
                    <Info className="h-4 w-4" />
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-primary font-semibold">Scope of Service:</strong>{" "}
                    Legal entity formation, tax, regulatory and real-estate advisory are outside scope unless provided through qualified partners.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg">
                  <img
                    src="/assets/gcc-enterprise-hub-exact.jpg"
                    alt="Global Capability Centre in India"
                    className="w-full h-80 sm:h-96 object-cover object-center"
                  />
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
                  Planning or scaling a GCC in India?
                </h2>
              </div>
              <div className="lg:col-span-4 text-primary-foreground/80 text-sm sm:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
                Talk to our team about market insights, talent availability and engagement structures.
              </div>
              <div className="lg:col-span-3 lg:text-right">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded bg-gold px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-gold/90 transition-all"
                >
                  Discuss Your GCC Plans
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
