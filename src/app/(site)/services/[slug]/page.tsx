import Link from 'next/link';
import { notFound } from 'next/navigation';
import { sanity } from '@/lib/sanity/client';
import { serviceBySlug, allServices } from '@/lib/sanity/queries';
import { MOCK_SERVICES } from '@/lib/MockServices';
import BackButton from '@/components/BackButton';

export const revalidate = 60;

type SlugLike = string | { current?: string } | null | undefined;

// ---- helpers (same idea as before) -----------------------------------------
function isSanityReady() {
  return Boolean(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
      process.env.NEXT_PUBLIC_SANITY_DATASET
  );
}

// get slug string from various possible shapes
function getSlug(val: SlugLike): string | undefined {
  if (!val) return undefined;
  if (typeof val === 'string') return val;
  if (typeof val === 'object' && typeof val.current === 'string')
    return val.current;
  return undefined;
}

// fetch all services (for listing and static params)
async function getAllServices() {
  if (!isSanityReady()) return MOCK_SERVICES;
  try {
    const rows = await sanity.fetch(allServices);
    return rows.map(
      (r: {
        slug: string | { current: string };
        title?: string;
        name?: string;
        summary?: string;
      }) => ({
        slug: getSlug(r.slug) ?? r.slug,
        title: r.title ?? r.name ?? 'Untitled Service',
        summary: r.summary,
      })
    );
  } catch {
    return MOCK_SERVICES;
  }
}

// fetch single service by slug (for detail page)

type Service = {
  slug: string;
  title: string;
  summary?: string;
  bullets?: string[];
  inclusions?: string[];
  quickFacts?: {
    timeline?: string;
    permits?: string;
    warranty?: string;
    emergency?: string;
  };
  process?: { step: string; blurb?: string }[];
  faq?: { q: string; a: string }[];
  related?: string[]; // slugs
};

async function getService(slug: string): Promise<Service | null> {
  console.log('Fetching service for slug:', slug);
  if (!isSanityReady()) {
    return (MOCK_SERVICES as Service[]).find((s) => s.slug === slug) || null;
  }
  try {
    const data = await sanity.fetch(serviceBySlug, { slug });
    if (!data) return null;
    // normalize here as you shape your Sanity schema:
    return {
      slug,
      title: data.title ?? 'Untitled Service',
      summary: data.summary,
      inclusions: data.inclusions,
      quickFacts: data.quickFacts,
      process: data.process,
      faq: data.faq,
    };
  } catch {
    return (MOCK_SERVICES as Service[]).find((s) => s.slug === slug) || null;
  }
}

// ---- static params ---------------------------------------------------------

// for SSG of dynamic routes (Next 14.2+/15)
export async function generateStaticParams() {
  const services = await getAllServices();
  return services
    .filter((s: Service) => s.slug)
    .map((s: Service) => ({ slug: s.slug }));
}

