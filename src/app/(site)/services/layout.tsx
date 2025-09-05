export const revalidate = 60;

export default async function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[18rem,1fr]">
      <div>{children}</div>
    </div>
  );
}
