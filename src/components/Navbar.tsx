import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
        <Link href="/" className="text-xl font-bold">
          P&Z Electric
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-lg bg-yellow-400 text-black px-3 py-1.5 font-semibold"
          >
            Estimate
          </Link>
        </div>
      </nav>
    </header>
  );
}
