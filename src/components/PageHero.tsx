import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import globalImage from "@/assets/global-footprint.jpg";

export type HeroImageKey =
  | "corporate"
  | "executives"
  | "whoweare"
  | "about"
  | "why"
  | "leadership"
  | "approach"
  | "consulting"
  | "workforce"
  | "itstaffing"
  | "msp"
  | "sap"
  | "workday"
  | "cloud"
  | "storycloud"
  | "ai"
  | "platforms"
  | "industry"
  | "financial"
  | "healthcare"
  | "government"
  | "manufacturing"
  | "technology"
  | "global"
  | "careers"
  | "contact";

const imageByKey: Record<HeroImageKey, string> = {
  corporate: "/assets/hero-corporate-final.jpg",
  executives: "/assets/hero-leadership-bright.jpg",
  whoweare: "/assets/hero-about-clean.jpg?v=3",
  about: "/assets/hero-about-clean.jpg?v=3",
  why: "/assets/hero-why-clean.jpg",
  leadership: "/assets/hero-leadership-bright.jpg?v=2",
  approach: "/assets/hero-why-clean.jpg",
  consulting: "/assets/hero-why-clean.jpg",
  workforce: "/assets/hero-workforce-bright.jpg?v=2",
  itstaffing: "/assets/hero-itstaffing-bright.jpg?v=2",
  msp: "/assets/hero-msp-bright.jpg?v=2",
  sap: "/assets/hero-sap-bright.jpg?v=2",
  workday: "/assets/hero-workday-bright.jpg?v=2",
  cloud: "/assets/hero-platforms-bright.jpg?v=2",
  storycloud: "/assets/story-cloud.jpg",
  ai: "/assets/hero-solutions-bright.jpg?v=2",
  platforms: "/assets/hero-platforms-bright.jpg?v=2",
  industry: "/assets/industry-experience-tech.jpg",
  financial: "/assets/ind-financial.jpg",
  healthcare: "/assets/ind-healthcare.jpg",
  government: "/assets/ind-government.jpg",
  manufacturing: "/assets/ind-manufacturing.jpg",
  technology: "/assets/ind-technology.jpg",
  global: globalImage,
  careers: "/assets/hero-careers-clean.jpg",
  contact: "/assets/hero-contact-final.jpg",
};

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image?: HeroImageKey | string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  badgeText?: string;
  compact?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image = "corporate",
  primaryCta = { label: "Request Talent", to: "/contact" },
  secondaryCta,
  badgeText,
  compact = false,
}: PageHeroProps) {
  const imgSrc = (image in imageByKey)
    ? imageByKey[image as HeroImageKey]
    : image;

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground border-b border-primary/20">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        {/* Left Column: Content */}
        <div className={`flex flex-col justify-center px-5 py-10 sm:px-8 sm:py-14 lg:px-14 ${compact ? "lg:py-12" : "lg:py-16"}`}>
          {/* Eyebrow */}
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-7 bg-gold" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
          </div>

          {/* Heading */}
          <h1 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[44px]">
            {title}
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            {description}
          </p>

          {/* CTAs - Matching Exact Reference Spec */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {primaryCta && (
              <Link
                to={primaryCta.to}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[4px] bg-gold px-6 text-sm font-semibold text-primary shadow-sm hover:shadow-md transition-all hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {primaryCta.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.to}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[4px] border border-white/30 bg-primary/40 px-6 text-sm font-semibold text-white shadow-sm hover:shadow-md transition-all hover:border-gold hover:text-gold"
              >
                {secondaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </div>

          {/* Trust indicator line */}
          <div className="mt-8 border-l border-gold/70 pl-4 text-xs tracking-wide text-primary-foreground/75">
            {badgeText || "Enterprise Technology, Workforce & Managed Delivery Partner"}
          </div>
        </div>

        {/* Right Column: Hero Photograph - Clearly visible, highly illuminated, daylight vibrant */}
        <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-full overflow-hidden bg-slate-900">
          <img
            src={imgSrc}
            alt={`${title} visual representation`}
            width={1600}
            height={960}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center filter brightness-[1.12] contrast-[1.03] saturate-[1.08] transition-transform duration-700 hover:scale-105"
          />
          {/* Subtle edge blend only on the left divider */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary/50 to-transparent pointer-events-none hidden lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none lg:hidden" />
          {image === "contact" && (
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto flex items-center gap-3.5 border-l-2 border-gold bg-primary/95 backdrop-blur-md px-5 py-3 text-xs text-primary-foreground shadow-2xl rounded-[4px]">
              <img
                src="/assets/configusa-logo-official.png"
                alt="ConfigUSA Logo"
                className="h-7 w-auto bg-white/95 rounded px-1.5 py-0.5 shadow-sm"
              />
              <div>
                <span className="block font-semibold text-white tracking-wide">ConfigUSA · Global Headquarters</span>
                <span className="mt-0.5 block text-[11px] text-primary-foreground/80">Direct Advisory & Enterprise Engagement</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
