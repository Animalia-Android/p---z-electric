import Link from 'next/link';

export default function BackButton({
  destination = '/services',
}: {
  destination?: string;
}) {
  return (
    <div className="mt-4">
      <Link
        href={`/${destination}`}
        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/90 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        aria-label="Back to Services"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M15.5 19l-7-7 7-7 1.4 1.4L10.3 12l6.6 6.6z"
          />
        </svg>
        <span className="hidden sm:inline">Back to Services</span>
        <span className="sm:hidden">Back</span>
      </Link>
    </div>
  );
}
