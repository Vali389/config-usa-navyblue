import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { navigationGroups } from "@/lib/configusa-content";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [currentPath]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-[1380px] items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link to="/" aria-label="ConfigUSA Home" className="shrink-0 transition-opacity hover:opacity-90">
          <img
            src="/assets/configusa-logo.png"
            alt="ConfigUSA — Enterprise Technology & Workforce Solutions"
            width={190}
            height={56}
            className="h-11 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden items-center gap-1 xl:flex">
          <Link
            to="/"
            className={`px-3 py-2 text-sm font-medium transition-colors hover:text-slate-brand ${
              currentPath === "/" ? "font-semibold text-primary" : "text-foreground/90"
            }`}
          >
            Home
          </Link>

          {navigationGroups.map((group) => {
            const isGroupActive = group.items.some((item) => currentPath.startsWith(item.path.split("#")[0]));
            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(group.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  aria-expanded={openDropdown === group.label}
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors hover:text-slate-brand ${
                    isGroupActive ? "font-semibold text-primary" : "text-foreground/90"
                  }`}
                >
                  {group.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      openDropdown === group.label ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Dropdown panel */}
                {openDropdown === group.label && (
                  <div className="absolute left-0 top-full pt-1">
                    <div className="min-w-[280px] rounded-xl border border-slate-200/90 dark:border-border bg-white dark:bg-card p-2 shadow-xl ring-1 ring-black/5 animate-in fade-in-50 zoom-in-95">
                      {group.items.map((item) => {
                        const itemBase = item.path.split("#")[0];
                        const isActive = currentPath === itemBase;
                        return (
                          <Link
                            key={item.label}
                            to={item.path}
                            className={`block rounded-lg px-3.5 py-2.5 text-left transition-colors ${
                              isActive
                                ? "bg-secondary text-primary font-medium"
                                : "text-foreground hover:bg-secondary/70 hover:text-primary"
                            }`}
                          >
                            <div className="text-sm font-medium leading-snug">{item.label}</div>
                            {item.description && (
                              <div className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{item.description}</div>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <Link
            to="/global-presence"
            className={`px-3 py-2 text-sm font-medium transition-colors hover:text-slate-brand ${
              currentPath === "/global-presence" ? "font-semibold text-primary" : "text-foreground/90"
            }`}
          >
            Global Presence
          </Link>

          {/* Careers Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("Careers")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              aria-expanded={openDropdown === "Careers"}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors hover:text-slate-brand ${
                currentPath.startsWith("/careers") ? "font-semibold text-primary" : "text-foreground/90"
              }`}
            >
              Careers
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  openDropdown === "Careers" ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            {openDropdown === "Careers" && (
              <div className="absolute left-0 top-full pt-1">
                <div className="min-w-[240px] rounded-xl border border-slate-200/90 dark:border-border bg-white dark:bg-card p-2 shadow-xl ring-1 ring-black/5">
                  <Link
                    to="/careers"
                    className="block rounded-lg px-3.5 py-2.5 text-left text-sm font-medium text-foreground hover:bg-secondary/70 hover:text-primary"
                  >
                    Job Opportunities
                    <span className="block text-xs font-normal text-muted-foreground">Search and apply for open positions</span>
                  </Link>
                  <Link
                    to="/careers#submit-resume"
                    className="block rounded-lg px-3.5 py-2.5 text-left text-sm font-medium text-foreground hover:bg-secondary/70 hover:text-primary"
                  >
                    Submit Resume
                    <span className="block text-xs font-normal text-muted-foreground">Join our global talent community</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className={`px-3 py-2 text-sm font-medium transition-colors hover:text-slate-brand ${
              currentPath === "/contact" ? "font-semibold text-primary" : "text-foreground/90"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden items-center gap-3 xl:flex">
          <Link
            to="/contact"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-[4px] bg-gold px-5 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Request Talent
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 xl:hidden">
          <Link
            to="/contact"
            className="inline-flex h-9 items-center justify-center rounded-[4px] bg-gold px-3 text-xs font-semibold text-primary shadow-sm hover:bg-gold/90 sm:px-4"
          >
            Request Talent
          </Link>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-secondary"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-border bg-background px-5 pb-8 pt-3 shadow-2xl xl:hidden animate-in fade-in slide-in-from-top-2">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-nav-link"
          >
            Home
          </Link>

          {navigationGroups.map((group) => (
            <details key={group.label} className="border-b border-border py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between py-2.5 text-sm font-semibold text-foreground">
                {group.label}
                <ChevronDown className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              </summary>
              <div className="pb-3 pl-3 space-y-1">
                {group.items.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          ))}

          <Link
            to="/global-presence"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-nav-link"
          >
            Global Presence
          </Link>

          <details className="border-b border-border py-1">
            <summary className="flex cursor-pointer list-none items-center justify-between py-2.5 text-sm font-semibold text-foreground">
              Careers
              <ChevronDown className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </summary>
            <div className="pb-3 pl-3 space-y-1">
              <Link
                to="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm text-muted-foreground hover:text-primary"
              >
                Job Opportunities
              </Link>
              <Link
                to="/careers#submit-resume"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm text-muted-foreground hover:text-primary"
              >
                Submit Resume
              </Link>
            </div>
          </details>

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-nav-link"
          >
            Contact Us
          </Link>

          <div className="mt-5">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-slate-brand"
            >
              Request Talent
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

