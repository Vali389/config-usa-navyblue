export function ClientLogosRibbon() {
  const logos = [
    { src: "/assets/client_logo_2-nKUKc3s7.png", alt: "Enterprise Client 1" },
    { src: "/assets/client_logo_3-D--UalyY.png", alt: "Enterprise Client 2" },
    { src: "/assets/client_logo_4-Da7vG7eI.png", alt: "Enterprise Client 3" },
    { src: "/assets/client_logo_6-Ce2Rpei5.png", alt: "Enterprise Client 4" },
    { src: "/assets/client_logo_7-Bv_JEGT_.png", alt: "Enterprise Client 5" },
    { src: "/assets/client_logo_8-Bx5hIy_o.png", alt: "Enterprise Client 6" },
    { src: "/assets/client_logo_10-OxaayLNQ.png", alt: "Enterprise Client 7" },
    { src: "/assets/client_logo_11-ZADPdNSI.png", alt: "Enterprise Client 8" },
    { src: "/assets/client_logo_13-p_44Z2fO.png", alt: "Enterprise Client 9" },
    { src: "/assets/client_logo_16-CgbTLYh-.png", alt: "Enterprise Client 10" },
    { src: "/assets/client_logo_17-BVICvRTb.png", alt: "Enterprise Client 11" },
    { src: "/assets/client_logo_18-CG9K8Oy6.png", alt: "Enterprise Client 12" },
  ];

  return (
    <section className="border-b border-border bg-card/60 py-10 sm:py-12">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-brand">
          TRUSTED ACROSS ENTERPRISE PROGRAMS, MSP NETWORKS & INDUSTRY LEADERS
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-14">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex h-10 items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                loading="lazy"
                className="max-h-7 sm:max-h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

