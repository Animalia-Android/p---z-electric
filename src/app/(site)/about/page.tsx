// src/app/(site)/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | P&Z Electric',
  description:
    'Licensed & insured NYC electricians delivering safe, code-compliant work for homes and businesses.',
};

export default function AboutPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">About P&Z Electric</h1>
      <p className="text-white/80 max-w-3xl">
        {/* P&Z Electric is a NYC-based, licensed and insured electrical contractor.
        We focus on clean workmanship, safety, and clear communication—from
        estimate to final inspection. Our team handles panel and service
        upgrades, lighting, EV chargers, low-voltage, and commercial build-outs
        across all five boroughs. */}
        P & Z Electric Corp is a full service electrical contracting company
        serving residential and commercial customers in the New York City area.
        We provide Panel Upgrades Services, Lighting Services and other services
        for new construction, renovations, tenant improvements, service
        upgrades, exterior, interior and landscape lighting, retrofits and
        service installations.
        <br />
        From design to finish, our experienced estimators, project managers and
        technicians provide the expertise to ensure your electrical project is
        completed on time, on budget and up to code. We understand that service
        interruptions are an inconvenience and cost you productivity so we focus
        on providing expedient services to get you back online as soon as
        possible without risking the safety of your valuable electrical
        equipment. We are also absolutely committed to safety and provide
        ongoing education to our personnel to ensure complete compliance with
        best practices and standards.
        <br />
        P & Z Electric Corp has served its customers in the New York City area
        with a commitment to service and value. We have the experience and
        expertise to get the job done right the first time. Our skilled
        professionals use only the finest tools and materials. Once we've made
        the necessary repairs, it's almost as though the damage never occurred.
        We provide personalized service and affordable rates.
        <br />
        And if there's anything else we can do to make your experience any
        better, just ask. We appreciate your interest and look forward to
        earning your business.
      </p>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li className="rounded-xl border border-graphite-700 bg-graphite-800 p-4">
          <div className="font-semibold">Safety First</div>
          <p className="text-sm text-white/70">
            OSHA-trained, tidy runs, labeled panels, code-compliant.
          </p>
        </li>
        <li className="rounded-xl border border-graphite-700 bg-graphite-800 p-4">
          <div className="font-semibold">Permits & Inspections</div>
          <p className="text-sm text-white/70">
            We manage DOB paperwork end-to-end.
          </p>
        </li>
        <li className="rounded-xl border border-graphite-700 bg-graphite-800 p-4">
          <div className="font-semibold">Transparent Estimates</div>
          <p className="text-sm text-white/70">
            Clear scope, timeline, and pricing—no surprises.
          </p>
        </li>
      </ul>

      <a
        href="/contact"
        className="inline-flex rounded-xl bg-brand-500 px-5 py-3 font-semibold text-black hover:bg-brand-600"
      >
        Request an Estimate
      </a>
    </section>
  );
}
