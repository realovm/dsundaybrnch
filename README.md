# D SUNDAY BRNCH — Website

Premium, cinematic marketing + reservations site for D SUNDAY BRNCH, built with
Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, GSAP, and
Lenis smooth scroll.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## What's implemented (Phase 1–4)

- **Design system**: brand palette (`--brnch-orange`, `--brnch-espresso`,
  `--brnch-cream`, `--brnch-paper`), type scale, `@font-face` slots for Codec
  Pro & Amoresa with graceful fallbacks — see `app/globals.css`.
- **Layout**: scroll-aware nav with mobile menu, footer with newsletter form
  and socials, Lenis smooth scroll wired to GSAP's ticker.
- **Signature interaction**: the rotating "seal" (`components/SunSeal.tsx`) —
  a circular badge reading the 1st/3rd Sunday cadence that doubles as the
  hero's single Explore CTA.
- **Pages**: Home, About, Upcoming Parties, Reservations, Lookbook, POVs,
  FAQs, plus Privacy/Terms placeholders.
- **Animations**: GSAP entrance timeline on the hero, Framer Motion
  scroll-reveals (`components/Reveal.tsx`) throughout every page, accordion
  and lightbox transitions.
- **Backend**:
  - `POST /api/newsletter` — validates + stores subscriber emails
    (`data/subscribers.json` by default — swap for a real DB in
    `lib/subscribers.ts` without touching the API route).
  - `GET /api/admin/subscribers` (`?format=csv` for export) — token-protected
    via `ADMIN_TOKEN`.
  - `POST /api/reservations` — validates input and calls the modular
    Pevent.ng client in `lib/pevent.ts`. Until `PEVENT_API_BASE_URL` and
    `PEVENT_API_KEY` are set, it returns a clear "not configured" error
    instead of silently failing — see `.env.example`.

## Assets you need to drop in

The site is fully wired to reference these paths — add the files and
everything lights up with no code changes:

| Path                                   | What                                   |
|-----------------------------------------|-----------------------------------------|
| `public/fonts/CodecPro-Regular.woff2`    | Codec Pro Regular                      |
| `public/fonts/CodecPro-Bold.woff2`       | Codec Pro Bold                         |
| `public/fonts/Amoresa.woff2`             | Amoresa                                |
| `public/videos/hero-loop.mp4`           | Hero background loop                   |
| `public/images/hero-poster.jpg`         | Hero video poster (first frame)        |
| `public/images/events/*.jpg`            | Event flyer images (see `lib/content.ts`) |
| `public/images/featured/1-4.jpg`         | Home "Featured Visuals" strip          |
| `public/images/lookbook/1-12.jpg`        | Lookbook gallery                       |
| `public/videos/povs/1-8.mp4` + posters   | POVs page clips                        |

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `PEVENT_API_BASE_URL`, `PEVENT_API_KEY` — Pevent.ng ticketing credentials
- `ADMIN_TOKEN` — bearer token to unlock `/api/admin/subscribers`

## Content

All event data, FAQs, socials, and nav links live in `lib/content.ts` — edit
that file to add/change events without touching any page.

## Next phases (not yet built)

- CMS integration for events/lookbook/POVs (currently static arrays in
  `lib/content.ts`, designed to swap in cleanly).
- Swap `lib/subscribers.ts` for a real database.
- Real Pevent.ng field mapping once API docs/credentials are issued
  (`buildReservationPayload` in `lib/pevent.ts` is the only place to touch).
- Page-transition choreography between routes (currently each page has its
  own scroll-reveal entrance; a shared route-transition layer can be added
  once the page set is finalized).
# dsundaybrnch
