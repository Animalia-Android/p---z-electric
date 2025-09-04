# P\&Z Electric Website

A modern, fast, owner-editable website for **P\&Z Electric** built with **Next.js (App Router) + TypeScript + Tailwind + Sanity (Headless CMS) + Vercel**.

---

## ✨ Features

- **Lightning fast** pages with Next.js + ISR
- **Owner-friendly editing** via Sanity Studio at `/studio`
- **Structured content models** for Services, Projects, FAQs, Team, Posts
- **Mobile‑first UI** with Tailwind (v4‑ready, zero‑config by default)
- **SEO ready**: `next-seo`, `next-sitemap`, JSON‑LD for LocalBusiness
- **Contact/Estimate form** (server action or API route) with email delivery
- **Flexible architecture** to add features (careers, testimonials, dashboards)

---

## 🧱 Tech Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS (no custom config required to start)
- **CMS:** Sanity (Headless) with GROQ queries
- **Deployment:** Vercel
- **SEO:** `next-seo`, `next-sitemap`
- **Email (optional):** Resend (or Formspree)

---

## 🚀 Quick Start

### 1) Install & run

```bash
# Clone your repo or create the app
npx create-next-app@latest pz-electric --ts --eslint --tailwind --app --src --import-alias "@/*"
cd pz-electric

# Install helpers
npm i next-sitemap next-seo @sanity/client @sanity/image-url groq next-sanity zod
npm i -D @sanity/cli

# Initialize Sanity (choose “create new project”, dataset: production)
npx sanity init --dataset production --typescript --template clean

# Dev server
npm run dev
```

Now visit:

- `http://localhost:3000/` → site
- `http://localhost:3000/studio` → Sanity Studio

> If you still see the Next default page, remove `app/page.tsx` and ensure your Home is at `app/(site)/page.tsx`.

---

## 🔐 Environment Variables

Create `.env.local` in the project root:

```
# Sanity
SANITY_PROJECT_ID=xxxxxxxx
SANITY_DATASET=production
SANITY_API_VERSION=2025-01-01
# Optional if you need token-based reads (usually not required for public content)
SANITY_READ_TOKEN=xxxxxxxx

# Email (optional)
RESEND_API_KEY=xxxxxxxx

# Site
NEXT_PUBLIC_SITE_URL=https://www.pz-electric.com
```

> In Sanity Project Settings, add CORS origins for `http://localhost:3000` and your production domain.

---

## 🗂️ Project Structure (key paths)

```
app/
  (site)/
    layout.tsx           # Navbar/Footer wrapper for public site
    page.tsx             # Home
    services/
      page.tsx           # Services index
      [slug]/page.tsx    # Service details (dynamic)
  studio/
    layout.tsx           # Bare layout for Studio
    [[...index]]/page.tsx# Sanity Studio mount
components/
  Navbar.tsx, Footer.tsx, ServiceCard.tsx, ...
lib/
  sanity.client.ts       # configured Sanity client
  queries.ts             # GROQ queries
sanity/
  schema.ts              # root schema export
  schemas/
    service.ts, project.ts, faq.ts, teamMember.ts, post.ts, siteSettings.ts
```

---

## 🧾 Content Model (Sanity)

Define these document types (adjust as needed):

- **service** — `title`, `slug`, `summary`, `body`, `icon`
- **project** — `title`, `slug`, `clientType`, `location`, `year`, `scope[]`, `hero`, `gallery[]`, `highlights[]`
- **faq** — `question`, `answer`, `category`
- **teamMember** — `name`, `role`, `headshot`, `bio`, `credentials[]`
- **post** — `title`, `slug`, `excerpt`, `body`, `cover`, `tags[]`
- **siteSettings** — `logo`, `colors`, `phone`, `email`, `address`, `emergencyBanner{enabled,text}`

> Studio lives at `/studio`. Editors can create/publish items. The website fetches published content via GROQ.

---

## 🔎 Data Fetching (GROQ + ISR)

Example queries in `lib/queries.ts`:

