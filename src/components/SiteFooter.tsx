import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="mx-auto max-w-[1380px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Column 1: Brand & Positioning */}
          <div className="max-w-md">
            <Link to="/" aria-label="ConfigUSA Home" className="inline-block bg-white px-3 py-1.5 rounded-sm shadow-sm">
              <img
                src="/assets/configusa-logo.png"
                alt="ConfigUSA"
                width={175}
                height={50}
                className="h-9 md:h-10 w-auto object-contain"
              />
            </Link>
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">CONFIGUSA</p>
              <p className="mt-1.5 text-base font-medium text-primary-foreground">
                Enterprise Talent. Technology Expertise. Delivery You Can Trust.
              </p>
              <p className="mt-3 text-sm leading-6 text-primary-foreground/75">
                Connecting organizations with specialized technology professionals, scalable workforce solutions, and dependable execution across international markets.
              </p>
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs text-primary-foreground/70">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <span>Technology. Talent. Transformation.</span>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gold">Company</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/why-configusa" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  Why ConfigUSA
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/global-presence" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  Global Presence
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  Careers & Job Opportunities
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  Industries We Serve
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions & Expertise */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gold">Solutions & Expertise</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/solutions/it-staffing" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  IT Staffing & Talent
                </Link>
              </li>
              <li>
                <Link to="/solutions/workforce-solutions" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  Workforce Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/msp-vms" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  MSP & VMS Programs
                </Link>
              </li>
              <li>
                <Link to="/solutions/technology-consulting" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  Technology Consulting
                </Link>
              </li>
              <li>
                <Link to="/services/forward-deployed-engineering" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  Forward-Deployed Engineering (FDE)
                </Link>
              </li>
              <li>
                <Link to="/gcc" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  Global Capability Centers (GCC)
                </Link>
              </li>
              <li>
                <Link to="/services/palantir" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  Palantir Foundry & AIP Services
                </Link>
              </li>
              <li>
                <Link to="/expertise/sap" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  SAP Solutions
                </Link>
              </li>
              <li>
                <Link to="/expertise/workday" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  Workday Solutions
                </Link>
              </li>
              <li>
                <Link to="/expertise/cloud-infrastructure" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  Cloud & Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/expertise/ai-data-digital" className="text-primary-foreground/80 transition-colors hover:text-gold">
                  AI, Data & Digital Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Global Presence */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gold">Contact & Global Presence</p>
            <div className="space-y-3.5 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  <strong className="block text-primary-foreground font-medium">Plainsboro, NJ · Hyderabad · Toronto</strong>
                  United States · India · Canada
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href="mailto:usa@configusa.com" className="hover:text-gold transition-colors">
                  usa@configusa.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href="tel:+16099343184" className="hover:text-gold transition-colors">
                  +1 (609) 934-3184
                </a>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-gold/60 bg-gold/10 px-4 py-2 text-xs font-semibold text-gold transition-colors hover:bg-gold hover:text-primary"
                >
                  Request Talent Consultation
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Global Footprint strip */}
        <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-xs text-primary-foreground/70">
            <Globe className="h-4 w-4 text-gold" aria-hidden="true" />
            <span className="font-semibold text-primary-foreground/90">Global Operations:</span>
            <span>United States (ConfigUSA Global HQ)</span>
            <span>·</span>
            <span>Canada (ConfigUSA Canada Office)</span>
            <span>·</span>
            <span>India (ConfigUSA India Delivery Center)</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-primary-foreground/70">
            <Link to="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold transition-colors">
              Terms of Use
            </Link>
            <Link to="/accessibility" className="hover:text-gold transition-colors">
              Accessibility
            </Link>
            <a
              href="https://www.linkedin.com/company/configusa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-4 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between text-xs text-primary-foreground/50">
          <p>© 2026 ConfigUSA. All rights reserved.</p>
          <p className="mt-1 sm:mt-0">Enterprise Technology, Workforce & Managed Delivery Partner</p>
        </div>
      </div>
    </footer>
  );
}

