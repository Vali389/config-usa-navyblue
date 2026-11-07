import { Users, ShieldCheck, Globe } from "lucide-react";

export function TrustRibbon() {
  const points = [
    {
      icon: Users,
      title: "Specialized Talent",
      description: "Pre-vetted technology professionals aligned to technical competencies and business culture.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Delivery",
      description: "Disciplined execution from requisition through compliant onboarding and ongoing retention.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Coordinated recruiting and business delivery presence across the U.S., India, and Canada.",
    },
  ];

  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-[1380px] divide-y divide-border px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">
        {points.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-center gap-4 py-5 md:px-7 md:first:pl-0">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/40 bg-secondary/50 text-primary">
              <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary">{title}</p>
              <p className="mt-0.5 text-xs leading-5 text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

