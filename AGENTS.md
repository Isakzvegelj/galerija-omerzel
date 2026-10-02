# omerzel-website

**What:** Galerija Omerzel art-gallery website in Bled, Slovenia. Source: `isakzvegelj/galerija-omerzel`; currently hosted at `https://isakzvegelj.github.io/galerija-omerzel/`.
**Now:** Responsive gallery polish complete; unverified prices display as “Price on request.” No market pricing is claimed because web search returned no reliable comparables. Nothing published.
**Status:** Branch `main` started at `543ca57`. Local work includes visual titles/alt text and matching categories, homepage SEO metadata, removal of a mistakenly listed chat screenshot, price-on-request display, and mobile carousel/header/player refinements. `npm run lint` and `npm run build` pass; lint has 3 pre-existing warnings. Phone preview at Tailscale port 4173 runs for 30 minutes. `bledgallery.com` remains an unverified domain candidate.
**Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS; static export for GitHub Pages (`basePath: /galerija-omerzel`).

## Run & deploy
- Install with `npm ci`; lint with `npm run lint`; build static export with `npm run build` (outputs `out/`).
- `npm run dev` runs the local Next dev server (base path applies).
- Publishing is driven by `.github/workflows/deploy.yml` on pushes to `main`; never push/deploy without explicit current-conversation approval.

## Structure
- `src/data/artworks.ts`: artwork titles, descriptions, metadata, image alt text, and local image paths.
- `src/data/gallery.ts`: gallery identity and contact details.
- `src/app/`: homepage and gallery/about/contact pages; root SEO metadata in `src/app/layout.tsx`.
- `public/images/artworks/cropped/`: gallery photographs.

## Gotchas
- The seed artwork data contains likely invented names, artists, mediums, prices, sizes, and category/image mismatches; do not present guesses as verified facts. Describe visible subject matter in alt text and flag catalogue facts for gallery confirmation.
- Static export is configured for the GitHub Pages project URL. A custom domain needs DNS/hosting configuration and corresponding canonical URL/base-path adjustments; no domain purchase or DNS change without explicit approval.
- The existing public admin route is intentionally absent from static output; see README/DEPLOYMENT docs, which may contain stale claims.

*Last reviewed: 2026-10-01*
