import Link from 'next/link';

export const revalidate = 60;

type Svc = { title: string; blurb: string; icon: JSX.Element; slug: string };

const SERVICES: Svc[] = [
  svc(
    'Residential and commercial wiring',
    'Upgrade and repair for new houses and remodels.',
    <BoltIcon />
  ),
  svc(
    'Appliance and lighting installations',
    'Electrical circuit installations to latest electrical code requirements.',
    <LightIcon />
  ),
  svc(
    'Architectural lighting design',
    'Installation of fixtures to meet any mood or highlight decor.',
    <SparkleIcon />
  ),
  svc(
    'Data network and telephone installations',
    'Wireless or wired computer circuits and telephony lines for home or office.',
    <NetworkIcon />
  ),
  svc(
    'Power meter and electrical panel service',
    'Service upgrades and replacements for safety and reliability.',
    <PanelIcon />
  ),
  svc(
    'Bathroom and spa wiring',
    'Code-compliant circuit installation, shock protection, and GFI circuits.',
    <WaterIcon />
  ),
  svc(
    'Exterior lighting and power supply',
    'Underground circuits, concealed mood lighting & sensors.',
    <OutdoorIcon />
  ),
  svc(
    'Audio-visual and home automation',
    'Concealed speaker and cable wiring for multi-room systems.',
    <AudioIcon />
  ),
];

function svc(title: string, blurb: string, icon: JSX.Element): Svc {
  return { title, blurb, icon, slug: slugify(title) };
}
function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function ServicesPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Services Showcase</h1>
        <p className="text-white/80 max-w-2xl">
          Tap a service to see details. Ready for a quote? Tell us a bit about
          your project and we’ll respond quickly.
        </p>
      </header>

      {/* Grid of accordion cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <details
            key={s.slug}
            className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-brand-500/40 hover:bg-white/[0.06]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-400/30 to-accent-400/20 text-yellow-300">
                  {s.icon}
                </span>
                <h2 className="text-lg font-semibold">{s.title}</h2>
              </div>
              <span className="ml-2 select-none rounded-md border border-white/10 px-2 py-0.5 text-sm text-white/70 group-open:hidden">
                +
              </span>
              <span className="ml-2 hidden select-none rounded-md border border-white/10 px-2 py-0.5 text-sm text-white/70 group-open:inline">
                –
              </span>
            </summary>

            <div className="mt-3 space-y-3 text-white/85">
              <p>{s.blurb}</p>
              <ul className="list-disc pl-5 text-sm text-white/75 space-y-1">
                <li>Code-compliant workmanship and clean labeling</li>
                <li>Clear scope, timeline, and pricing</li>
                <li>Permit & inspection guidance (as applicable)</li>
              </ul>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href={`/contact?service=${encodeURIComponent(s.title)}`}
                  className="rounded-lg bg-brand-500 px-4 py-2 font-semibold text-black hover:bg-brand-600"
                >
                  Request an Estimate
                </Link>
                {/* If you have CMS-backed /services/[slug] pages, this will work out of the box */}
                <Link
                  href={`/services/${s.slug}`}
                  className="rounded-lg border border-white/15 px-4 py-2 text-sm hover:bg-white/10"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </details>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5">
        <p className="text-white/85">
          Have something not listed? We handle custom work, too. Call{' '}
          <a
            href="tel:+17189246702"
            className="text-accent-400 underline hover:no-underline"
          >
            (718) 924-6702
          </a>{' '}
          or request an estimate.
        </p>
      </div>
    </section>
  );
}

/* ---------- inline icons (no deps) ---------- */
function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}
function LightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M9 21h6v-2H9v2zm3-19a7 7 0 00-4 12.9V17h8v-2.1A7 7 0 0012 2z"
      />
    </svg>
  );
}
function SparkleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5zM4 18l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3zM18 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z"
      />
    </svg>
  );
}
function NetworkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 5h16v2H4V5zm0 6h10v2H4v-2zm0 6h7v2H4v-2zm14-7h2v2h-2v-2zm-3 6h2v2h-2v-2z"
      />
    </svg>
  );
}
function PanelIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm2 3v12h12V6H6zm3 2h6v2H9V8zm0 4h6v2H9v-2z"
      />
    </svg>
  );
}
function WaterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3s6 7 6 11a6 6 0 11-12 0c0-4 6-11 6-11z"
      />
    </svg>
  );
}
function OutdoorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2l4 4-4 4-4-4 4-4zm-6 9h12v2H6v-2zm2 5h8v2H8v-2z"
      />
    </svg>
  );
}
function AudioIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 9v6h3l5 4V5l-5 4H7zm-2 6h2V9H5v6zm12-6h2v6h-2V9z"
      />
    </svg>
  );
}
