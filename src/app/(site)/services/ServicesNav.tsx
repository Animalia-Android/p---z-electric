// src/app/(site)/services/ServicesNav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Item = { title: string; slug: string };

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export default function ServicesNav({ items }: { items: Item[] }) {
  const pathname = usePathname();

  return (
    <nav className="rounded-xl border border-white/10 bg-white/5 p-2">
      <ul className="space-y-1">
        {items.map((i) => {
          const href = `/services/${i.slug}`;
          const active = pathname === href;
          return (
            <li key={i.slug}>
              <Link
                href={href}
                className={cx(
                  'block rounded-md px-3 py-2 text-sm transition',
                  active ?
                    'bg-brand-500 text-black font-semibold'
                  : 'hover:bg-white/10'
                )}
              >
                {i.title}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-2 border-t border-white/10 pt-2">
        <Link
          href="/services"
          className="block px-3 py-1 text-xs text-yellow-300 hover:underline"
        >
          View all services →
        </Link>
      </div>
    </nav>
  );
}