```ts
export const allServices = `*[_type=="service"]{title, "slug": slug.current, summary} | order(title asc)`;
export const serviceBySlug = `*[_type=="service" && slug.current==$slug][0]{title, body}`;
```

Use them in server components (with incremental static regeneration):

```ts
export const revalidate = 60; // seconds
```

(Optional) For instant updates on publish, add a Sanity **webhook** to call a Next route that revalidates paths/tags.

---

## 🧭 Routing & Layouts

- Public pages live under `app/(site)/` so they share the site chrome in `(site)/layout.tsx`.
- Dynamic routes use folder names like `[slug]` → `app/(site)/services/[slug]/page.tsx`.
- Sanity Studio is isolated at `app/studio/` with its own minimal layout (no Navbar/Footer).

---

## 🧩 UI & Styling

- Tailwind is ready to use in `app/globals.css`.
- Prefer utility classes for speed and consistency.
- Add brand colors via CSS variables or Tailwind theme extension (optional).

---

## 📈 SEO

- Configure defaults in a `SEO` helper or via `next-seo`.
- Generate a sitemap with `next-sitemap` (see simple config below).
- Add JSON‑LD for LocalBusiness on the Home page.

`next-sitemap.config.js` (example):

```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
};
```

LocalBusiness JSON‑LD (example):

```tsx
<script type="application/ld+json" suppressHydrationWarning>
  {JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: 'P&Z Electric',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    telephone: '+1-XXX-XXX-XXXX',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brooklyn',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    areaServed: ['Brooklyn', 'Queens', 'Manhattan', 'Bronx', 'Staten Island'],
  })}
</script>
```

---

## ✉️ Contact/Estimate Form (simple)

- Use a **Server Action** or API Route to handle form submission.
- Validate with **Zod**.
- Send email via **Resend** or store to DB/Sheet.

> Add basic spam protection (honeypot or Turnstile/Recaptcha) before going live.

---

## 📦 Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "postbuild": "next-sitemap"
  }
}
```

---

## ☁️ Deploy (Vercel)

1. Push to GitHub.
2. Import the repo on Vercel.
3. Add the **Environment Variables** (above) in Vercel → Settings → Environment Variables.
4. Deploy.
5. (Optional) Configure a **Sanity webhook** to hit your revalidate route for instant updates.

---

## 🔐 Security & Compliance

- Keep secrets in `.env.local` (never commit).
- Turn on Vercel Environment Encryption and limited team access.
- Rate-limit contact form and add CAPTCHA.
- Display license/insurance details; keep company info current.

---

## 🧪 Accessibility & Performance

- Use semantic headings and labels; ensure color contrast.
- Test keyboard navigation.
- Aim for CWV green (LCP/TBT/CLS) on mobile.

---

## 🗺️ Roadmap

- Projects gallery with filters
- Testimonials slider
- Careers page + resume upload
- Borough/Neighborhood service‑area pages
- On‑demand ISR via webhooks
- Analytics (Plausible or Vercel Web Analytics)

---

## 🛠️ Troubleshooting

- **Home page isn’t showing:** delete `app/page.tsx`; ensure `app/(site)/page.tsx` exists.
- **Dynamic route 404:** folder must be `app/(site)/services/[slug]/page.tsx` (directory named `[slug]`, not a single file).
- **Sanity CORS error:** add `http://localhost:3000` and production domain to Sanity CORS origins.
- **Images blocked:** add `cdn.sanity.io` to `next.config.js` `images.remotePatterns`.
- **Studio has site Navbar:** put Studio under `app/studio/` with its own `layout.tsx` (no Navbar).

`next.config.js` images example:

```js
module.exports = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },
};
```

---

## 📄 License

MIT (or company‑internal). Update as appropriate.

---

## 👤 Maintainer

- **Tech Lead:** Douglas Sellers (@Animalia‑Android)
- **Company:** P\&Z Electric

> For content updates, use **/studio**. For code changes, open a PR and deploy via Vercel Preview.
