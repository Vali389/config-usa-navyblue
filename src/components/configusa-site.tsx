import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Database,
  Globe2,
  HeartPulse,
  Landmark,
  Layers,
  Network,
  Server,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Users,
  Award,
  Lock,
} from "lucide-react";

import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { TrustRibbon } from "./TrustRibbon";
import { CredentialsSection } from "./CredentialsSection";
import { InquiryForm } from "./InquiryForm";
import { CareersExplorer } from "./CareersExplorer";
import { PageHero } from "./PageHero";

import heroImage from "@/assets/configusa-corporate-hero.jpg";
import platformImage from "@/assets/enterprise-platforms.jpg";
import industryImage from "@/assets/industry-expertise.jpg";
import globalImage from "@/assets/global-footprint.jpg";
import careersImage from "@/assets/configusa-careers.jpg";

import {
  industryList,
  globalHubs,
} from "@/lib/configusa-content";

/* =========================================================================
   1. HOMEPAGE VIEW (ALL 9 SECTIONS + CREDENTIALS)
   ========================================================================= */
export function HomeView() {
  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* SECTION 1 — HERO */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <div className="flex flex-col justify-center px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gold" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  ENTERPRISE TECHNOLOGY & WORKFORCE SOLUTIONS
                </p>
              </div>

              <h1 className="font-display text-3xl font-bold leading-[1.14] tracking-tight text-white sm:text-4xl lg:text-[50px]">
                The Right Talent. The Right Expertise. <span className="text-gold">The Confidence to Deliver.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                ConfigUSA helps organizations meet complex technology and workforce demands by connecting them with specialized professionals, scalable staffing solutions, and dependable delivery across global markets.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-[4px] bg-gold px-6 text-sm font-semibold text-primary shadow-sm hover:shadow-md transition-all hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  Request Talent
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/solutions/it-staffing"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-[4px] border border-white/30 bg-primary/40 px-6 text-sm font-semibold text-white shadow-sm hover:shadow-md transition-colors hover:border-gold hover:text-gold"
                >
                  Explore Our Solutions
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-8 border-l border-gold/70 pl-4 text-xs tracking-wide text-primary-foreground/75">
                Specialized Talent · Reliable Delivery · Global Reach
              </div>
            </div>

            <div className="relative min-h-[340px] sm:min-h-[420px] lg:min-h-full overflow-hidden bg-slate-900">
              <img
                src="/assets/hero-corporate-final.jpg"
                alt="ConfigUSA enterprise technology leadership and executive workforce partners"
                width={1920}
                height={1080}
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-cover object-center filter brightness-[1.12] contrast-[1.03] saturate-[1.06] transition-transform duration-700 hover:scale-105"
              />
              {/* Subtle edge blend only on left boundary to preserve full daylight brightness */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-primary/60 to-transparent pointer-events-none hidden lg:block" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none lg:hidden" />
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto flex items-center gap-3.5 border-l-2 border-gold bg-primary/95 backdrop-blur-md px-5 py-3 text-xs text-primary-foreground shadow-2xl rounded-[4px]">
                <img
                  src="/assets/configusa-logo-official.png"
                  alt="ConfigUSA Logo"
                  className="h-7 w-auto bg-white/95 rounded px-1.5 py-0.5 shadow-sm"
                />
                <div>
                  <span className="block font-semibold text-white tracking-wide">ConfigUSA · Enterprise Delivery Partner</span>
                  <span className="mt-0.5 block text-[11px] text-primary-foreground/80">United States · India · Canada</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supporting Trust Points Ribbon */}
        <TrustRibbon />

        {/* SECTION 2 — WHO WE ARE */}
        <section className="py-10 sm:py-14 lg:py-16 bg-background">
          <div className="mx-auto grid max-w-[1380px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:px-12">
            <div className="relative min-h-[320px] sm:min-h-[420px] overflow-hidden rounded-xl shadow-md border border-border bg-slate-900">
              <img
                src="/assets/who-we-are.jpg"
                alt="ConfigUSA enterprise leadership team in strategic client consultation"
                width={1600}
                height={960}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center filter brightness-[1.12] contrast-[1.02] saturate-[1.05]"
              />
              <div className="absolute bottom-0 left-0 bg-gold px-5 py-3.5 text-xs sm:text-sm font-semibold text-gold-foreground shadow-lg rounded-tr-lg">
                People. Technology. Partnership.
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">WHO WE ARE</p>
              <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
                Your Strategic Partner in Technology Talent and Workforce Solutions
              </h2>

              <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                <p>
                  In today's rapidly evolving business environment, access to the right expertise is essential to achieving business objectives.
                </p>
                <p>
                  ConfigUSA partners with organizations to address complex workforce challenges through specialized IT staffing, enterprise technology talent, and flexible workforce solutions.
                </p>
                <p>
                  Our approach combines an understanding of client requirements, disciplined talent acquisition, and a commitment to consistent delivery. Whether supporting enterprise transformation initiatives, critical technology programs, or ongoing workforce needs, we focus on connecting businesses with professionals who can make a meaningful difference.
                </p>
              </div>

              <blockquote className="mt-4 border-l-2 border-gold pl-4 py-1 text-sm sm:text-base font-semibold text-primary">
                We don't simply fill positions. We help organizations build the teams that move business forward.
              </blockquote>

              <div className="mt-5">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-semibold text-primary hover:text-slate-brand transition-colors"
                >
                  More about ConfigUSA
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — OUR SOLUTIONS (WHAT WE DO) */}
        <section className="bg-[#F8F9F7]/70 dark:bg-muted/10 py-10 sm:py-12 lg:py-14 border-y border-border">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">WHAT WE DO</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                Workforce Solutions Built Around Your Business
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                Disciplined recruiting models and technical competencies configured to meet exact organizational needs.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {/* Solution 1 */}
              <div className="group flex flex-col justify-between rounded-xl border border-slate-200/90 dark:border-border bg-white dark:bg-card p-5 shadow-sm border-t-4 border-t-gold hover:border-t-gold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 h-full">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold px-2.5 py-0.5 rounded-full bg-gold/15">01</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-secondary text-primary group-hover:text-gold group-hover:bg-primary transition-colors">
                      <Users className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="mt-3.5 font-display text-lg font-bold text-primary group-hover:text-gold transition-colors">
                    IT Staffing & Talent Solutions
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Access specialized technology professionals for contract, permanent, and project-based requirements.
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-border/70 flex items-center justify-between">
                  <Link
                    to="/solutions/it-staffing"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-gold transition-colors"
                  >
                    <span>Explore More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Solution 2 */}
              <div className="group flex flex-col justify-between rounded-xl border border-slate-200/90 dark:border-border bg-white dark:bg-card p-5 shadow-sm border-t-4 border-t-gold hover:border-t-gold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 h-full">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold px-2.5 py-0.5 rounded-full bg-gold/15">02</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-secondary text-primary group-hover:text-gold group-hover:bg-primary transition-colors">
                      <Network className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="mt-3.5 font-display text-lg font-bold text-primary group-hover:text-gold transition-colors">
                    MSP & VMS Workforce Delivery
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Support enterprise workforce programs with structured recruitment, responsive submissions, and delivery discipline.
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-border/70 flex items-center justify-between">
                  <Link
                    to="/solutions/msp-vms"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-gold transition-colors"
                  >
                    <span>Explore More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Solution 3 */}
              <div className="group flex flex-col justify-between rounded-xl border border-slate-200/90 dark:border-border bg-white dark:bg-card p-5 shadow-sm border-t-4 border-t-gold hover:border-t-gold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 h-full">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold px-2.5 py-0.5 rounded-full bg-gold/15">03</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-secondary text-primary group-hover:text-gold group-hover:bg-primary transition-colors">
                      <Layers className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="mt-3.5 font-display text-lg font-bold text-primary group-hover:text-gold transition-colors">
                    Enterprise Applications
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Connect with SAP, Workday, and enterprise application specialists supporting critical business systems.
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-border/70 flex items-center justify-between">
                  <Link
                    to="/expertise/sap"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-gold transition-colors"
                  >
                    <span>Explore More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Solution 4 */}
              <div className="group flex flex-col justify-between rounded-xl border border-slate-200/90 dark:border-border bg-white dark:bg-card p-5 shadow-sm border-t-4 border-t-gold hover:border-t-gold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 h-full">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold px-2.5 py-0.5 rounded-full bg-gold/15">04</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-secondary text-primary group-hover:text-gold group-hover:bg-primary transition-colors">
                      <Server className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="mt-3.5 font-display text-lg font-bold text-primary group-hover:text-gold transition-colors">
                    Cloud, Data & Digital Talent
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Build teams across cloud infrastructure, data engineering, AI, software development, and automation.
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-border/70 flex items-center justify-between">
                  <Link
                    to="/expertise/cloud-infrastructure"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-gold transition-colors"
                  >
                    <span>Explore More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHY CONFIGUSA (OUR DIFFERENCE) */}
        <section className="py-10 sm:py-12 lg:py-14 bg-background">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">OUR DIFFERENCE</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                More Than a Staffing Provider. A Partner Accountable to Your Success.
              </h2>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Enterprise workforce programs demand more than resumes. They require responsiveness, relevant expertise, clear communication, and consistent execution.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* Point 1 */}
              <div className="group rounded-xl border border-slate-200/90 dark:border-border bg-white dark:bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-gold hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between h-full border-t-4 border-t-slate-brand/40 hover:border-t-gold">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold px-2.5 py-0.5 rounded-full bg-gold/10 border border-gold/20">01</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200/80 dark:border-border bg-slate-50 dark:bg-secondary text-primary group-hover:text-gold group-hover:border-gold/50 transition-colors">
                      <Briefcase className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-primary group-hover:text-gold transition-colors">Enterprise-focused expertise</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    An understanding of complex hiring requirements, technology roles, and client delivery expectations.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="group rounded-xl border border-slate-200/90 dark:border-border bg-white dark:bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-gold hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between h-full border-t-4 border-t-slate-brand/40 hover:border-t-gold">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold px-2.5 py-0.5 rounded-full bg-gold/10 border border-gold/20">02</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200/80 dark:border-border bg-slate-50 dark:bg-secondary text-primary group-hover:text-gold group-hover:border-gold/50 transition-colors">
                      <UserCheck className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-primary group-hover:text-gold transition-colors">Specialized recruiting capabilities</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Access to professionals across enterprise applications, infrastructure, data, engineering, and emerging technologies.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="group rounded-xl border border-slate-200/90 dark:border-border bg-white dark:bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-gold hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between h-full border-t-4 border-t-slate-brand/40 hover:border-t-gold">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold px-2.5 py-0.5 rounded-full bg-gold/10 border border-gold/20">03</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200/80 dark:border-border bg-slate-50 dark:bg-secondary text-primary group-hover:text-gold group-hover:border-gold/50 transition-colors">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-primary group-hover:text-gold transition-colors">MSP/VMS experience</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Familiarity with structured submissions, program processes, onboarding coordination, and workforce compliance.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="group rounded-xl border border-slate-200/90 dark:border-border bg-white dark:bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-gold hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between h-full border-t-4 border-t-slate-brand/40 hover:border-t-gold">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold px-2.5 py-0.5 rounded-full bg-gold/10 border border-gold/20">04</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200/80 dark:border-border bg-slate-50 dark:bg-secondary text-primary group-hover:text-gold group-hover:border-gold/50 transition-colors">
                      <Layers className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-primary group-hover:text-gold transition-colors">Flexible engagement models</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Workforce support aligned with immediate hiring needs and longer-term business initiatives.
                  </p>
                </div>
              </div>

              {/* Point 5 */}
              <div className="group rounded-xl border border-slate-200/90 dark:border-border bg-white dark:bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-gold hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between h-full border-t-4 border-t-slate-brand/40 hover:border-t-gold">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold px-2.5 py-0.5 rounded-full bg-gold/10 border border-gold/20">05</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200/80 dark:border-border bg-slate-50 dark:bg-secondary text-primary group-hover:text-gold group-hover:border-gold/50 transition-colors">
                      <Globe2 className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-primary group-hover:text-gold transition-colors">Global delivery reach</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Recruiting and business presence across the United States, India, and Canada.
                  </p>
                </div>
              </div>

              {/* Point 6 */}
              <div className="group rounded-xl border border-slate-200/90 dark:border-border bg-white dark:bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-gold hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between h-full border-t-4 border-t-slate-brand/40 hover:border-t-gold">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold px-2.5 py-0.5 rounded-full bg-gold/10 border border-gold/20">06</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200/80 dark:border-border bg-slate-50 dark:bg-secondary text-primary group-hover:text-gold group-hover:border-gold/50 transition-colors">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-primary group-hover:text-gold transition-colors">Relationship-driven service</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    A commitment to accountability, transparency, and enduring client partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — SAP & WORKDAY EXPERTISE (MATCHING REFERENCE IMAGE 1) */}
        <section className="bg-primary text-primary-foreground py-10 sm:py-14 lg:py-16">
          <div className="mx-auto grid max-w-[1280px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:px-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                FEATURED ENTERPRISE EXPERTISE
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.18] text-white">
                Critical platforms demand specialized talent.
              </h2>
              <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-primary-foreground/75">
                Connect with professionals who understand the systems—and the business processes behind them.
              </p>
              <div className="mt-6">
                <Link
                  to="/expertise/sap"
                  className="inline-flex items-center gap-2 border-b border-gold/70 pb-1 text-sm font-semibold text-primary-foreground hover:text-gold transition-colors"
                >
                  Explore platform expertise
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="relative min-h-[320px] sm:min-h-[430px] overflow-hidden shadow-2xl border border-primary-foreground/15 rounded-xl bg-slate-900">
              <img
                src={platformImage}
                alt="Business application specialists collaborating around enterprise technology platforms"
                loading="lazy"
                width={1600}
                height={960}
                className="absolute inset-0 h-full w-full object-cover object-center filter brightness-[1.10] contrast-[1.02]"
              />
              {/* Bottom Integrated Bar (matching Image 1) */}
              <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 bg-[#0c1b2c]/95 backdrop-blur-sm text-primary-foreground border-t border-primary-foreground/20">
                <Link
                  to="/expertise/sap"
                  className="flex items-center justify-between border-r border-primary-foreground/20 px-6 py-4 text-sm font-semibold hover:text-gold transition-colors group"
                >
                  <span>SAP</span>
                  <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
                <Link
                  to="/expertise/workday"
                  className="flex items-center justify-between px-6 py-4 text-sm font-semibold hover:text-gold transition-colors group"
                >
                  <span>Workday</span>
                  <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — INDUSTRIES WE SERVE (MATCHING REFERENCE IMAGE 2) */}
        <section className="py-10 sm:py-14 lg:py-16 bg-background">
          <div className="mx-auto grid max-w-[1280px] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16 lg:px-12">
            {/* Left: Cross-Industry Technology & Engineering Operations */}
            <div className="relative min-h-[380px] sm:min-h-[460px] lg:min-h-[490px] overflow-hidden shadow-lg border border-border rounded-xl bg-slate-900">
              <img
                src="/assets/industry-experience-alt.jpg"
                alt="ConfigUSA specialized cross-industry technology consultants and enterprise systems specialists"
                loading="lazy"
                width={1600}
                height={960}
                className="absolute inset-0 h-full w-full object-cover object-center filter brightness-[1.08] contrast-[1.03] transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Right: Content & 2-Column Industry List */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">
                INDUSTRY EXPERIENCE
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.18] text-primary">
                Expertise aligned with the industries we serve.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                From regulated environments to fast-moving technology organizations, we align talent to the context that matters.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0">
                <Link
                  to="/industries#financial-services"
                  className="flex items-center gap-3 border-b border-border py-3.5 text-sm font-medium text-primary hover:text-slate-brand transition-colors"
                >
                  <Landmark className="h-4 w-4 shrink-0 text-slate-brand" aria-hidden="true" />
                  <span>Financial Services</span>
                </Link>
                <Link
                  to="/industries#healthcare"
                  className="flex items-center gap-3 border-b border-border py-3.5 text-sm font-medium text-primary hover:text-slate-brand transition-colors"
                >
                  <HeartPulse className="h-4 w-4 shrink-0 text-slate-brand" aria-hidden="true" />
                  <span>Healthcare</span>
                </Link>
                <Link
                  to="/industries#government-public-sector"
                  className="flex items-center gap-3 border-b border-border py-3.5 text-sm font-medium text-primary hover:text-slate-brand transition-colors"
                >
                  <Building2 className="h-4 w-4 shrink-0 text-slate-brand" aria-hidden="true" />
                  <span>Government & Public Sector</span>
                </Link>
                <Link
                  to="/industries#manufacturing-engineering"
                  className="flex items-center gap-3 border-b border-border py-3.5 text-sm font-medium text-primary hover:text-slate-brand transition-colors"
                >
                  <Cpu className="h-4 w-4 shrink-0 text-slate-brand" aria-hidden="true" />
                  <span>Manufacturing & Engineering</span>
                </Link>
                <Link
                  to="/industries#technology-digital-services"
                  className="flex items-center gap-3 border-b border-border py-3.5 text-sm font-medium text-primary hover:text-slate-brand transition-colors sm:col-span-2"
                >
                  <Briefcase className="h-4 w-4 shrink-0 text-slate-brand" aria-hidden="true" />
                  <span>Technology & Digital Services</span>
                </Link>
              </div>

              <div className="mt-6">
                <Link
                  to="/industries"
                  className="inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-semibold text-primary hover:text-slate-brand transition-colors"
                >
                  Explore industry expertise
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — GLOBAL PRESENCE */}
        <section className="bg-secondary/60 py-10 sm:py-14 lg:py-16 border-y border-border">
          <div className="mx-auto grid max-w-[1380px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">GLOBAL CAPABILITIES</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                Connected Across Markets. Committed to Every Client.
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                With business presence across the United States, India, and Canada, ConfigUSA brings together regional market knowledge, global recruiting capabilities, and coordinated delivery support.
              </p>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Our international footprint helps us serve organizations with diverse workforce requirements while maintaining a consistent commitment to service quality.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="border border-slate-200/90 dark:border-border bg-white dark:bg-card p-4 rounded-xl shadow-sm">
                  <p className="text-xs font-semibold uppercase text-gold">North America HQ</p>
                  <p className="mt-1 font-display text-base font-bold text-primary">United States</p>
                  <p className="mt-1 text-xs text-muted-foreground">Enterprise staffing, MSP delivery & executive management.</p>
                </div>
                <div className="border border-slate-200/90 dark:border-border bg-white dark:bg-card p-4 rounded-xl shadow-sm">
                  <p className="text-xs font-semibold uppercase text-gold">Delivery Center</p>
                  <p className="mt-1 font-display text-base font-bold text-primary">India</p>
                  <p className="mt-1 text-xs text-muted-foreground">Specialized talent sourcing, qualification & global support.</p>
                </div>
                <div className="border border-slate-200/90 dark:border-border bg-white dark:bg-card p-4 rounded-xl shadow-sm">
                  <p className="text-xs font-semibold uppercase text-gold">Regional Hub</p>
                  <p className="mt-1 font-display text-base font-bold text-primary">Canada</p>
                  <p className="mt-1 text-xs text-muted-foreground">Technology staffing & regional business support.</p>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="/global-presence"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-slate-brand transition-colors"
                >
                  Explore Our Global Footprint
                  <ArrowRight className="h-4 w-4 text-gold" />
                </Link>
              </div>
            </div>

            <div className="relative min-h-[320px] sm:min-h-[440px] rounded-xl overflow-hidden shadow-md border border-border bg-slate-900">
              <img
                src={globalImage}
                alt="International business offices and geographic connectivity across US, India, and Canada"
                width={1600}
                height={960}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center filter brightness-[1.14] contrast-[1.03] saturate-[1.08]"
              />
              <div className="absolute bottom-4 left-4 bg-primary/95 text-primary-foreground px-4 py-2 text-xs font-semibold rounded-md border-l-2 border-gold shadow-lg">
                Unified Cross-Border Delivery Model
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — DELIVERY EXPERIENCE */}
        <section className="py-10 sm:py-12 lg:py-14 bg-background">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">DELIVERY EXPERIENCE</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                Experience That Builds Confidence
              </h2>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                ConfigUSA's workforce delivery experience includes enterprise client engagements, MSP-managed programs, and technology talent support across multiple industries.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {/* Proof Point 1 */}
              <div className="rounded-xl border border-slate-200/90 dark:border-border bg-white dark:bg-card p-5 sm:p-6 shadow-sm border-t-4 border-t-gold hover:border-t-gold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold px-2.5 py-0.5 rounded-full bg-gold/15">AREA 01</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-secondary text-primary">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-base sm:text-lg font-bold text-primary">Enterprise Workforce Delivery</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Proven delivery discipline across Fortune 1000 technology programs, enterprise application implementations, and business modernization initiatives.
                  </p>
                </div>
              </div>

              {/* Proof Point 2 */}
              <div className="rounded-xl border border-slate-200/90 dark:border-border bg-white dark:bg-card p-5 sm:p-6 shadow-sm border-t-4 border-t-gold hover:border-t-gold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold px-2.5 py-0.5 rounded-full bg-gold/15">AREA 02</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-secondary text-primary">
                      <Network className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-base sm:text-lg font-bold text-primary">MSP & VMS Program Relationships</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Active participation within established managed service provider ecosystems, rigorous SLA compliance, and responsive candidate submission pipelines.
                  </p>
                </div>
              </div>

              {/* Proof Point 3 */}
              <div className="rounded-xl border border-slate-200/90 dark:border-border bg-white dark:bg-card p-5 sm:p-6 shadow-sm border-t-4 border-t-gold hover:border-t-gold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold px-2.5 py-0.5 rounded-full bg-gold/15">AREA 03</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-secondary text-primary">
                      <Globe2 className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-base sm:text-lg font-bold text-primary">International Business Presence</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Coordinated operational capabilities in the United States, India, and Canada ensuring round-the-clock sourcing, technical screening, and delivery execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials / Certifications Section */}
        <CredentialsSection />

        {/* SECTION 9 — FINAL CTA */}
        <section className="bg-primary text-primary-foreground py-12 sm:py-16">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">CONNECT WITH CONFIGUSA</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Your Next Business Priority Deserves the Right Talent.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-primary-foreground/80">
              Whether you're scaling a technology team, supporting an enterprise application, or strengthening workforce delivery, ConfigUSA is ready to understand your requirements and help identify the expertise you need.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3.5">
              <Link
                to="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-gold px-7 text-sm font-semibold text-primary shadow-sm hover:shadow-md transition-all hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                Request Talent
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-primary-foreground/40 px-7 text-sm font-semibold text-white shadow-sm hover:shadow-md transition-colors hover:border-gold hover:text-gold"
              >
                Contact Our Team
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

