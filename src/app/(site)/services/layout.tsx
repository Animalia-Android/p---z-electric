// src/app/(site)/services/layout.tsx
// import Link from 'next/link';
import { sanity } from '@/lib/sanity/client';
import ServicesNav from './ServicesNav';

export const revalidate = 60;

export default async function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items: { title: string; slug: { current: string } }[] =
    await sanity.fetch(`*[_type=="service"]|order(title asc){title, slug}`);

  const navItems = items.map((s) => ({ title: s.title, slug: s.slug.current }));

  return (
    <div className="grid gap-6 lg:grid-cols-[18rem,1fr]">
      <aside className="lg:sticky lg:top-20 h-fit">
        <ServicesNav items={navItems} />
      </aside>
      <div>{children}</div>
    </div>
  );
}
