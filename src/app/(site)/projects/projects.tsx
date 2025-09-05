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
