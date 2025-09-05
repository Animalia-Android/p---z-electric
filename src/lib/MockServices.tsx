// lib/MockServices.ts

export type MockService = {
  slug: string;
  title: string;
  summary?: string;
  bullets?: string[]; // keep for compatibility
  inclusions?: string[]; // page prefers this
  quickFacts?: {
    timeline?: string;
    permits?: string;
    warranty?: string;
    emergency?: string;
  };
  process?: { step: string; blurb?: string }[];
  faq?: { q: string; a: string }[];
  body?: string;
};

export const MOCK_SERVICES: MockService[] = [
  {
    slug: 'panel-upgrades',
    title: 'Panel & Service Upgrades',
    summary:
      '100–200A upgrades, meter swaps, labeling, clean panel organization.',
    bullets: [
      'Load calculations & permit guidance',
      'Utility coordination & inspection support',
      'Arc-fault/GFCI protection as required',
    ],
    inclusions: [
      'Load calculations & permit guidance',
      'Utility coordination & inspection support',
      'Arc-fault/GFCI protection as required',
    ],
    quickFacts: {
      timeline: '~1 day on site (typical)',
      permits: 'DOB permit & inspection required',
      warranty: '1-year workmanship',
      emergency: '24/7 power restoration available',
    },
  },
  {
    slug: 'lighting',
    title: 'Lighting Design & Install',
    summary: 'Recessed, track, high-bay, sensors, and dimming.',
    bullets: [
      'Architectural lighting layouts',
      'Energy-efficient controls',
      'Interior, exterior, and landscape lighting',
    ],
    inclusions: [
      'Architectural lighting layouts',
      'Energy-efficient controls',
      'Interior, exterior, and landscape lighting',
    ],
    quickFacts: {
      timeline: '1–2 days for typical room/zone',
      permits: 'Varies; required for new circuits',
      warranty: '1-year workmanship',
      emergency: 'Rapid troubleshooting available',
    },
  },
  {
    slug: 'ev-chargers',
    title: 'EV Charger Installs',
    summary: 'Level 2 chargers for homes & garages with safe load management.',
    bullets: [
      'Panel capacity checks & upgrades',
      'Code-compliant circuit runs',
      'Permits & inspection handling',
    ],
    inclusions: [
      'Panel capacity checks & upgrades',
      'Code-compliant circuit runs',
      'Permits & inspection handling',
    ],
    quickFacts: {
      timeline: 'Half–1 day after approval',
      permits: 'Permit/inspection typically required',
      warranty: '1-year workmanship',
      emergency: 'After-hours support available',
    },
  },
  {
    slug: 'troubleshooting',
    title: 'Troubleshooting & Repairs',
    summary: 'Fast diagnostics for tripping breakers, dead outlets, hot spots.',
    bullets: [
      'Thermal & continuity testing',
      'Grounding/bonding verification',
      'Same-day repairs when possible',
    ],
    inclusions: [
      'Thermal & continuity testing',
      'Grounding/bonding verification',
      'Same-day repairs when possible',
    ],
    quickFacts: {
      timeline: 'Same-day assessment',
      permits: 'Rarely; depends on scope',
      warranty: '1-year workmanship on repairs',
      emergency: '24/7 emergency calls',
    },
  },
  {
    slug: 'commercial-buildouts',
    title: 'Commercial Build-outs',
    summary: 'Restaurants, retail, and office power & lighting.',
    bullets: [
      'Distribution & dedicated circuits',
      'Emergency/egress lighting',
      'Low-voltage coordination',
    ],
    inclusions: [
      'Distribution & dedicated circuits',
      'Emergency/egress lighting',
      'Low-voltage coordination',
    ],
    quickFacts: {
      timeline: 'Varies by scope',
      permits: 'DOB permits & inspections required',
      warranty: '1-year workmanship',
      emergency: 'Off-hours scheduling available',
    },
  },
  {
    slug: 'low-voltage',
    title: 'Low-Voltage (Data/CCTV/Access)',
    summary: 'Structured cabling, cameras, access control, intercoms.',
    bullets: [
      'Cat6/Cat6a runs & testing',
      'PoE devices & power budgeting',
      'Rack terminations & labeling',
    ],
    inclusions: [
      'Cat6/Cat6a runs & testing',
      'PoE devices & power budgeting',
      'Rack terminations & labeling',
    ],
    quickFacts: {
      timeline: '1–2 days for typical small office/home',
      permits: 'Usually not; depends on building rules',
      warranty: '1-year workmanship',
      emergency: 'After-hours cutover available',
    },
  },
  {
    slug: 'residential-and-commercial-wiring',
    title: 'Residential & Commercial Wiring',
    summary: 'Upgrade and repair for new houses and remodels.',
    bullets: [
      'Load calculations & permit guidance',
      'Utility coordination & inspection support',
      'Arc-fault/GFCI protection as required',
    ],
    inclusions: [
      'Load calculations & permit guidance',
      'Utility coordination & inspection support',
      'Arc-fault/GFCI protection as required',
    ],
    quickFacts: {
      timeline: 'Depends on project scope',
      permits: 'DOB permit & inspection required',
      warranty: '1-year workmanship',
      emergency: 'After-hours cutover available',
    },
  },
  {
    slug: 'data-network-and-telephone-installations',
    title: 'Data Network & Telephone Installations',
    summary:
      'Wireless or wired computer circuits and telephony lines for home or office.',
    bullets: [
      'Load calculations & permit guidance',
      'Utility coordination & inspection support',
      'Arc-fault/GFCI protection as required',
    ],
    inclusions: [
      'Load calculations & permit guidance',
      'Utility coordination & inspection support',
      'Arc-fault/GFCI protection as required',
    ],
    quickFacts: {
      timeline: 'Depends on project scope',
      permits: 'DOB permit & inspection required',
      warranty: '1-year workmanship',
      emergency: 'After-hours cutover available',
    },
  },
  {
    slug: 'exterior-lighting-and-power-supply',
    title: 'Exterior Lighting & Power Supply',
    summary: 'Underground circuits, concealed mood lighting & sensors.',
    bullets: [
      'Load calculations & permit guidance',
      'Utility coordination & inspection support',
      'Arc-fault/GFCI protection as required',
    ],
    inclusions: [
      'Load calculations & permit guidance',
      'Utility coordination & inspection support',
      'Arc-fault/GFCI protection as required',
    ],
    quickFacts: {
      timeline: 'Depends on project scope',
      permits: 'DOB permit & inspection required',
      warranty: '1-year workmanship',
      emergency: 'After-hours cutover available',
    },
  },
  {
    slug: 'appliance-and-lighting-installations',
    title: 'Appliance & Lighting Installations',
    summary:
      'Electrical circuit installations to latest electrical code requirements.',
    bullets: [
      'Load calculations & permit guidance',
      'Utility coordination & inspection support',
      'Arc-fault/GFCI protection as required',
    ],
    inclusions: [
      'Load calculations & permit guidance',
      'Utility coordination & inspection support',
      'Arc-fault/GFCI protection as required',
    ],
    quickFacts: {
      timeline: 'Depends on project scope',
      permits: 'DOB permit & inspection required',
      warranty: '1-year workmanship',
      emergency: 'After-hours cutover available',
    },
  },
  {
    slug: 'power-meter-and-electrical-panel-service',
    title: 'Power Meter & Electrical Panel Service',
    summary: 'Service upgrades and replacements for safety and reliability.',
    bullets: [
      'Load calculations & permit guidance',
      'Utility coordination & inspection support',
      'Arc-fault/GFCI protection as required',
    ],
    inclusions: [
      'Load calculations & permit guidance',
      'Utility coordination & inspection support',
      'Arc-fault/GFCI protection as required',
    ],
    quickFacts: {
      timeline: 'Depends on project scope',
      permits: 'DOB permit & inspection required',
      warranty: '1-year workmanship',
      emergency: 'After-hours cutover available',
    },
  },
  {
    slug: 'audio-visual-and-home-automation',
    title: 'Audio-Visual & Home Automation',
    summary: 'Concealed speaker and cable wiring for multi-room systems.',
    bullets: [
      'Load calculations & permit guidance',
      'Utility coordination & inspection support',
      'Arc-fault/GFCI protection as required',
    ],
    inclusions: [
      'Load calculations & permit guidance',
      'Utility coordination & inspection support',
      'Arc-fault/GFCI protection as required',
    ],
    quickFacts: {
      timeline: 'Depends on project scope',
      permits: 'DOB permit & inspection required',
      warranty: '1-year workmanship',
      emergency: 'After-hours cutover available',
    },
  },
  {
    slug: 'architectural-lighting-design',
    title: 'Architectural Lighting Design',
    summary: 'Installation of fixtures to meet any mood or highlight decor.',
    bullets: [
      'Load calculations & permit guidance',
      'Utility coordination & inspection support',
      'Arc-fault/GFCI protection as required',
    ],
    inclusions: [
      'Load calculations & permit guidance',
      'Utility coordination & inspection support',
      'Arc-fault/GFCI protection as required',
    ],
    quickFacts: {
      timeline: 'Depends on project scope',
      permits: 'DOB permit & inspection required',
      warranty: '1-year workmanship',
      emergency: 'After-hours cutover available',
    },
  },
  {
    slug: 'bathroom-and-spa-wiring',
    title: 'Bathroom & Spa Wiring',
    summary:
      'Code-compliant circuit installation, shock protection, and GFI circuits.',
    bullets: [
      'Load calculations & permit guidance',
      'Utility coordination & inspection support',
      'Arc-fault/GFCI protection as required',
    ],
    inclusions: [
      'Load calculations & permit guidance',
      'Utility coordination & inspection support',
      'Arc-fault/GFCI protection as required',
    ],
    quickFacts: {
      timeline: 'Depends on project scope',
      permits: 'DOB permit & inspection required',
      warranty: '1-year workmanship',
      emergency: 'After-hours cutover available',
    },
  },
];
