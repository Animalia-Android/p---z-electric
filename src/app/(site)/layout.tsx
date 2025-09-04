import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// app/(site)/layout.tsx
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh grid grid-rows-[auto,1fr,auto]">
      <header className="row-start-1">
        <Navbar />
      </header>

      <main className="row-start-2 mx-auto max-w-6xl px-4 py-8">
        {children}
      </main>

      <footer className="row-start-3">
        <Footer />
      </footer>
    </div>
  );
}
