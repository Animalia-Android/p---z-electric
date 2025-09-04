// app/(site)/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="relative isolate overflow-hidden rounded-2xl border border-white/10">
        {/* subtle gradient glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_30%,white,transparent_70%)] bg-[radial-gradient(40rem_20rem_at_20%_-10%,rgba(250,204,21,0.25),transparent),radial-gradient(40rem_20rem_at_80%_120%,rgba(250,204,21,0.18),transparent)]" />
        <div className="px-6 py-16 sm:px-10 md:px-14 md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-sm font-medium text-yellow-300">
            {/* lightning icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" className="-mb-0.5">
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="currentColor" />
            </svg>
            24/7 Emergency Service
          </span>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
            Powering NYC with <span className="text-yellow-300">safe</span>,{' '}
            <span className="text-yellow-300">reliable</span> electrical work.
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Residential & commercial builds, service upgrades, lighting design,
            EV chargers, and rapid troubleshooting.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-black shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              Request an Estimate
            </Link>
            <a
              href="tel:+1XXXXXXXXXX"
              className="rounded-xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Call Now
            </a>
          </div>

          {/* trust badges */}
          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
            <li className="inline-flex items-center gap-2">
              {/* shield icon */}
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path
                  d="M12 2l8 3v6c0 5-3.5 9.7-8 11-4.5-1.3-8-6-8-11V5l8-3z"
                  fill="currentColor"
                />
              </svg>
              Licensed & Insured
            </li>
            <li>• DOB Permitting</li>
            <li>• OSHA Trained</li>
            <li>• Same-Day Service</li>
          </ul>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section aria-labelledby="services">
        <div className="flex items-end justify-between gap-4">
          <h2 id="services" className="text-2xl font-bold">
            Popular services
          </h2>
          <Link
            href="/services"
            className="text-sm text-yellow-300 hover:underline"
          >
            View all services →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            href="/services/panel-upgrades"
            title="Panel & Service Upgrades"
            blurb="100–200A upgrades, meter swaps, clean labeling."
          />
          <ServiceCard
            href="/services/lighting"
            title="Lighting Design & Install"
            blurb="Recessed, track, high-bay, sensors, dimming."
          />
          <ServiceCard
            href="/services/ev-chargers"
            title="EV Charger Installs"
            blurb="Level 2 chargers, load calcs, permits, inspection."
          />
          <ServiceCard
            href="/services/troubleshooting"
            title="Troubleshooting"
            blurb="Breakers tripping, dead outlets, safety checks."
          />
          <ServiceCard
            href="/services/commercial-buildouts"
            title="Commercial Build-outs"
            blurb="Restaurants, retail, office power & lighting."
          />
          <ServiceCard
            href="/services/low-voltage"
            title="Low-Voltage"
            blurb="Data, cameras, access control, intercoms."
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        aria-labelledby="why"
        className="rounded-2xl border border-white/10 p-6 sm:p-8"
      >
        <h2 id="why" className="text-2xl font-bold">
          Why P&Z Electric
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-white/85">
          <li className="rounded-xl border border-white/10 p-4">
            <span className="font-semibold">Safety first.</span> Clean runs,
            proper grounding, labeled panels, code compliance.
          </li>
          <li className="rounded-xl border border-white/10 p-4">
            <span className="font-semibold">Transparent estimates.</span> Clear
            scope, timeline, and pricing—no surprises.
          </li>
          <li className="rounded-xl border border-white/10 p-4">
            <span className="font-semibold">NYC experts.</span> DOB permitting
            and inspections handled end-to-end.
          </li>
        </ul>
      </section>

      {/* CTA BAR */}
      <section
        aria-labelledby="cta"
        className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 sm:p-8"
      >
        <h2 id="cta" className="text-xl font-bold">
          Need help today?
        </h2>
        <p className="mt-1 text-white/85">
          Call for rapid dispatch or request an estimate—we’ll respond quickly.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-black"
          >
            Request an Estimate
          </Link>
          <a
            href="tel:+1XXXXXXXXXX"
            className="rounded-xl border border-yellow-400/40 px-5 py-3 font-semibold"
          >
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  href,
  title,
  blurb,
}: {
  href: string;
  title: string;
  blurb: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-white/10 p-5 transition hover:border-yellow-400/40 hover:bg-white/5"
    >
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-1 text-sm text-white/70">{blurb}</p>
      <span className="mt-3 inline-flex items-center text-sm font-medium text-yellow-300 group-hover:underline">
        Learn more →
      </span>
    </Link>
  );
}
