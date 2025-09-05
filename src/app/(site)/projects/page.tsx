import ProjectCard from '@/components/ProjectsCard';
import { sanity } from '@/lib/sanity/client';
import { allProjects } from '@/lib/sanity/queries';

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = (await sanity.fetch(allProjects)) || [];

  if (!projects?.length) {
    return (
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-white/70">
          No projects published yet. Add some in <code>/studio</code>.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <header className="flex items-end justify-between gap-4">
        <h1 className="text-3xl font-bold">Projects</h1>
        {/* simple filter hint (extend later) */}
        <div className="text-sm text-white/60">
          Residential &bull; Commercial
        </div>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p: any) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  );
}
