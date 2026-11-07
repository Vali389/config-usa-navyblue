export function CredentialsSection() {
  const credentials = [
    {
      img: "/assets/cert-mwbe.jpg",
      code: "M/WBE",
      name: "Minority & Women-Owned Business Enterprise",
      description: "Supporting corporate and government supplier diversity objectives with verified credentials.",
    },
    {
      img: "/assets/cert-sbe.jpg",
      code: "SBE",
      name: "Small Business Enterprise",
      description: "Recognized small business enterprise qualifying for state and federal program initiatives.",
    },
    {
      img: "/assets/cert-sam.jpg",
      code: "SAM.gov",
      name: "System for Award Management",
      description: "Active registration in federal SAM database for government contracting and prime partnerships.",
    },
    {
      img: "/assets/cert-everify.png",
      code: "E-Verify",
      name: "E-Verify Compliant Employer",
      description: "Federal employment eligibility verification ensuring 100% compliant workforce onboarding.",
    },
  ];

  return (
    <section className="border-t border-border bg-background py-14 sm:py-16">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-brand">Enterprise Compliance & Trust</p>
            <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
              Verified Certifications & Program Standards
            </h2>
          </div>
          <p className="max-w-md text-xs leading-5 text-muted-foreground">
            ConfigUSA maintains active registrations and workforce compliance standards supporting commercial enterprise and public sector programs.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 border-y border-border py-6 sm:grid-cols-4 sm:gap-6">
          {credentials.map((cred) => (
            <div
              key={cred.code}
              className="flex flex-col items-center justify-center p-4 text-center transition-transform hover:-translate-y-0.5"
            >
              <div className="flex h-16 w-full items-center justify-center">
                <img
                  src={cred.img}
                  alt={`${cred.name} certification logo`}
                  loading="lazy"
                  className="max-h-14 max-w-full object-contain filter"
                />
              </div>
              <p className="mt-3 text-xs font-bold text-primary">{cred.code}</p>
              <p className="mt-1 text-[11px] leading-4 text-muted-foreground line-clamp-2">{cred.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

