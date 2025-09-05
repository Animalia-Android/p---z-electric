import BackButton from '@/components/BackButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request an Estimate | P&Z Electric',
  description:
    'Get a fast, transparent electrical estimate in NYC—panel upgrades, lighting, EV chargers, troubleshooting, and more.',
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ success?: string }>;
}) {
  const sp = (await searchParams) ?? {};
  const success = sp.success === '1';

  return (
    <main className="mx-auto max-w-5xl p-6 space-y-8">
      <BackButton destination="/" />

      <section className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Request an Estimate</h1>
          <p className="text-white/80 max-w-2xl">
            Tell us a bit about your project and we’ll get back to you quickly.
            We serve residential and commercial clients across NYC.
          </p>
        </header>

        {success && (
          <div className="rounded-xl border border-green-400/30 bg-green-400/10 p-4 text-green-200">
            <p className="font-semibold">Thanks! We received your request.</p>
            <p className="text-sm opacity-90">
              A project manager will reach out shortly.
            </p>
          </div>
        )}

        <form
          method="post"
          action="/api/estimate"
          className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          {/* anti-spam honeypot (keep hidden) */}
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" tabIndex={-1} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-white/70" htmlFor="name">
                Name<span className="text-red-400"> *</span>
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-graphite-600 bg-graphite-800 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400"
                placeholder="Jane Smith"
              />
            </div>

            <div>
              <label className="block text-sm text-white/70" htmlFor="email">
                Email<span className="text-red-400"> *</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-graphite-600 bg-graphite-800 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-white/70" htmlFor="phone">
                Phone<span className="text-red-400"> *</span>
              </label>
              <input
                id="phone"
                name="phone"
                required
                inputMode="tel"
                className="mt-1 w-full rounded-lg border border-graphite-600 bg-graphite-800 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400"
                placeholder="(212) 555-1234"
              />
            </div>

            <div>
              <label className="block text-sm text-white/70" htmlFor="location">
                Location / Borough
              </label>
              <input
                id="location"
                name="location"
                className="mt-1 w-full rounded-lg border border-graphite-600 bg-graphite-800 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400"
                placeholder="Brooklyn, NY"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-white/70" htmlFor="service">
                Service Type
              </label>
              <select
                id="service"
                name="service"
                className="mt-1 w-full rounded-lg border border-graphite-600 bg-graphite-800 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service…
                </option>
                <option>Panel / Service Upgrade</option>
                <option>Lighting (interior / exterior / landscape)</option>
                <option>EV Charger Install</option>
                <option>Troubleshooting / Repairs</option>
                <option>Commercial Build-out</option>
                <option>Low-Voltage (data / cameras / access)</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label
                className="block text-sm text-white/70"
                htmlFor="timeframe"
              >
                Timeframe
              </label>
              <select
                id="timeframe"
                name="timeframe"
                className="mt-1 w-full rounded-lg border border-graphite-600 bg-graphite-800 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Select timeframe…
                </option>
                <option>ASAP (Emergency)</option>
                <option>Within 1–2 weeks</option>
                <option>This month</option>
                <option>Flexible</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm text-white/70" htmlFor="details">
              Project Details<span className="text-red-400"> *</span>
            </label>
            <textarea
              id="details"
              name="details"
              required
              rows={5}
              className="mt-1 w-full rounded-lg border border-graphite-600 bg-graphite-800 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400"
              placeholder="Tell us what you need (scope, photos, access, preferred times)…"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="rounded-xl bg-brand-500 px-5 py-3 font-semibold text-black hover:bg-brand-600"
            >
              Submit Request
            </button>
            <a
              href="tel:+1XXXXXXXXXX"
              className="rounded-xl border border-graphite-600 px-5 py-3 font-semibold hover:bg-graphite-700"
            >
              Or call now
            </a>
          </div>

          <p className="text-xs text-white/60">
            By submitting, you agree to be contacted about your request. We
            don’t sell your data.
          </p>
        </form>
      </section>
    </main>
  );
}
