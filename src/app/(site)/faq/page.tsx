import FaqList, { FaqItem } from './FaqList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electrical FAQs | P&Z Electric',
  description:
    'Common electrical questions from NYC homeowners & businesses—safety, GFCI/AFCI, service sizes, outlets, kitchens, and more.',
};

const ITEMS: FaqItem[] = [
  {
    id: 'when-to-call',
    q: 'When is it time to call an electrician?',
    a: (
      <>
        <p>Call a licensed electrician if you notice any of the following:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Breakers/fuses trip or reset often</li>
          <li>Lights dim when large appliances start (e.g., A/C)</li>
          <li>Flickering lights or burning/electrical smells</li>
          <li>Overloaded outlets or multi-plug strips everywhere</li>
          <li>Using 3-to-2 prong adapters or extension cords long-term</li>
        </ul>
      </>
    ),
    category: 'Safety',
  },
  {
    id: 'service-size',
    q: 'What size service should I install in my home?',
    a: (
      <>
        <p>
          Many homes meet the minimum at <strong>100A</strong>, but modern loads
          (A/C, EV chargers, electric ranges/heat) often justify a{' '}
          <strong>200A</strong> upgrade for headroom and future additions. This
          typically requires utility and main panel work—hire a licensed
          electrical contractor.
        </p>
      </>
    ),
    category: 'Planning',
  },
  {
    id: 'where-gfci',
    q: 'Where do you put GFCIs?',
    a: (
      <>
        <p>
          GFCI protection is required anywhere electricity and water may meet:
          bathrooms, garages, kitchens (countertop outlets), basements, laundry,
          outdoors, pools/spas, and utility rooms. You can use GFCI outlets or a
          GFCI breaker to protect the whole circuit.
        </p>
        <p className="text-sm text-white/70">
          Pro tip: avoid putting lighting on GFCI-protected circuits so a trip
          doesn’t leave you in the dark. Critical loads (fridge/freezer/sump)
          may be on dedicated non-GFCI circuits per code/jurisdiction.
        </p>
      </>
    ),
    category: 'Code & Devices',
  },
  {
    id: 'diy',
    q: 'How much should I attempt on my own?',
    a: (
      <>
        <p>
          DIY electrical work is risky—miswiring can damage equipment and cause
          shock or fire. Insurance may not cover losses if work wasn’t performed
          by a licensed contractor. When in doubt, call a pro.
        </p>
      </>
    ),
    category: 'Safety',
  },
  {
    id: 'outlet-spacing',
    q: 'How many convenience outlets in each room?',
    a: (
      <>
        <p>
          As a rule of thumb, outlets should be placed so no point along the
          floor line is more than <strong>6 ft</strong> from a receptacle (to
          reduce extension cord use). Typical heights: outlets ~18″ and switches
          ~48″ above the floor.
        </p>
      </>
    ),
    category: 'Code & Devices',
  },
  {
    id: 'kitchen-outlets',
    q: 'How should outlets be installed in a kitchen?',
    a: (
      <>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Countertop outlets on at least two 20A small-appliance circuits
          </li>
          <li>GFCI protection within 6′ of a sink and for countertop use</li>
          <li>Fixed appliances (fridge, DW, range) on dedicated circuits</li>
          <li>
            Island/peninsula outlets above or within 12″ below the counter
          </li>
          <li>No face-up receptacles on countertops</li>
        </ul>
      </>
    ),
    category: 'Kitchens',
  },
  {
    id: 'what-is-afci',
    q: 'What is an AFCI?',
    a: (
      <>
        <p>
          An <strong>AFCI (Arc-Fault Circuit Interrupter)</strong> detects
          dangerous arcing and trips faster than a standard breaker to reduce
          fire risk. It’s different from a GFCI (which protects people from
          shock). Many areas require AFCI protection on bedroom and other living
          space circuits.
        </p>
      </>
    ),
    category: 'Code & Devices',
  },
];

export default function FaqPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Electrical FAQs (NYC)</h1>
        <p className="text-white/80">
          These are common questions from our clients. Every building is
          different— call us at{' '}
          <a
            href="tel:+17189246702"
            className="text-accent-400 underline hover:no-underline"
          >
            (718) 924-6702
          </a>{' '}
          and we’ll recommend the right options.
        </p>
      </header>

      <FaqList items={ITEMS} />

      <aside className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-sm">
        <p className="text-white/85">
          <strong>Note:</strong> Codes change and NYC has local amendments.
          Always follow the latest NYC Electrical Code and manufacturer
          instructions.
        </p>
      </aside>
    </section>
  );
}
