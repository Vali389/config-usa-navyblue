import React from "react";
import { Link } from "@tanstack/react-router";
import {
  Cpu,
  Workflow,
  Network,
  Layers,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { PageHero } from "./PageHero";
import { CredentialsSection } from "./CredentialsSection";
import { InquiryForm } from "./InquiryForm";

export function ForwardDeployedEngineeringView() {
  const fdeAreas = [
    {
      title: "AI & Data Application Engineering",
      desc: "Building data pipelines, deploying operational models, and turning complex analytics into reliable frontline applications.",
      icon: Cpu,
    },
    {
      title: "Workflow & Process Automation",
      desc: "Streamlining enterprise operational workflows, eliminating friction, reducing manual bottlenecks, and accelerating business throughput.",
      icon: Workflow,
    },
    {
      title: "Enterprise System Integration",
      desc: "Connecting disparate platforms, modern REST/GraphQL APIs, and legacy core systems into coherent, interoperable workflows.",
      icon: Network,
    },
    {
      title: "Application Modernisation & Product Engineering",
      desc: "Refactoring mission-critical legacy applications and engineering resilient, cloud-native capabilities for production scale.",
      icon: Layers,
    },
    {
      title: "Deployment, Telemetry & Continuous Improvement",
      desc: "Establishing automated CI/CD pipelines, operational telemetry, real-time alerts, and proactive performance monitoring.",
      icon: TrendingUp,
    },
  ];

  const engagementProcess = [
    { step: "01", title: "Define Mission & Success Criteria", desc: "Establish clear operational goals, technical scope, and measurable delivery milestones." },
    { step: "02", title: "Identify Required Skill Mix", desc: "Determine the exact architectural, engineering, and platform capabilities needed." },
    { step: "03", title: "Embed with Client Stakeholders", desc: "Integrate directly into operational teams, workflows, and development environments." },
    { step: "04", title: "Deliver in Short Feedback Cycles", desc: "Build, test, and release functional software rapidly with continuous user validation." },
    { step: "05", title: "Measure Outcomes & Operationalize", desc: "Track delivery impact, refine system performance, and complete clean documentation handover." },
  ];

  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="FORWARD-DEPLOYED ENGINEERING (FDE)"
          title="Engineering Close to the Problem. Delivery Focused on Outcomes."
          description="Forward-Deployed Engineering brings technical specialists closer to the people, processes and systems they support. ConfigUSA can help clients identify and engage engineering talent to work alongside business and technology teams on defined priorities."
          image="fde"
          primaryCta={{ label: "Build an Engineering Team", to: "/contact" }}
          secondaryCta={{ label: "Learn What FDE Means", to: "/services/forward-deployed-engineering#approach" }}
        />

        {/* Section 1: What FDE Means */}
        <section id="approach" className="py-12 sm:py-16 bg-background scroll-mt-20">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">WHAT FDE MEANS</span>
                  <span className="w-8 h-[2px] bg-gold" />
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary leading-tight">
                  Working Within the Operating Context to Turn Difficult Problems into Working Code
                </h2>
              </div>
              <div className="lg:col-span-5 text-muted-foreground text-sm sm:text-base leading-relaxed lg:border-l lg:border-border lg:pl-6 pt-1">
                Forward-deployed engineers work directly within the client's operating environment. They understand the problem at the source, collaborate with end-users, connect to relevant enterprise systems, and help turn complex business requirements into working, production-ready solutions.
              </div>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {fdeAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div
                    key={area.title}
                    className="group rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 mb-5 group-hover:bg-primary group-hover:text-gold transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-primary group-hover:text-slate-brand transition-colors">
                        {area.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 2: Engagement Lifecycle & Process */}
        <section className="py-12 sm:py-16 bg-slate-50/70 border-y border-border">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">HOW AN ENGAGEMENT WORKS</span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-primary">
                A Structured Lifecycle Designed for Speed, Clarity and Alignment
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Embedded squads focused on continuous user validation, rapid feedback cycles, and operational outcome accountability.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 relative">
              {engagementProcess.map((step) => (
                <div key={step.step} className="group rounded-2xl border border-border bg-white p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-gold font-mono text-xs font-bold mb-4">
                      {step.step}
                    </span>
                    <h3 className="text-sm font-bold text-primary">{step.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Visual Showcase with Business Leaders */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">DISCIPLINED GOVERNANCE</span>
                  <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-primary">
                    Disciplined Engineering Governance Built into Every Sprint
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Depending on the assignment, our forward-deployed pods include solutions architects, AI/ML engineers, data engineers, full-stack software developers, and technical delivery leads.
                  </p>
                </div>

                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-primary">Clear Ownership & Outcome Accountability</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-primary">Close Stakeholder Collaboration</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-primary">Secure Engineering Practices</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-primary">Documented Handover & Knowledge Transfer</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-slate-900 shadow-xl">
                  <img
                    src="/assets/fde-beside-business.jpg"
                    alt="Forward-Deployed Engineers collaborating on frontline enterprise operations"
                    width={1600}
                    height={1067}
                    className="w-full h-80 lg:h-96 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-gold">Embedded Co-Location</p>
                    <p className="text-xs sm:text-sm font-medium text-white/90 mt-1">Bridging the Gap Between Business Ambition & Working Software</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Sourcing Form */}
            <div className="mt-16 rounded-2xl border border-border bg-slate-50/60 p-6 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-brand">FORWARD-DEPLOYED TEAMS</span>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-primary">
                    Facing a Delivery Bottleneck or Complex Integration?
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Tell us what you need to build and we will assemble the right engineering squad with the exact seniority and technical depth required.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary shadow-sm px-6 text-sm font-semibold text-primary-foreground hover:bg-slate-brand transition-colors"
                    >
                      Build an Engineering Team
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div>
                  <InquiryForm
                    title="Forward-Deployed Engineering Request"
                    subtitle="Request specialized pods across full-stack engineering, cloud architecture, and data pipelines."
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
