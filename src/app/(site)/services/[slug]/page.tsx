import { sanity } from '@/lib/sanity.client';
import { serviceBySlug, allServices } from '@/lib/queries';
export const revalidate = 60;

export async function generateStaticParams() {
  //   const services = await sanity.fetch(allServices);
  //   return services.map((s: any) => ({ slug: s.slug }));
  // }

  // export default async function ServicePage({
  //   params,
  // }: {
  //   params: { slug: string };
  // }) {
  //   const data = await sanity.fetch(serviceBySlug, { slug: params.slug });
  //   if (!data) return null;
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-4">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      {/* render Portable Text later; for now, simple placeholder */}
      <article className="prose prose-invert">
        {/* TODO: PortableText component */}
      </article>
    </main>
  );
}
