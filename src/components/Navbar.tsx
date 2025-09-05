import Image from 'next/image';
import Link from 'next/link';
import DetailsAutoClose from './DetailsAutoClose';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3"
        id="site-nav"
      >
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/pz-electric-logo.png"
            alt="P&Z Electric Logo"
            width={150}
            height={150}
            // className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        <div className="ml-auto hidden items-center gap-1 lg:flex">
          {/* Services dropdown */}
          <details className="group relative">
            <summary className="cursor-pointer list-none rounded-md px-3 py-2 hover:bg-white/10">
              <span className="inline-flex items-center gap-1">
                Services
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  className="opacity-70 group-open:rotate-180 transition"
                >
                  <path fill="currentColor" d="M7 10l5 5 5-5z" />
                </svg>
              </span>
            </summary>
            <div className="absolute left-0 mt-2 w-72 rounded-xl border border-white/10 bg-graphite-800 p-2 shadow-lg">
              <ul className="text-sm">
                <li>
                  <Link
                    className="block rounded-md px-3 py-2 hover:bg-white/10"
                    href="/services/panel-upgrades"
                  >
                    Panel & Service Upgrades
                  </Link>
                </li>
                <li>
                  <Link
                    className="block rounded-md px-3 py-2 hover:bg-white/10"
                    href="/services/lighting"
                  >
                    Lighting Design & Install
                  </Link>
                </li>
                <li>
                  <Link
                    className="block rounded-md px-3 py-2 hover:bg-white/10"
                    href="/services/ev-chargers"
                  >
                    EV Charger Installs
                  </Link>
                </li>
                <li>
                  <Link
                    className="block rounded-md px-3 py-2 hover:bg-white/10"
                    href="/services/troubleshooting"
                  >
                    Troubleshooting & Repairs
                  </Link>
                </li>
                <li>
                  <Link
                    className="block rounded-md px-3 py-2 hover:bg-white/10"
                    href="/services/commercial-buildouts"
                  >
                    Commercial Build-outs
                  </Link>
                </li>
                <li>
                  <Link
                    className="block rounded-md px-3 py-2 hover:bg-white/10"
                    href="/services/low-voltage"
                  >
                    Low-Voltage (Data/CCTV/Access)
                  </Link>
                </li>
              </ul>
              <div className="mt-2 border-t border-white/10 pt-2">
                <Link
                  href="/services"
                  className="block px-3 py-1 text-xs text-yellow-300 hover:underline"
                >
                  View all services →
                </Link>
              </div>
            </div>
          </details>

          {/* Projects */}
          <Link
            href="/projects"
            className="rounded-md px-3 py-2 hover:bg-white/10"
          >
            Projects
          </Link>

          {/* More dropdown (About + FAQ) */}
          <details className="group relative">
            <summary className="cursor-pointer list-none rounded-md px-3 py-2 hover:bg-white/10">
              <span className="inline-flex items-center gap-1">
                More
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  className="opacity-70 group-open:rotate-180 transition"
                >
                  <path fill="currentColor" d="M7 10l5 5 5-5z" />
                </svg>
              </span>
            </summary>
            <div className="absolute left-0 mt-2 w-56 rounded-xl border border-white/10 bg-graphite-800 p-2 shadow-lg">
              <Link
                href="/about"
                className="block rounded-md px-3 py-2 hover:bg-white/10"
              >
                About
              </Link>
              <Link
                href="/faq"
                className="block rounded-md px-3 py-2 hover:bg-white/10"
              >
                FAQ
              </Link>
            </div>
          </details>

          {/* CTA */}
          <Link
            href="/contact"
            className="ml-1 rounded-lg border-2 border-accent-500 bg-accent-500/90 px-3 py-1.5 font-semibold text-black hover:bg-accent-500"
          >
            Request an Estimate
          </Link>
        </div>

        {/* Mobile: hamburger */}
        <details className="ml-auto lg:hidden">
          <summary
            className="cursor-pointer list-none rounded-md p-2 hover:bg-white/10"
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"
              />
            </svg>
          </summary>
          <div className="absolute left-0 right-0 top-full border-b border-white/10 bg-neutral-950/95">
            <div className="mx-auto max-w-6xl p-4 space-y-1">
              <details>
                <summary className="cursor-pointer list-none rounded-md px-3 py-2 hover:bg-white/10">
                  Services
                </summary>
                <ul className="mb-2 pl-3 text-sm">
                  <li>
                    <Link
                      className="block rounded-md px-3 py-2 hover:bg-white/10"
                      href="/services/panel-upgrades"
                    >
                      Panel & Service Upgrades
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block rounded-md px-3 py-2 hover:bg-white/10"
                      href="/services/lighting"
                    >
                      Lighting Design & Install
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block rounded-md px-3 py-2 hover:bg-white/10"
                      href="/services/ev-chargers"
                    >
                      EV Charger Installs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block rounded-md px-3 py-2 hover:bg-white/10"
                      href="/services/troubleshooting"
                    >
                      Troubleshooting & Repairs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block rounded-md px-3 py-2 hover:bg-white/10"
                      href="/services/commercial-buildouts"
                    >
                      Commercial Build-outs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block rounded-md px-3 py-2 hover:bg-white/10"
                      href="/services/low-voltage"
                    >
                      Low-Voltage (Data/CCTV/Access)
                    </Link>
                  </li>
                </ul>
              </details>

              <Link
                href="/projects"
                className="block rounded-md px-3 py-2 hover:bg-white/10"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="block rounded-md px-3 py-2 hover:bg-white/10"
              >
                About
              </Link>
              <Link
                href="/faq"
                className="block rounded-md px-3 py-2 hover:bg-white/10"
              >
                FAQ
              </Link>

              <Link
                href="/contact"
                className="mt-2 block rounded-lg border-2 border-accent-500 bg-accent-500/90 px-3 py-2 text-center font-semibold text-black hover:bg-accent-500"
              >
                Request an Estimate
              </Link>
            </div>
          </div>
        </details>
        <DetailsAutoClose rootId="site-nav" />
      </nav>
    </header>
  );
}