// ---- page -------------------------------------------------------------------

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // Next 14.2+/15
  // const data = await getService(slug);
  const data = MOCK_SERVICES.find((s) => s.slug === slug);
  if (!data) return notFound();

  console.log('************ServicePage data:', data);

  const {
    title,
    summary,
    inclusions = data.bullets ?? [],
    quickFacts = {},
    process = defaultProcess(),
    faq = [],
  } = data;

  const facts = {
    timeline: quickFacts.timeline ?? 'Typically 1–3 days',
    permits: quickFacts.permits ?? 'DOB permits as required',
    warranty: quickFacts.warranty ?? '1-year workmanship warranty',
    emergency: quickFacts.emergency ?? '24/7 emergency available',
  };

  return (
    <main className="mx-auto max-w-5xl p-6 space-y-8">
      <BackButton destination="services" />

      {/* HERO */}
      <section className="relative isolate overflow-hidden rounded-2xl border border-white/10 p-6 sm:p-8">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_30%,white,transparent_70%)] bg-[radial-gradient(40rem_20rem_at_20%_-10%,rgba(250,204,21,0.25),transparent),radial-gradient(40rem_20rem_at_80%_120%,rgba(250,204,21,0.18),transparent)]" />
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        {summary && <p className="mt-2 max-w-3xl text-white/80">{summary}</p>}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/contact?service=${encodeURIComponent(title)}`}
            className="rounded-xl bg-brand-500 px-5 py-3 font-semibold text-black hover:bg-brand-600"
          >
            Lets Get Started
          </Link>
          <a
            href="tel:+17189246702"
            className="rounded-xl border border-white/15 px-5 py-3 font-semibold hover:bg-white/10"
          >
            Call (718) 924-6702
          </a>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Fact
          label="Typical timeline"
          value={facts.timeline}
          icon={<ClockIcon />}
        />
        <Fact
          label="Permits/inspection"
          value={facts.permits}
          icon={<PermitIcon />}
        />
        <Fact label="Warranty" value={facts.warranty} icon={<ShieldIcon />} />
        <Fact
          label="Emergency support"
          value={facts.emergency}
          icon={<BoltIcon />}
        />
      </section>

      {/* WHAT'S INCLUDED */}
      {inclusions?.length ?
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">What’s included</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {inclusions.map((line, i) => (
              <li key={i} className="flex items-start gap-2 text-white/85">
                <CheckIcon />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>
      : null}

      {/* PROCESS */}
      {process?.length ?
        <section className="rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl font-semibold">How it works</h2>
          <ol className="mt-4 space-y-4">
            {process.map((p, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-500/50 bg-brand-500/20 text-sm font-semibold">
                  {i + 1}
                </span>
                <div>
                  <div className="font-semibold">{p.step}</div>
                  {p.blurb && <p className="text-white/80">{p.blurb}</p>}
                </div>
              </li>
            ))}
          </ol>
        </section>
      : null}

      {/* FAQ */}
      {faq?.length ?
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Common questions</h2>
          <div className="divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
            {faq.map((f, i) => (
              <details key={i} className="group p-4 open:bg-white/[0.06]">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium">{f.q}</span>
                  <span className="ml-4 text-white/60 group-open:hidden">
                    +
                  </span>
                  <span className="ml-4 hidden text-white/60 group-open:inline">
                    –
                  </span>
                </summary>
                <p className="mt-3 text-white/85">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      : null}

      {/* BOTTOM CTA */}
      <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
        <h3 className="text-lg font-bold">Ready to get started?</h3>
        <p className="mt-1 text-white/85">
          We’ll assess your space and give you clear options, timeline, and
          pricing.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={`/contact?service=${encodeURIComponent(title)}`}
            className="rounded-xl bg-brand-500 px-5 py-3 font-semibold text-black hover:bg-brand-600"
          >
            Request an Estimate
          </Link>
          <a
            href="tel:+17189246702"
            className="rounded-xl border border-yellow-400/40 px-5 py-3 font-semibold"
          >
            Call (718) 924-6702
          </a>
        </div>
      </section>
    </main>
  );
}

// ---- small components/icons -------------------------------------------------
function Fact({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
      <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-yellow-300">
        {icon}
      </span>
      <div>
        <div className="text-sm text-white/70">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
}

// icons (from material design icons, simplified)

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7 18.9 6.3z"
      />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 10.4l3.3 2-1 1.6-4.3-2.6V7h2v5.4z"
      />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2l8 3v6c0 5-3.5 9.7-8 11-4.5-1.3-8-6-8-11V5l8-3z"
      />
    </svg>
  );
}
function PermitIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5"
      />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

// sensible default process if none supplied
function defaultProcess() {
  return [
    {
      step: 'Site visit & load assessment',
      blurb: 'We review your panel, circuits, and code requirements.',
    },
    {
      step: 'Clear estimate & options',
      blurb: 'We present pricing/timeline and any permitting steps.',
    },
    {
      step: 'Scheduling & permitting',
      blurb: 'We coordinate DOB paperwork and utility as needed.',
    },
    {
      step: 'Installation',
      blurb: 'Clean runs, labeling, grounding, and safety testing.',
    },
    {
      step: 'Inspection & walkthrough',
      blurb: 'We finalize inspections and review the work with you.',
    },
  ];
}
