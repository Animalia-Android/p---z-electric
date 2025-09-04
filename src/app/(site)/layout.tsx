import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// app/(site)/layout.tsx
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {/* Page content */}
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      <Footer />
    </>
  );
}
