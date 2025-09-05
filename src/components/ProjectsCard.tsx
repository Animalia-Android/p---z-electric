import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/image';

type Project = {
  title: string;
  slug: string;
  clientType?: string;
  location?: string;
  year?: number;
  hero?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
};

export default function ProjectCard({ p }: { p: Project }) {
  const href = `/projects/${p.slug}`;
  return (
    <Link
      href={href}
      className="group rounded-xl border border-white/10 overflow-hidden hover:border-brand-500/40"
    >
      <div className="relative aspect-[16/10] bg-graphite-800">
        {p.hero ?
          <Image
            src={urlFor(p.hero).width(800).height(500).fit('crop').url()}
            alt={p.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(min-width:1024px) 33vw, 100vw"
          />
        : null}
      </div>
      <div className="p-4">
        <div className="text-lg font-semibold">{p.title}</div>
        <div className="mt-1 text-sm text-white/70">
          {p.clientType ?? 'Project'}
          {p.location ? ` • ${p.location}` : ''}
          {p.year ? ` • ${p.year}` : ''}
        </div>
        <span className="mt-2 inline-block text-sm text-yellow-300 group-hover:underline">
          View project →
        </span>
      </div>
    </Link>
  );
}
