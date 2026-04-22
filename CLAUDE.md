# TexNano Website

Medical AI research lab website for TexNano at Amrita Institute of Medical Sciences, Kochi & Amrita Vishwa Vidyapeetham, Amritapuri.

## Tech Stack

- **Framework:** Astro 5 (static site generation)
- **Styling:** Tailwind CSS 3 with @tailwindcss/typography
- **Icons:** astro-icon (Tabler + Flat Color Icons)
- **Language:** TypeScript
- **Node.js:** >= 18.20.8 (use `nvm use 20`)

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:4321
npm run build        # production build → dist/
npm run preview      # preview production build
npm run check        # run astro, eslint, prettier checks
npm run fix          # auto-fix lint and format issues
```

## Project Structure

```
src/
├── assets/           # images, favicons, styles
├── components/
│   ├── blog/         # blog post components
│   ├── common/       # metadata, analytics, scripts
│   ├── ui/           # Button, Headline, Image, etc.
│   └── widgets/      # Hero, Features, Header, Footer, etc.
├── content/          # content collections config
├── data/post/        # blog posts (MD/MDX)
├── layouts/          # Layout, PageLayout, MarkdownLayout
├── pages/            # file-based routing
├── utils/            # helper functions
├── config.yaml       # site metadata, SEO, blog settings
└── navigation.ts     # header and footer nav links
```

## Key Pages

- `/` — homepage (research projects, team, CTA)
- `/blog` — blog listing
- `/about` — about page
- `/404` — error page
- `/privacy`, `/terms` — legal (markdown)

Removed pages (`/services`, `/pricing`, `/solutions`, `/contact`, `/projects`, `/team`) redirect via `astro.config.ts`.

## Deployment

- **Platform:** Cloudflare Pages
- **URL:** https://texnano.com (production), https://texnano-site.pages.dev (staging)
- **Domain:** Owned by university; CNAME points to `texnano-site.pages.dev`
- Builds trigger on push to `main`

## Configuration

- **Site config:** `src/config.yaml` (title, description, OG, analytics)
- **Navigation:** `src/navigation.ts` (header links, footer links, social)
- **Astro config:** `astro.config.ts` (integrations, redirects, image domains)
- **Tailwind:** `tailwind.config.js` (colors, fonts, animations)
- **Theme colors:** Primary `#0d9488` (teal), Secondary `#0f766e`, Accent `#14b8a6`

## Contact

- **Primary:** gilad.gressel@am.amrita.edu
- **CC:** anshumanswain@am.amrita.edu
