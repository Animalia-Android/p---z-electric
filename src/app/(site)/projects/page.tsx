import ProjectCard from '@/components/ProjectsCard';
// import { sanity } from '@/lib/sanity/client';
// import { allProjects } from '@/lib/sanity/queries';

export const revalidate = 60;

export type Project = {
  slug: string;
  title: string;
  description?: string;
  imageUrl?: string;
  category?: 'Residential' | 'Commercial';
  location?: string;
  year?: number;
};

export const MOCK_PROJECTS: Project[] = [
  {
    slug: 'brownstone-panel-upgrade',
    title: 'Brooklyn Brownstone — 200A Service Upgrade',
    description:
      'Full panel replacement, load calc, AFCI/GFCI, clean labeling.',
    category: 'Residential',
    location: 'Park Slope, Brooklyn',
    year: 2025,
    imageUrl: '/manhattan-night-skyline.jpeg', // swap with /public/projects/...
  },
  {
    slug: 'soho-retail-lighting',
    title: 'SoHo Retail — Architectural Lighting',
    description: 'Track + recessed mix, dimming scenes, sensor-based savings.',
    category: 'Commercial',
    location: 'SoHo, Manhattan',
    year: 2025,
    imageUrl: '/manhattan-night-skyline.jpeg',
  },
  {
    slug: 'ev-garage-level2',
    title: 'Multi-Bay EV Level-2 Chargers',
    description: 'Load management, dedicated circuits, clear signage.',
    category: 'Commercial',
    location: 'Long Island City, Queens',
    year: 2024,
    imageUrl: '/manhattan-night-skyline.jpeg',
  },
  {
    slug: 'townhouse-lighting',
    title: 'Townhouse Lighting Refresh',
    description: 'Warm architectural layers with smart dimmers.',
    category: 'Residential',
    location: 'Upper West Side, Manhattan',
    year: 2024,
    imageUrl: '/manhattan-night-skyline.jpeg',
  },
  {
    slug: 'restaurant-buildout',
    title: 'Restaurant Build-out — Power & Egress',
    description: 'Dedicated kitchen circuits, emergency/egress lighting.',
    category: 'Commercial',
    location: 'Williamsburg, Brooklyn',
    year: 2024,
    imageUrl: '/manhattan-night-skyline.jpeg',
  },
  {
    slug: 'office-low-voltage',
    title: 'Office Low-Voltage — Data & CCTV',
    description: 'Cat6a runs, racks, PoE budgeting, camera coverage.',
    category: 'Commercial',
    location: 'Downtown Brooklyn',
    year: 2025,
    imageUrl: '/manhattan-night-skyline.jpeg',
  },
];

export default async function ProjectsPage() {
  // const projects = (await sanity.fetch(allProjects)) || [];
  const projects = MOCK_PROJECTS;

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
        {projects.map(
          (p: {
            slug: string;
            title: string;
            description?: string; // ← optional
            imageUrl?: string; // ← optional
          }) => (
            <ProjectCard key={p.slug} p={p} />
          )
        )}
      </div>
    </section>
  );
}