/* =========================================================================
   2. ABOUT CONFIGUSA VIEW (/about)
   ========================================================================= */
export function AboutView() {
  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="ABOUT CONFIGUSA"
          title="Built on Trust. Strengthened by Expertise. Driven by Results."
          description="ConfigUSA is a technology staffing and workforce solutions organization committed to helping businesses succeed through the right people, specialized expertise, and dependable delivery."
          image="about"
          primaryCta={{ label: "Discover Our Solutions", to: "/solutions/it-staffing" }}
          secondaryCta={{ label: "Contact Leadership", to: "/leadership" }}
        />

        <section className="py-10 sm:py-14 lg:py-16 bg-background">
          <div className="mx-auto max-w-[1120px] px-5 sm:px-8 lg:px-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">OUR COMMITMENT</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl lg:text-[40px]">
                Lasting Partnerships Earned Through Performance
              </h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                <p>
                  ConfigUSA is a technology staffing and workforce solutions organization committed to helping businesses succeed through the right people, specialized expertise, and dependable delivery.
                </p>
                <p>
                  We work with enterprises, technology organizations, and managed service providers to address evolving workforce requirements across a wide range of technologies and industries.
                </p>
                <p>
                  Our business is built on a simple principle: lasting partnerships are earned through consistent performance, transparency, and a genuine understanding of client needs.
                </p>
                <p>
                  With business operations spanning the United States, India, and Canada, ConfigUSA combines global reach with personalized service, enabling us to support clients navigating complex technology and talent demands.
                </p>
              </div>

              {/* Editorial Image Feature */}
              <div className="mt-10 relative overflow-hidden rounded-lg border border-border shadow-md bg-slate-900">
                <img
                  src="/assets/about-approach.jpg"
                  alt="ConfigUSA collaborative talent planning and enterprise advisory"
                  width={1400}
                  height={700}
                  loading="lazy"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center filter brightness-[1.14] contrast-[1.03] saturate-[1.08]"
                />
                <div className="bg-primary/95 backdrop-blur-sm text-primary-foreground px-5 py-3 text-xs flex items-center justify-between border-t border-primary-foreground/20">
                  <span className="font-semibold text-white">Collaborative Delivery Planning & Enterprise Execution</span>
                  <span className="text-gold font-mono">U.S. · India · Canada</span>
                </div>
              </div>

              {/* Mission & Vision Cards */}
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-card p-6 sm:p-7 shadow-sm border-t-4 border-t-gold/70 hover:border-t-gold transition-all">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">Our Mission</p>
                  <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-foreground font-medium">
                    To empower organizations with exceptional technology talent and dependable workforce solutions that help advance business priorities, strengthen operational capabilities, and support sustainable growth.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-card p-6 sm:p-7 shadow-sm border-t-4 border-t-gold/70 hover:border-t-gold transition-all">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">Our Vision</p>
                  <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-foreground font-medium">
                    To be a trusted global workforce and technology solutions partner, recognized for integrity, expertise, service excellence, and lasting client relationships.
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div className="mt-12">
                <h3 className="font-display text-2xl font-bold text-primary">Our Core Values</h3>
                <div className="mt-5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { title: "Integrity", desc: "Integrity in every interaction." },
                    { title: "Accountability", desc: "Accountability in every commitment." },
                    { title: "Excellence", desc: "Excellence in every delivery." },
                    { title: "Collaboration", desc: "Collaboration in every partnership." },
                    { title: "Continuous Improvement", desc: "Continuous improvement in everything we do." },
                  ].map((val) => (
                    <div key={val.title} className="rounded-lg border border-border bg-card p-4 shadow-sm flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-sm font-semibold text-primary">{val.title}</strong>
                        <span className="text-xs text-muted-foreground">{val.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 border-l-2 border-gold pl-5 py-2.5">
                <p className="text-sm sm:text-base font-semibold text-primary">
                  At ConfigUSA, our success is measured by the confidence our clients place in us and the value we deliver over time.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/solutions/it-staffing"
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-slate-brand transition-colors"
                >
                  Discover Our Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center gap-2 rounded-lg border border-primary px-6 text-sm font-semibold text-primary shadow-sm hover:bg-secondary transition-colors"
                >
                  Contact Our Team
                  <ArrowUpRight className="h-4 w-4" />
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

/* =========================================================================
   3. WHY CONFIGUSA VIEW (/why-configusa)
   ========================================================================= */
export function WhyConfigUSAView() {
  const differentiators = [
    {
      num: "01",
      title: "We understand enterprise expectations.",
      desc: "We recognize the importance of accuracy, timeliness, process discipline, and communication.",
    },
    {
      num: "02",
      title: "We focus on qualified talent.",
      desc: "Our recruiting approach emphasizes alignment with technical requirements, relevant experience, and client needs.",
    },
    {
      num: "03",
      title: "We understand managed workforce programs.",
      desc: "Our MSP/VMS experience supports structured recruitment and delivery workflows.",
    },
    {
      num: "04",
      title: "We adapt to business needs.",
      desc: "Our engagement models support individual hiring requirements and broader workforce initiatives.",
    },
    {
      num: "05",
      title: "We value long-term partnerships.",
      desc: "We focus on building trust through responsiveness, consistency, and professional service.",
    },
  ];

  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="THE CONFIGUSA ADVANTAGE"
          title="The Difference Is in How We Deliver."
          description="Choosing a workforce partner is about more than finding available talent. It's about working with a team that understands your business priorities, respects your processes, and takes ownership of its commitments."
          image="why"
          primaryCta={{ label: "Partner With ConfigUSA", to: "/contact" }}
          secondaryCta={{ label: "Explore Our Solutions", to: "/solutions/it-staffing" }}
        />

        <section className="py-10 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">OUR DIFFERENTIATORS</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                  Accountability to Your Goals at Every Stage
                </h2>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  ConfigUSA brings together specialized recruiting capabilities, enterprise workforce experience, and a service-oriented delivery approach to help clients navigate demanding talent requirements.
                </p>

                {/* Consulting Team Feature Photo */}
                <div className="mt-6 relative overflow-hidden rounded-lg border border-border shadow-sm bg-slate-900">
                  <img
                    src="/assets/consulting-team.jpg"
                    alt="ConfigUSA technical delivery consultants in project review"
                    width={1200}
                    height={600}
                    loading="lazy"
                    className="w-full h-56 sm:h-72 object-cover object-center filter brightness-[1.14] contrast-[1.03] saturate-[1.08]"
                  />
                  <div className="bg-primary/95 text-primary-foreground px-4 py-2 text-xs flex items-center justify-between border-t border-primary-foreground/20">
                    <span className="font-semibold text-white">Enterprise Delivery Discipline</span>
                    <span className="text-gold font-mono">Accountability Guaranteed</span>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {differentiators.map((diff) => (
                    <div
                      key={diff.num}
                      className="rounded-sm border border-border bg-card p-5 sm:p-6 shadow-sm transition-all hover:border-gold"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-gold">{diff.num}</span>
                        <h3 className="text-base font-bold text-primary">{diff.title}</h3>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm pl-7">
                        {diff.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 border-l-2 border-gold pl-4 py-2">
                  <p className="text-sm font-semibold text-primary">
                    Your business deserves a partner who treats your priorities as commitments—not transactions.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary shadow-sm px-6 text-sm font-semibold text-primary-foreground hover:bg-slate-brand transition-colors"
                  >
                    Partner With ConfigUSA
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:pt-2">
                <InquiryForm
                  title="Discuss Partnership Opportunities"
                  subtitle="Connect with our enterprise directors to explore how ConfigUSA can support your workforce."
                />
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

/* =========================================================================
   4. LEADERSHIP VIEW (/leadership)
   ========================================================================= */
export function LeadershipView() {
  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="OUR LEADERSHIP"
          title="Leadership Grounded in Relationships, Accountability, and Growth."
          description="At ConfigUSA, leadership is centered on building enduring relationships, strengthening delivery capabilities, and creating sustainable value for clients, employees, and business partners."
          image="leadership"
          primaryCta={{ label: "Connect With Our Leadership Team", to: "/contact" }}
          secondaryCta={{ label: "About Our Company", to: "/about" }}
        />

        <section className="py-10 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">EXECUTIVE PROFILE</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                  Strategic Guidance and International Execution
                </h2>

                <div className="mt-8 rounded-sm border border-border bg-card p-6 sm:p-8 shadow-sm">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-sm bg-primary text-gold border border-gold/40">
                      <Award className="h-10 w-10" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gold">Executive Leadership</span>
                      <h3 className="mt-1 font-display text-2xl font-bold text-primary">Founder & CEO</h3>
                      <p className="mt-1 text-xs font-mono text-muted-foreground">Strategic Direction Since January 2023</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground border-t border-border pt-5">
                    <p>
                      Since January 2023, ConfigUSA's Founder & CEO has led the company's strategic direction, with a focus on expanding enterprise relationships, strengthening MSP partnerships, and developing technology workforce capabilities across international markets.
                    </p>
                    <p>
                      The leadership philosophy emphasizes client trust, disciplined execution, team development, and long-term business growth.
                    </p>
                    <p>
                      Under this vision, ConfigUSA has enhanced delivery capabilities across the United States, India, and Canada, establishing specialized recruiting practices across enterprise applications (SAP and Workday), cloud infrastructure, and emerging digital technologies.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-sm border border-border bg-card p-5">
                    <p className="text-xs font-semibold uppercase text-slate-brand">Leadership Pillar</p>
                    <h4 className="mt-1 text-sm font-bold text-primary">Client Trust & Integrity</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Cultivating authentic, transparent relationships that treat client objectives as unbreakable commitments.
                    </p>
                  </div>
                  <div className="rounded-sm border border-border bg-card p-5">
                    <p className="text-xs font-semibold uppercase text-slate-brand">Leadership Pillar</p>
                    <h4 className="mt-1 text-sm font-bold text-primary">Disciplined Execution</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Standardized screening, rapid turnaround, and strict workforce compliance across all client programs.
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    to="/contact"
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary shadow-sm px-6 text-sm font-semibold text-primary-foreground hover:bg-slate-brand transition-colors"
                  >
                    Connect With Our Leadership Team
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:pt-2">
                <InquiryForm
                  title="Direct Leadership Inquiry"
                  subtitle="Connect with executive leadership regarding strategic partnerships, enterprise contracts, or global expansion."
                />
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

/* =========================================================================
   5. IT STAFFING SOLUTIONS VIEW (/solutions/it-staffing)
   ========================================================================= */
export function ITStaffingView() {
  const capabilities = [
    { title: "1. Contract Staffing", desc: "Specialized professionals for immediate and ongoing requirements." },
    { title: "2. Contract-to-Hire", desc: "Flexible engagement with a potential path to permanent employment." },
    { title: "3. Direct Hire", desc: "Talent acquisition support for long-term positions." },
    { title: "4. Project-Based Staffing", desc: "Targeted resources for defined initiatives." },
    { title: "5. Specialized IT Staffing", desc: "Access to professionals in high-demand technology disciplines." },
  ];

  const steps = [
    { num: "01", label: "Understand the requirement", desc: "Deep discovery into technical stack, team culture, and delivery milestones." },
    { num: "02", label: "Identify suitable talent", desc: "Leverage global recruiting engine and curated talent pipelines." },
    { num: "03", label: "Evaluate candidate alignment", desc: "Rigorous technical screening, credential check, and soft-skills evaluation." },
    { num: "04", label: "Coordinate client selection", desc: "Transparent interview scheduling, feedback loops, and rate finalization." },
    { num: "05", label: "Support onboarding & ongoing engagement", desc: "Complete compliance paperwork, orientation, and regular check-ins." },
  ];

  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="IT STAFFING SOLUTIONS"
          title="Exceptional Technology Talent. Precisely Aligned with Your Business."
          description="In a competitive technology landscape, finding the right professionals requires more than matching keywords to job descriptions. It requires an understanding of technical competencies, project expectations, business environments, and delivery timelines."
          image="itstaffing"
          primaryCta={{ label: "Submit Your Staffing Requirement", to: "/contact" }}
          secondaryCta={{ label: "Explore Workforce Solutions", to: "/solutions/workforce-solutions" }}
        />

        <section className="py-10 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">TALENT AGILITY</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                  Sourcing Excellence Across Demanding Technical Roles
                </h2>

                <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  <p>
                    ConfigUSA helps organizations address critical hiring needs by connecting them with qualified technology professionals across enterprise applications, infrastructure, software engineering, data, and emerging technologies.
                  </p>
                  <p>
                    Our staffing solutions are designed to support workforce flexibility while maintaining a strong focus on candidate quality, communication, and client requirements.
                  </p>
                </div>

                {/* Capabilities list */}
                <div className="mt-8">
                  <h3 className="font-display text-xl font-bold text-primary">Our Staffing Capabilities</h3>
                  <div className="mt-4 space-y-3">
                    {capabilities.map((cap) => (
                      <div key={cap.title} className="rounded-sm border border-border bg-card p-4 shadow-sm">
                        <strong className="block text-sm font-semibold text-primary">{cap.title}</strong>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{cap.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Our Approach Workflow */}
                <div className="mt-10">
                  <h3 className="font-display text-xl font-bold text-primary">Our 5-Step Approach</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    A disciplined recruitment lifecycle engineered for consistency and compliance.
                  </p>
                  <div className="mt-4 space-y-3">
                    {steps.map((st) => (
                      <div key={st.num} className="flex items-start gap-3 border-l-2 border-gold pl-4 py-1">
                        <span className="font-mono text-xs font-bold text-gold">{st.num}</span>
                        <div>
                          <strong className="block text-sm font-semibold text-primary">{st.label}</strong>
                          <p className="text-xs text-muted-foreground">{st.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 border-l-2 border-gold pl-4 py-2">
                  <p className="text-sm font-semibold text-primary">
                    The right professionals do more than meet requirements. They help your organization maintain momentum and achieve meaningful outcomes.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary shadow-sm px-6 text-sm font-semibold text-primary-foreground hover:bg-slate-brand transition-colors"
                  >
                    Submit Your Staffing Requirement
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:pt-2">
                <InquiryForm
                  title="Request Technology Talent"
                  subtitle="Submit your requisition details and our recruiting team will match qualified candidates."
                />
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

/* =========================================================================
   6. WORKFORCE SOLUTIONS VIEW (/solutions/workforce-solutions)
   ========================================================================= */
export function WorkforceSolutionsView() {
  const models = [
    { title: "Contingent Workforce Augmentation", desc: "Rapid scaling for peak business cycles, digital transformation, and specialized project demands." },
    { title: "Direct Placement & Executive Sourcing", desc: "Retained and contingency search for pivotal engineering and leadership roles." },
    { title: "Managed Team Deployments", desc: "Complete pods of specialized engineers under unified delivery management." },
    { title: "Compliance & Onboarding Governance", desc: "Rigorous I-9, E-Verify, and client background verification oversight." },
  ];

  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="WORKFORCE SOLUTIONS"
          title="Workforce Support Shaped Around Your Business Priorities."
          description="From immediate technical hiring requirements to structured enterprise workforce programs, ConfigUSA helps organizations access the expertise and workforce agility required to execute with confidence."
          image="workforce"
          primaryCta={{ label: "Discuss Workforce Requirements", to: "/contact" }}
          secondaryCta={{ label: "View MSP & VMS Programs", to: "/solutions/msp-vms" }}
        />

        <section className="py-10 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">ADAPTIVE ENGAGEMENT</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                  Scalable Workforce Delivery Tailored to Business Demands
                </h2>

                <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  <p>
                    Modern enterprises require adaptable workforce structures that can pivot alongside changing technology landscapes and market priorities.
                  </p>
                  <p>
                    ConfigUSA partners with enterprise clients to architect customized workforce programs that balance immediate staffing responsiveness with long-term talent retention and compliance excellence.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  {models.map((m) => (
                    <div key={m.title} className="rounded-sm border border-border bg-card p-5 shadow-sm">
                      <h3 className="text-sm font-bold text-primary">{m.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link
                    to="/contact"
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary shadow-sm px-6 text-sm font-semibold text-primary-foreground hover:bg-slate-brand transition-colors"
                  >
                    Discuss Workforce Needs
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:pt-2">
                <InquiryForm
                  title="Workforce Consultation"
                  subtitle="Let us help assess your staffing structure, contract requirements, and talent pipeline."
                />
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

/* =========================================================================
   7. MSP & VMS PROGRAMS VIEW (/solutions/msp-vms)
   ========================================================================= */
export function MSPView() {
  const capabilities = [
    "MSP program participation and delivery support.",
    "VMS-based requisition management.",
    "Specialized candidate sourcing and screening.",
    "Submission quality and turnaround coordination.",
    "Interview scheduling and onboarding assistance.",
    "Workforce compliance process support.",
    "Ongoing engagement and account communication.",
  ];

  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="MANAGED WORKFORCE PROGRAMS"
          title="Enterprise Workforce Delivery with Discipline, Responsiveness, and Accountability."
          description="Managing talent requirements within an MSP or VMS environment calls for precision, compliance awareness, timely communication, and consistent execution."
          image="msp"
          primaryCta={{ label: "Discuss MSP Workforce Requirements", to: "/contact" }}
          secondaryCta={{ label: "Why ConfigUSA", to: "/why-configusa" }}
        />

        <section className="py-10 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">PROGRAM DISCIPLINE</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                  Built for Enterprise Workforce Expectations
                </h2>

                <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  <p>
                    ConfigUSA supports managed workforce programs through structured recruitment practices, qualified candidate submissions, onboarding coordination, and alignment with program-specific expectations.
                  </p>
                  <p>
                    Our experience working within established MSP ecosystems helps us understand the operational standards and delivery commitments required to support enterprise contingent workforce programs.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="font-display text-xl font-bold text-primary">Core Capabilities</h3>
                  <div className="mt-4 space-y-2.5">
                    {capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-3 border-b border-border/70 pb-2.5 text-xs sm:text-sm text-foreground/90">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 rounded-sm border border-border bg-card p-6 shadow-sm">
                  <h4 className="font-display text-base font-bold text-primary">Delivery Discipline in Practice</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    We recognize that successful MSP delivery depends on more than individual placements. It requires dependable processes, professional coordination, and a commitment to meeting the standards established by each client and program.
                  </p>
                </div>

                <div className="mt-8 border-l-2 border-gold pl-4 py-2">
                  <p className="text-sm font-semibold text-primary">
                    Structured processes. Specialized talent. Consistent partnership.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary shadow-sm px-6 text-sm font-semibold text-primary-foreground hover:bg-slate-brand transition-colors"
                  >
                    Discuss MSP Workforce Requirements
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:pt-2">
                <InquiryForm
                  initialType="msp"
                  title="Discuss an MSP Partnership"
                  subtitle="Explore how ConfigUSA integrates seamlessly into enterprise vendor management systems."
                />
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

/* =========================================================================
   8. TECHNOLOGY CONSULTING VIEW (/solutions/technology-consulting)
   ========================================================================= */
export function TechnologyConsultingView() {
  const areas = [
    "Enterprise applications.",
    "Cloud platforms.",
    "Infrastructure.",
    "Data engineering.",
    "Application development.",
    "Testing.",
    "Integration.",
    "Technology program support.",
  ];

  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="TECHNOLOGY RESOURCE SOLUTIONS"
          title="The Expertise to Support Your Most Important Technology Initiatives."
          description="Technology initiatives require the right combination of technical knowledge, business understanding, and execution capability."
          image="consulting"
          primaryCta={{ label: "Explore Technology Expertise", to: "/contact" }}
          secondaryCta={{ label: "SAP Solutions", to: "/expertise/sap" }}
        />

        <section className="py-10 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">RESOURCE AUGMENTATION</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                  Strengthening Teams for Complex Implementations
                </h2>

                <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  <p>
                    ConfigUSA helps organizations strengthen project teams by providing access to specialized technology professionals who can support implementation initiatives, system enhancements, integrations, modernization programs, and ongoing application requirements.
                  </p>
                  <p>
                    Our flexible resource augmentation approach enables organizations to complement internal teams with targeted skills aligned to their technology environments and business priorities.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="font-display text-xl font-bold text-primary">Areas of Support</h3>
                  <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {areas.map((area) => (
                      <div key={area} className="flex items-center gap-2.5 rounded-sm border border-border bg-card p-3.5 text-xs sm:text-sm font-medium text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 border-l-2 border-gold pl-4 py-2">
                  <p className="text-sm font-semibold text-primary">
                    Strengthen your internal capabilities with specialized expertise when and where your business needs it.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary shadow-sm px-6 text-sm font-semibold text-primary-foreground hover:bg-slate-brand transition-colors"
                  >
                    Explore Technology Expertise
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:pt-2">
                <InquiryForm
                  title="Augment Your Technology Team"
                  subtitle="Specify the technical competencies and timelines for your upcoming initiative."
                />
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

/* =========================================================================
   9. SAP SOLUTIONS VIEW (/expertise/sap)
   ========================================================================= */
export function SAPView() {
  const capabilities = [
    "SAP S/4HANA.",
    "SAP FICO.",
    "SAP MM / SD.",
    "SAP ABAP.",
    "SAP Basis & Security.",
    "SAP Integration.",
    "SAP Data & Analytics.",
    "SAP Functional Consulting.",
  ];

  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="SAP TALENT & ENTERPRISE APPLICATION EXPERTISE"
          title="Specialized SAP Talent for Complex Enterprise Environments."
          description="SAP systems support some of the most critical processes within modern organizations. Successful transformation, enhancement, and support initiatives depend on professionals who understand both enterprise technology and the business processes it enables."
          image="sap"
          primaryCta={{ label: "Request SAP Professionals", to: "/contact" }}
          secondaryCta={{ label: "Workday Solutions", to: "/expertise/workday" }}
        />

        <section className="py-10 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">MISSION-CRITICAL SYSTEMS</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                  Deep SAP Expertise Across Functional and Technical Modules
                </h2>

                <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  <p>
                    ConfigUSA helps clients identify specialized SAP professionals across functional, technical, integration, and application support disciplines.
                  </p>
                  <p>
                    Whether organizations are enhancing existing environments, pursuing modernization, or strengthening ongoing support teams, ConfigUSA focuses on matching SAP expertise to specific technical and business requirements.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="font-display text-xl font-bold text-primary">SAP Capabilities</h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2.5 rounded-sm border border-border bg-card p-3.5 text-xs sm:text-sm font-semibold text-primary">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 border-l-2 border-gold pl-4 py-2">
                  <p className="text-sm font-semibold text-primary">
                    Supporting enterprise systems with professionals who understand the technology and the business behind it.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary shadow-sm px-6 text-sm font-semibold text-primary-foreground hover:bg-slate-brand transition-colors"
                  >
                    Request SAP Professionals
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:pt-2">
                <InquiryForm
                  title="Request SAP Talent"
                  subtitle="Specify the SAP modules (S/4HANA, FICO, MM/SD, ABAP) and project timeline."
                />
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

/* =========================================================================
   10. WORKDAY SOLUTIONS VIEW (/expertise/workday)
   ========================================================================= */
export function WorkdayView() {
  const capabilities = [
    "Workday HCM.",
    "Workday Financial Management.",
    "Workday Integrations.",
    "Workday Reporting.",
    "Workday Security.",
    "Workday Payroll.",
    "Workday Recruiting.",
    "Workday Configuration & Support.",
  ];

  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="WORKDAY TALENT SOLUTIONS"
          title="Specialized Workday Expertise for Enterprise Transformation and Operational Excellence."
          description="Workday environments require professionals who can navigate the intersection of technology, business processes, and evolving organizational needs."
          image="workday"
          primaryCta={{ label: "Find Workday Specialists", to: "/contact" }}
          secondaryCta={{ label: "SAP Solutions", to: "/expertise/sap" }}
        />

        <section className="py-10 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">CLOUD ERP & HCM</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                  End-to-End Workday Implementation and Optimization Support
                </h2>

                <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  <p>
                    ConfigUSA helps clients source Workday specialists for implementation support, configuration, integrations, reporting, optimization, and ongoing application operations.
                  </p>
                  <p>
                    Our focus is to help organizations access professionals with the relevant Workday experience needed to support business continuity, application effectiveness, and enterprise priorities.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="font-display text-xl font-bold text-primary">Workday Capabilities</h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2.5 rounded-sm border border-border bg-card p-3.5 text-xs sm:text-sm font-semibold text-primary">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 border-l-2 border-gold pl-4 py-2">
                  <p className="text-sm font-semibold text-primary">
                    Enterprise applications are only as effective as the expertise behind them.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary shadow-sm px-6 text-sm font-semibold text-primary-foreground hover:bg-slate-brand transition-colors"
                  >
                    Find Workday Specialists
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:pt-2">
                <InquiryForm
                  title="Source Workday Talent"
                  subtitle="Tell us about your Workday HCM, Financials, Integration, or Support needs."
                />
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

/* =========================================================================
   11. CLOUD & INFRASTRUCTURE VIEW (/expertise/cloud-infrastructure)
   ========================================================================= */
export function CloudInfrastructureView() {
  const focusAreas = [
    "AWS.",
    "Microsoft Azure.",
    "Google Cloud.",
    "Cloud engineering.",
    "DevOps and automation.",
    "Infrastructure engineering.",
    "Network administration.",
    "Cybersecurity.",
    "Systems administration.",
    "Enterprise IT operations.",
  ];

  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="CLOUD & INFRASTRUCTURE EXPERTISE"
          title="Powering Modern IT Environments with Specialized Technology Talent."
          description="As organizations modernize their technology infrastructure, the demand for cloud, infrastructure, cybersecurity, and operations expertise continues to evolve."
          image="cloud"
          primaryCta={{ label: "Connect With Infrastructure Talent", to: "/contact" }}
          secondaryCta={{ label: "AI & Digital Engineering", to: "/expertise/ai-data-digital" }}
        />

        <section className="py-10 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">RESILIENT IT ARCHITECTURE</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                  Engineered for Reliability, Security, and Scale
                </h2>

                <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  <p>
                    ConfigUSA helps businesses identify professionals who support scalable, resilient, and secure technology environments.
                  </p>
                  <p>
                    We help clients strengthen teams supporting cloud adoption, infrastructure modernization, operational reliability, and ongoing technology services.
                  </p>
                </div>

                {/* Cloud Story Photo */}
                <div className="mt-6 relative overflow-hidden rounded-lg border border-border shadow-sm bg-slate-900">
                  <img
                    src="/assets/story-cloud.jpg"
                    alt="ConfigUSA cloud architects configuring enterprise infrastructure"
                    width={1200}
                    height={600}
                    loading="lazy"
                    className="w-full h-56 sm:h-64 object-cover object-center filter brightness-[1.14] contrast-[1.03] saturate-[1.08]"
                  />
                  <div className="bg-primary/95 text-primary-foreground px-4 py-2 text-xs flex items-center justify-between border-t border-primary-foreground/20">
                    <span className="font-semibold text-white">Cloud Modernization & DevOps Governance</span>
                    <span className="text-gold font-mono">AWS · Azure · GCP</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-display text-xl font-bold text-primary">Focus Areas</h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {focusAreas.map((area) => (
                      <div key={area} className="flex items-center gap-2.5 rounded-sm border border-border bg-card p-3.5 text-xs sm:text-sm font-semibold text-primary">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    to="/contact"
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary shadow-sm px-6 text-sm font-semibold text-primary-foreground hover:bg-slate-brand transition-colors"
                  >
                    Connect With Infrastructure Talent
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:pt-2">
                <InquiryForm
                  title="Source Cloud & Infrastructure Talent"
                  subtitle="Deploy pre-vetted engineers across AWS, Azure, GCP, Kubernetes, and Cyber Defense."
                />
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

/* =========================================================================
   12. AI, DATA & DIGITAL VIEW (/expertise/ai-data-digital)
   ========================================================================= */
export function AIDigitalView() {
  const expertiseAreas = [
    "AI and machine learning engineering.",
    "Data engineering and data architecture.",
    "Business intelligence and analytics.",
    "Full-stack and application development.",
    "Quality engineering and test automation.",
    "DevOps and platform engineering.",
    "Enterprise integration and API development.",
  ];

  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="DATA, AI & DIGITAL TECHNOLOGY TALENT"
          title="Accelerating Digital Ambition Through the Right Expertise."
          description="The value of emerging technology depends on the people who can apply it effectively."
          image="ai"
          primaryCta={{ label: "Build Your Digital Technology Team", to: "/contact" }}
          secondaryCta={{ label: "Cloud & Infrastructure", to: "/expertise/cloud-infrastructure" }}
        />

        <section className="py-10 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">EMERGING CAPABILITIES</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                  Translating Technological Innovation Into Business Value
                </h2>

                <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  <p>
                    ConfigUSA supports organizations seeking specialized professionals across artificial intelligence, data platforms, analytics, application development, and digital engineering.
                  </p>
                  <p>
                    Our role is to connect organizations with relevant talent that can contribute to digital initiatives, technology modernization, and operational improvement.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="font-display text-xl font-bold text-primary">Expertise Areas</h3>
                  <div className="mt-4 space-y-2.5">
                    {expertiseAreas.map((exp) => (
                      <div key={exp} className="flex items-center gap-2.5 rounded-sm border border-border bg-card p-3.5 text-xs sm:text-sm font-semibold text-primary">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                        <span>{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 border-l-2 border-gold pl-4 py-2">
                  <p className="text-sm font-semibold text-primary">
                    Innovation begins with ideas. Progress depends on expertise.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary shadow-sm px-6 text-sm font-semibold text-primary-foreground hover:bg-slate-brand transition-colors"
                  >
                    Build Your Digital Technology Team
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:pt-2">
                <InquiryForm
                  title="Source AI & Digital Talent"
                  subtitle="Acquire experienced data architects, machine learning engineers, and full-stack developers."
                />
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

/* =========================================================================
   13. INDUSTRIES WE SERVE VIEW (/industries)
   ========================================================================= */
export function IndustriesView() {
  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="INDUSTRY SOLUTIONS"
          title="Industry Understanding. Technology Expertise. Workforce Confidence."
          description="Every industry operates within its own business priorities, regulatory expectations, technology environments, and workforce challenges. ConfigUSA supports organizations across multiple sectors by aligning specialized technology talent with industry-specific requirements."
          image="industry"
          primaryCta={{ label: "Discuss Your Industry Requirements", to: "/contact" }}
          secondaryCta={{ label: "Explore Our Solutions", to: "/solutions/it-staffing" }}
        />

        <section className="py-10 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">SECTOR FOCUS</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                Domain-Aligned Talent for Specialized Environments
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Explore how ConfigUSA connects specialized technology professionals to distinct regulatory, operational, and engineering requirements.
              </p>
            </div>

            <div className="mt-12 space-y-12">
              {industryList.map((ind, idx) => (
                <div
                  key={ind.id}
                  id={ind.id}
                  className="scroll-mt-24 rounded-sm border border-border bg-card p-6 sm:p-9 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-5">
                    <div>
                      <span className="text-xs font-mono font-semibold text-gold">INDUSTRY 0{idx + 1}</span>
                      <h3 className="mt-1 font-display text-2xl font-bold text-primary sm:text-3xl">
                        {ind.name}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-brand font-medium">
                        {ind.tagline}
                      </p>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-primary shadow-sm px-5 text-xs font-semibold text-primary-foreground hover:bg-slate-brand transition-colors shrink-0"
                    >
                      Consult on {ind.name}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <div className="mt-6 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                    <div className="relative min-h-[220px] sm:min-h-[260px] h-full overflow-hidden rounded-lg border border-border shadow-sm bg-slate-900">
                      <img
                        src={ind.image}
                        alt={`${ind.name} enterprise technology operations`}
                        width={800}
                        height={550}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-center filter brightness-[1.14] contrast-[1.03] saturate-[1.08]"
                      />
                    </div>

                    <div>
                      <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                        {ind.description}
                      </p>

                      <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-brand">Core Focus & Workflows</h4>
                          <ul className="mt-3 space-y-2">
                            {ind.capabilities.map((cap, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                                <span>{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-brand">Representative Technologies</h4>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {ind.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-sm border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-primary"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary shadow-sm px-8 text-sm font-semibold text-primary-foreground hover:bg-slate-brand transition-colors"
              >
                Discuss Your Industry Requirements
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <CredentialsSection />
      </main>
      <SiteFooter />
    </div>
  );
}

/* =========================================================================
   14. GLOBAL PRESENCE VIEW (/global-presence)
   ========================================================================= */
export function GlobalPresenceView() {
  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="OUR GLOBAL FOOTPRINT"
          title="Global Capabilities. Regional Understanding. One Commitment to Excellence."
          description="ConfigUSA brings together business presence and workforce capabilities across three important markets, supporting organizations with diverse technology and talent requirements."
          image="global"
          primaryCta={{ label: "Connect With Our Global Team", to: "/contact" }}
          secondaryCta={{ label: "Careers in Global Markets", to: "/careers" }}
        />

        <section className="py-10 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">CROSS-MARKET REACH</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                United States · India · Canada
              </h2>
              <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                <p>
                  Through ConfigUSA in the United States, Config Solutions Private Limited in India, and Accurate Systems Integrators Inc. in Canada, the business has a cross-market presence that can support client relationships and workforce needs across geographies.
                </p>
                <p>
                  Wherever your workforce requirements evolve, our commitment to service, quality, and partnership remains consistent.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {globalHubs.map((hub) => (
                <div
                  key={hub.country}
                  className="rounded-sm border border-border bg-card p-6 sm:p-7 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gold">{hub.country} Hub</span>
                      <Globe2 className="h-4 w-4 text-slate-brand" />
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-bold text-primary">{hub.country}</h3>
                    <p className="mt-1 text-xs font-semibold text-slate-brand">{hub.entityName}</p>
                    <p className="mt-2 text-xs font-medium text-foreground/80 leading-snug">{hub.role}</p>

                    <div className="mt-5 pt-4 border-t border-border">
                      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Operational Scope</h4>
                      <ul className="mt-2 space-y-1.5">
                        {hub.focus.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-gold shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border text-xs text-muted-foreground space-y-1">
                    <p className="font-medium text-foreground">{hub.contactDetails.address}</p>
                    <p>Phone: {hub.contactDetails.phone}</p>
                    <p>Email: {hub.contactDetails.email}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 border-l-2 border-gold pl-4 py-2">
              <p className="text-sm font-semibold text-primary">
                Wherever your workforce requirements evolve, our commitment to service, quality, and partnership remains consistent.
              </p>
            </div>

            <div className="mt-8 text-center sm:text-left">
              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary shadow-sm px-6 text-sm font-semibold text-primary-foreground hover:bg-slate-brand transition-colors"
              >
                Connect With Our Global Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <CredentialsSection />
      </main>
      <SiteFooter />
    </div>
  );
}

/* =========================================================================
   15. CAREERS VIEW (/careers)
   ========================================================================= */
export function CareersView() {
  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="CAREERS AT CONFIGUSA"
          title="Your Skills. Your Ambition. Your Next Opportunity."
          description="Great careers begin with the right opportunity. At ConfigUSA, we connect talented professionals with opportunities across enterprise technology, software development, cloud, data, engineering, and business applications."
          image="careers"
          primaryCta={{ label: "Search Open Positions", to: "/careers#open-positions" }}
          secondaryCta={{ label: "Submit Your Resume", to: "/careers#submit-resume" }}
        />

        <section className="py-10 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">TALENT COMMUNITY</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                  Connect With High-Impact Enterprise Projects
                </h2>

                <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  <p>
                    Whether you're an experienced consultant exploring your next assignment or a technology professional looking for a new challenge, our recruiting team is committed to understanding your skills, experience, and career aspirations.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="font-display text-xl font-bold text-primary">Explore Opportunities Across</h3>
                  <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {[
                      "SAP and Workday Systems",
                      "Software & Full-Stack Engineering",
                      "Cloud & Modern Infrastructure",
                      "Artificial Intelligence & Data Platforms",
                      "Cybersecurity & Zero-Trust Defense",
                      "Automated Quality Assurance",
                      "Business Architecture & Analysis",
                      "Specialized Technical Disciplines",
                    ].map((disc) => (
                      <div key={disc} className="flex items-center gap-2.5 rounded-lg border border-border bg-card p-3 text-xs sm:text-sm font-medium text-foreground hover:border-gold/70 hover:shadow-sm transition-all">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                        <span>{disc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 border-l-2 border-gold pl-4 py-2">
                  <p className="text-sm font-semibold text-primary">
                    Your next career move deserves the right connection.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-md flex flex-col justify-between border-t-4 border-t-gold hover:shadow-lg transition-all">
                <div>
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">Consultant Network</span>
                    <Users className="h-5 w-5 text-slate-brand" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-primary">Join the ConfigUSA Roster</h3>
                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Our technical recruiting directors actively evaluate candidates for Fortune 500 managed programs and enterprise digital modernizations.
                  </p>
                  <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-foreground/90">
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-gold shrink-0" /> Direct access to competitive compensation</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-gold shrink-0" /> Full compliance & payroll governance</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-gold shrink-0" /> Projects across US, India, and Canada</li>
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-3">
                  <a
                    href="#open-positions"
                    className="inline-flex h-10 items-center justify-center rounded-lg bg-primary shadow-sm px-5 text-xs font-semibold text-primary-foreground hover:bg-gold hover:text-primary transition-all shadow-sm"
                  >
                    View Positions
                  </a>
                  <a
                    href="#submit-resume"
                    className="inline-flex h-10 items-center justify-center rounded-lg border border-border px-5 text-xs font-semibold text-primary shadow-sm hover:bg-secondary transition-colors"
                  >
                    Submit Resume
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Careers Search, Filter & Job Board */}
            <div id="open-positions" className="mt-16 scroll-mt-24 pt-10 border-t border-border">
              <div className="max-w-2xl mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">OPEN REQUISITIONS</p>
                <h3 className="mt-1 font-display text-3xl font-bold text-primary">
                  Search Open Positions
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Browse actively recruiting positions across our global client accounts and MSP programs.
                </p>
              </div>

              <CareersExplorer />
            </div>
          </div>
        </section>

        <CredentialsSection />
      </main>
      <SiteFooter />
    </div>
  );
}

/* =========================================================================
   16. CONTACT US VIEW (/contact)
   ========================================================================= */
export function ContactView() {
  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="CONTACT CONFIGUSA"
          title="Let's Start a Conversation That Moves Your Business Forward."
          description="Whether you're looking for specialized technology talent, exploring a workforce partnership, or seeking support for enterprise staffing requirements, we'd welcome the opportunity to learn more about your needs."
          image="contact"
          primaryCta={{ label: "Request Talent Immediately", to: "/contact#form" }}
          secondaryCta={{ label: "Explore Global Offices", to: "/global-presence" }}
        />

        <section className="py-10 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
              {/* Left Column: Context & Contact Details */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">DIRECT ENGAGEMENT</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                  Tell Us What You're Looking to Achieve
                </h2>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Tell us what you're looking to achieve, and our team can help identify the appropriate next steps.
                </p>

                <div className="mt-8 space-y-6">
                  {/* US Desk */}
                  <div className="rounded-sm border border-border bg-card p-5 shadow-sm">
                    <span className="text-xs font-semibold uppercase text-gold">United States (Headquarters)</span>
                    <h3 className="mt-1 font-display text-lg font-bold text-primary">ConfigUSA</h3>
                    <p className="mt-2 text-xs text-muted-foreground">1000 Corporate Center Drive, Suite 300, Alpharetta, GA 30022</p>
                    <p className="mt-1 text-xs text-foreground font-mono">Toll-Free: +1 (888) 555-CFGUSA</p>
                    <p className="text-xs text-slate-brand">inquiries@configusa.com</p>
                  </div>

                  {/* India Desk */}
                  <div className="rounded-sm border border-border bg-card p-5 shadow-sm">
                    <span className="text-xs font-semibold uppercase text-gold">India Operations Hub</span>
                    <h3 className="mt-1 font-display text-lg font-bold text-primary">Config Solutions Private Limited</h3>
                    <p className="mt-2 text-xs text-muted-foreground">Prestige Cyber Towers, 4th Floor, Hitec City, Hyderabad, TG 500081</p>
                    <p className="mt-1 text-xs text-foreground font-mono">Direct: +91 40 6828 0000</p>
                    <p className="text-xs text-slate-brand">india.desk@configusa.com</p>
                  </div>

                  {/* Canada Desk */}
                  <div className="rounded-sm border border-border bg-card p-5 shadow-sm">
                    <span className="text-xs font-semibold uppercase text-gold">Canada Regional Hub</span>
                    <h3 className="mt-1 font-display text-lg font-bold text-primary">Accurate Systems Integrators Inc.</h3>
                    <p className="mt-2 text-xs text-muted-foreground">100 King Street West, Suite 5600, Toronto, ON M5X 1C9</p>
                    <p className="mt-1 text-xs text-foreground font-mono">Direct: +1 (416) 555-8900</p>
                    <p className="text-xs text-slate-brand">canada.desk@configusa.com</p>
                  </div>
                </div>

                <div className="mt-8 border-l-2 border-gold pl-4 py-2">
                  <p className="text-sm font-semibold text-primary">
                    The right partnership begins with a conversation. We look forward to connecting with you.
                  </p>
                </div>
              </div>

              {/* Right Column: Real Working Form */}
              <div id="form" className="scroll-mt-24 lg:pt-2">
                <InquiryForm
                  title="Submit Enterprise Requisition or Inquiry"
                  subtitle="Fill out the verified inquiry form below. Our engagement team responds within 24 business hours."
                />
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

/* =========================================================================
   17. LEGAL VIEWS: PRIVACY, TERMS, ACCESSIBILITY
   ========================================================================= */
export function PrivacyView() {
  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">LEGAL & COMPLIANCE</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-xs text-muted-foreground">Effective Date: January 1, 2026 | ConfigUSA Corporation</p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground border-t border-border pt-6">
            <p>
              ConfigUSA ("ConfigUSA", "we", "us", or "our") respects your privacy and is committed to protecting the personal data of our enterprise clients, prospective candidates, employees, and website visitors.
            </p>
            <h2 className="text-base font-bold text-primary">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us through talent request forms, candidate applications, email transmissions, or phone communications. This includes full name, business email, organization name, telephone number, geographic location, and professional resume or curriculum vitae data.
            </p>
            <h2 className="text-base font-bold text-primary">2. Use of Information</h2>
            <p>
              We utilize collected information solely to evaluate candidate qualifications, fulfill enterprise staffing requisitions, manage client accounts, process inquiries, and ensure strict compliance with applicable employment, tax, and labor regulations across the United States, India, and Canada.
            </p>
            <h2 className="text-base font-bold text-primary">3. Information Sharing & Third Parties</h2>
            <p>
              ConfigUSA does not sell, rent, or trade your personal data. Candidate profiles are submitted to enterprise clients solely with the applicant's explicit consent for designated requisitions.
            </p>
            <h2 className="text-base font-bold text-primary">4. Data Security & Retention</h2>
            <p>
              We maintain administrative, technical, and physical safeguards designed to protect personal information against unauthorized disclosure, alteration, or destruction.
            </p>
            <h2 className="text-base font-bold text-primary">5. Contact Our Privacy Officer</h2>
            <p>
              If you have any questions or requests regarding your personal information, please contact privacy@configusa.com or mail our headquarters at 1000 Corporate Center Drive, Suite 300, Alpharetta, GA 30022.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function TermsView() {
  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">TERMS OF SERVICE</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">Terms of Use</h1>
          <p className="mt-2 text-xs text-muted-foreground">Effective Date: January 1, 2026</p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground border-t border-border pt-6">
            <p>
              Welcome to the ConfigUSA website. By accessing or using this site, you agree to comply with and be bound by the following terms and conditions.
            </p>
            <h2 className="text-base font-bold text-primary">1. Intellectual Property</h2>
            <p>
              All content, brand trademarks, logos, and proprietary materials on this website are the property of ConfigUSA or its licensors and are protected under international copyright and trademark laws.
            </p>
            <h2 className="text-base font-bold text-primary">2. Requisition and Application Submissions</h2>
            <p>
              Submissions through our talent inquiries or careers portals must contain truthful, accurate, and non-misleading information.
            </p>
            <h2 className="text-base font-bold text-primary">3. Disclaimer of Warranties</h2>
            <p>
              This website is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied.
            </p>
            <h2 className="text-base font-bold text-primary">4. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Georgia and the federal laws of the United States.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function AccessibilityView() {
  return (
    <div className="site-page min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-brand">DIGITAL INCLUSION</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">Accessibility Statement</h1>
          <p className="mt-2 text-xs text-muted-foreground">ConfigUSA Digital Accessibility Commitment</p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground border-t border-border pt-6">
            <p>
              ConfigUSA is dedicated to ensuring digital accessibility for people of all abilities. We continuously improve user experience for everyone and apply relevant accessibility standards (WCAG 2.1 Level AA).
            </p>
            <h2 className="text-base font-bold text-primary">Our Measures</h2>
            <p>
              We implement semantic HTML elements, accessible form labels, high-contrast typography, keyboard navigability, and screen-reader compatible ARIA landmarks throughout our web application.
            </p>
            <h2 className="text-base font-bold text-primary">Feedback</h2>
            <p>
              If you experience any accessibility barriers while using our website, please email accessibility@configusa.com and our digital team will promptly assist you.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

/* =========================================================================
   18. FALLBACK CONTENT VIEW (FOR $slug DYNAMIC ROUTE)
   ========================================================================= */
export function ContentView({ slug }: { slug: string; inquiryType?: string }) {
  // Map known slugs to their dedicated views
  switch (slug) {
    case "about":
      return <AboutView />;
    case "why-configusa":
      return <WhyConfigUSAView />;
    case "leadership":
      return <LeadershipView />;
    case "it-staffing":
      return <ITStaffingView />;
    case "workforce-solutions":
      return <WorkforceSolutionsView />;
    case "msp-vms":
      return <MSPView />;
    case "technology-consulting":
      return <TechnologyConsultingView />;
    case "sap":
      return <SAPView />;
    case "workday":
      return <WorkdayView />;
    case "cloud-infrastructure":
      return <CloudInfrastructureView />;
    case "ai-data-digital":
      return <AIDigitalView />;
    case "industries":
      return <IndustriesView />;
    case "global-presence":
      return <GlobalPresenceView />;
    case "careers":
      return <CareersView />;
    case "contact":
      return <ContactView />;
    case "privacy":
      return <PrivacyView />;
    case "terms":
      return <TermsView />;
    case "accessibility":
      return <AccessibilityView />;
    default:
      return (
        <div className="site-page min-h-screen bg-background flex flex-col">
          <SiteHeader />
          <main className="flex-1 flex items-center justify-center py-20 px-5">
            <div className="max-w-md text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-brand">Page Not Found</p>
              <h1 className="mt-2 font-display text-3xl font-bold text-primary">We Couldn't Find That Page</h1>
              <p className="mt-3 text-sm text-muted-foreground">
                The requested resource does not exist or may have been relocated.
              </p>
              <div className="mt-6">
                <Link
                  to="/"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-primary shadow-sm px-6 text-sm font-semibold text-primary-foreground hover:bg-slate-brand"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </main>
          <SiteFooter />
        </div>
      );
  }
}
