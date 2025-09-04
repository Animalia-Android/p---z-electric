// import { sanity } from '@/lib/sanity.client';

import { sanity } from '@/lib/sanity/client';
import { allServices } from '@/lib/sanity/queries';

// import { allServices } from '@/lib/queries';
export const revalidate = 60;

export default async function ServicesPage() {
  const services = await sanity.fetch(allServices);
  return (
    <main className="mx-auto max-w-5xl p-6 space-y-8">
      <h1 className="text-3xl font-bold">Services</h1>
      <ul className="grid sm:grid-cols-2 gap-4">
        {services.map((s: any) => (
          <li key={s.slug} className="border rounded-xl p-4">
            <a
              href={`/services/${s.slug}`}
              className="text-lg font-semibold hover:underline"
            >
              {s.title}
            </a>
            <p className="opacity-80">{s.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
