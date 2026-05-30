# Altaf and Sons Website

Professional multi-page website prototype for Altaf and Sons, built with Astro for fast static hosting on Cloudflare Pages.

## Pages

- Home
- About
- Services
- Projects
- Contact

## Local Setup

Install Node.js with npm, then run:

```bash
npm install
npm run dev
```

Build the production site:

```bash
npm run build
```

The static output is generated in `dist/`.

## Edit Company Content

Most placeholder content is centralized in `src/data/site.ts`. Update that file when the final company details are ready:

- Phone and email
- Office location
- Verified services and product categories
- Approved client or partner names
- Project descriptions
- Certifications or registration details

## Cloudflare Pages

Use these settings when connecting the repository:

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

Account-specific steps, like Cloudflare login, GitHub authorization, domain setup, and DNS changes, must be completed by the site owner.
