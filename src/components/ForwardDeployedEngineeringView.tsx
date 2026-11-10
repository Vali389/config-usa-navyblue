import React from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Cpu,
  Layers,
  Network,
  RefreshCw,
  Workflow,
} from "lucide-react";

import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { PageHero } from "./PageHero";
import { CredentialsSection } from "./CredentialsSection";

export function ForwardDeployedEngineeringView() {
  const fdeAreas = [
    {
      icon: Cpu,
      title: "AI and data application engineering",
      desc: "Building data pipelines, deploying operational models, and turning analytics into reliable frontline applications.",
    },
    {
      icon: Workflow,
      title: "Workflow and process automation",
      desc: "Streamlining enterprise operational workflows, reducing friction, and eliminating manual bottlenecks.",
    },
    {
      icon: Network,
      title: "Enterprise system integration",
      desc: "Connecting disparate platforms, modern APIs, and legacy systems into coherent, interoperable workflows.",
    },
    {
      icon: Layers,
      title: "Application modernisation and product engineering",
      desc: "Refactoring mission-critical applications and engineering cloud-native capabilities for production scale.",
    },
    {
      icon: RefreshCw,
      title: "Deployment, monitoring and continuous improvement",
      desc: "Establishing continuous deployment pipelines, operational telemetry, and reliable performance monitoring.",
    },
  ];

  const fdeLifecycle = [
    {
      step: "01",
      title: "Define mission & success criteria",
      desc: "Establish clear operational goals, technical scope, and measurable delivery milestones.",
    },
    {
      step: "02",
      title: "Identify required skill mix",
      desc: "Determine the exact architectural, engineering, and platform capabilities needed.",
    },
    {
      step: "03",
      title: "Embed with client stakeholders",
      desc: "Integrate directly into operational teams, workflows, and development environments.",
    },
    {
      step: "04",
      title: "Deliver in short feedback cycles",
      desc: "Build, test, and release functional software rapidly with continuous user validation.",
    },
    {
      step: "05",
      title: "Measure outcomes and adjust",
      desc: "Track delivery impact, refine system performance, and transition documentation.",
    },
  ];

  const deliveryPrinciples = [
    "Clear ownership",
    "Close stakeholder collaboration",
    "Secure engineering practices",
    "Documented handover",
    "Measurable acceptance criteria",
  ];

  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="FORWARD-DEPLOYED ENGINEERING"
          title="Engineering close to the problem. Delivery focused on outcomes."
          description="Forward-Deployed Engineering brings technical specialists closer to the people, processes and systems they support. ConfigUSA can help clients identify and engage engineering talent to work alongside business and technology teams on defined priorities."
          image="fde"
          primaryCta={{ label: "Discuss an Engineering Need", to: "/contact" }}
          secondaryCta={{ label: "Areas of Work", to: "#areas-of-work" }}
        />

        {/* Section 1: What FDE Means */}
        <section className="py-12 lg:py-16 bg-white border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                    WHAT FDE MEANS
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                  Working within the operating context to turn difficult problems into working code.
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed lg:pt-2">
                <p>
                  Forward-deployed engineers work within the client's environment, directly engaging with business stakeholders, operational users, and technical teams to identify high-value operational bottlenecks.
                </p>
                <p>
                  FDE is particularly effective in mission-critical environments: ERP customizations, complex data analytics pipelines (e.g. Palantir Foundry / AIP), and supply chain logistics integrations where abstract requirement documents fail to capture real-world operational nuances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Typical Areas of Work */}
        <section id="areas-of-work" className="py-12 lg:py-16 bg-[#F8FAFC] border-b border-[#e2e8f0] scroll-mt-24">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                  TYPICAL AREAS OF WORK
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Where forward-deployed engineers create immediate operational impact.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fdeAreas.map((card) => {
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

        {/* Section 3: How An Engagement Works */}
        <section className="py-12 lg:py-16 bg-white border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                  HOW AN ENGAGEMENT WORKS
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                A structured lifecycle designed for speed, clarity and alignment.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {fdeLifecycle.map((step) => (
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

        {/* Section 4: Delivery Principles */}
        <section className="py-12 lg:py-16 bg-[#F8FAFC] border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                    DELIVERY PRINCIPLES
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight leading-tight mb-4">
                  Disciplined engineering governance built into every sprint.
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Depending on the assignment, teams may include solution architects, AI/ML engineers, data engineers, software developers, integration specialists, QA engineers and product or delivery leads.
                </p>

                <div className="space-y-3 mb-8">
                  {deliveryPrinciples.map((principle) => (
                    <div key={principle} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C83B43] text-white">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-slate-700 leading-snug">
                        {principle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                  <img
                    src="/assets/fde-beside-business-exact.jpg"
                    alt="Forward-Deployed Engineering Team"
                    className="w-full h-80 sm:h-96 object-cover object-center"
                  />
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
                  Facing a delivery bottleneck or complex integration?
                </h2>
              </div>
              <div className="lg:col-span-4 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
                Tell us what you need to build and we will assemble the right engineering capability.
              </div>
              <div className="lg:col-span-3 lg:text-right">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded bg-gold px-6 py-3 text-sm font-bold text-primary shadow-md hover:bg-gold/90 transition-all"
                >
                  Build an Engineering Team
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
