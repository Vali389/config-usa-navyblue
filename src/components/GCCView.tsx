import React from "react";
import { Link } from "@tanstack/react-router";
import {
  Cpu,
  ShieldCheck,
  Layers,
  Network,
  Workflow,
  Landmark,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { PageHero } from "./PageHero";
import { CredentialsSection } from "./CredentialsSection";
import { InquiryForm } from "./InquiryForm";

export function GCCView() {
  const gccDomains = [
    {
      name: "AI and Data Analytics",
      icon: Cpu,
      desc: "Machine learning engineering, generative AI integration, enterprise data lakehouses, and business intelligence.",
    },
    {
      name: "Cloud and Cybersecurity",
      icon: ShieldCheck,
      desc: "Multi-cloud infrastructure, Kubernetes platform engineering, DevOps automation, and security operations (SOC/SIEM).",
    },
    {
      name: "Enterprise Applications",
      icon: Layers,
      desc: "SAP S/4HANA, Workday HCM/Financials, Salesforce, and core enterprise application implementations and integrations.",
    },
    {
      name: "Core Software & Product Engineering",
      icon: Network,
      desc: "High-scale backend architectures, microservices APIs, full-stack web, and enterprise mobile product development.",
    },
    {
      name: "Product & Platform Teams",
      icon: Workflow,
      desc: "Technical program management, solution architecture, agile scrum leads, and UI/UX design systems.",
    },
    {
      name: "Finance, Risk & Operations Technology",
      icon: Landmark,
      desc: "Quantitative modeling, regulatory reporting, financial crime compliance, and automated back-office operations.",
    },
  ];

  const gccLifecycle = [
    {
      step: "01",
      phase: "Strategy & Site Advisory",
      desc: "Location benchmarking, talent availability mapping, compensation indexing, and operating model alignment for Indian tech hubs.",
    },
    {
      step: "02",
      phase: "Leadership & Anchor Hiring",
      desc: "Sourcing proven site leaders, enterprise architects, practice leads, and core technical anchors to build the hub's foundation.",
    },
    {
      step: "03",
      phase: "Rapid Pod Scaling",
      desc: "Scaling cross-functional pods across software, data, cloud, and QA with rigorous technical screening and vetted onboarding.",
    },
    {
      step: "04",
      phase: "Maturity & Value Creation",
      desc: "Transforming delivery units into autonomous innovation centers that own product roadmaps and drive global enterprise IP.",
    },
  ];

  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="GLOBAL CAPABILITY CENTERS (GCC)"
          title="Build, Scale and Mature Your Global Capability Center in India."
          description="ConfigUSA partners with global enterprises to establish, expand and optimize Global Capability Centers in India. From strategic talent acquisition to operational scaling, we provide the talent intelligence and delivery infrastructure for high-performing engineering hubs."
          image="gcc"
          primaryCta={{ label: "Discuss Your GCC Plans", to: "/contact" }}
          secondaryCta={{ label: "Explore GCC Roadmap", to: "/gcc#lifecycle" }}
        />

        {/* Section 1: Overview & Strategic Value */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">STRATEGIC EXPANSION</span>
                  <span className="w-8 h-[2px] bg-gold" />
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary leading-tight">
                  Transforming Indian Hubs from Cost Arbitrage to Autonomous Innovation Drivers
                </h2>
              </div>
              <div className="lg:col-span-5 text-muted-foreground text-sm sm:text-base leading-relaxed lg:border-l lg:border-border lg:pl-6 pt-1">
                The narrative surrounding GCCs in India has fundamentally shifted. Where past decades focused on back-office maintenance, today's Tier-1 GCCs drive proprietary software development, cloud transformations, generative AI research, and executive leadership.
              </div>
            </div>

            {/* Lifecycle Roadmap */}
            <div id="lifecycle" className="mt-16 scroll-mt-20">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">SUPPORT ACROSS THE LIFECYCLE</span>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-primary">
                  A Structured Roadmap Supporting Setup, Scaling & Maturity
                </h3>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {gccLifecycle.map((item) => (
                  <div
                    key={item.step}
                    className="group rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-gold font-mono font-bold text-xs">
                          {item.step}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-brand">Phase {item.step}</span>
                      </div>
                      <h4 className="text-base font-bold text-primary mb-2">{item.phase}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Typical GCC Talent Domains */}
        <section className="py-12 sm:py-16 bg-slate-50/70 border-y border-border">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-8 items-start mb-10">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">TALENT DOMAINS</span>
                  <span className="w-8 h-[2px] bg-gold" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary">
                  Specialist Capability Across Technical and Operational Domains
                </h3>
              </div>
              <div className="lg:col-span-5 text-muted-foreground text-xs sm:text-sm leading-relaxed lg:border-l lg:border-border lg:pl-6 pt-1">
                AI and data engineering, cloud and cybersecurity, enterprise applications (SAP/Workday), full-stack product engineering, and quantitative risk technology.
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gccDomains.map((dom) => {
                const Icon = dom.icon;
                return (
                  <div
                    key={dom.name}
                    className="group rounded-2xl border border-border bg-white p-6 shadow-xs hover:-translate-y-1 hover:shadow-md hover:border-gold transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-gold transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-base font-bold text-primary mb-2">{dom.name}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{dom.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Visual Campus Showcase & Hyderabad Delivery Center */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">INDIA OPERATIONS</span>
                  <h3 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-primary">
                    Direct Access to ConfigUSA's Hyderabad Delivery Center
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Our established engineering center in Hyderabad (Madhapur, Hitech City) provides the operational infrastructure, talent intelligence, and recruitment bandwidth needed to launch or scale your GCC smoothly.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-primary">Dedicated client engagement partner and technical delivery management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-primary">Pre-screened candidate pipelines across high-demand enterprise stacks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-primary">Transparent reporting, compensation benchmarking, and rapid mobilisation plans</span>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-slate-50 p-4 text-xs text-muted-foreground">
                  <strong className="text-primary">Delivery Hub Address:</strong> Trendz Sapphire, 3rd Floor, Flat No. 1-99/V/2, Vittal Rao Nagar, Madhapur, Hitech City, Hyderabad – 500081, Telangana, India. Phone: +91 80746 83380.
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-slate-900 shadow-xl">
                  <img
                    src="/assets/gcc-enterprise-hub.jpg"
                    alt="ConfigUSA Global Capability Center technology campus in India"
                    width={1600}
                    height={1200}
                    className="w-full h-80 lg:h-96 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-gold">GCC Delivery Center</p>
                    <p className="text-xs sm:text-sm font-medium text-white/90 mt-1">Tier-1 Technology Campus & Global Sourcing Infrastructure</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Sourcing Form */}
            <div className="mt-16 rounded-2xl border border-border bg-slate-50/60 p-6 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-brand">GCC ENGAGEMENT</span>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-primary">
                    Planning or Scaling a GCC in India?
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Talk to our cross-border delivery team about Indian talent availability, location insights, and customized engagement structures.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary shadow-sm px-6 text-sm font-semibold text-primary-foreground hover:bg-slate-brand transition-colors"
                    >
                      Discuss Your GCC Plans
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div>
                  <InquiryForm
                    title="GCC Solutions Inquiry"
                    subtitle="Connect with our global cross-border workforce leaders."
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
