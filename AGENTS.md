# omerzel-website

**What:** Galerija Omerzel art-gallery website in Bled, Slovenia. Source: `isakzvegelj/galerija-omerzel`; currently hosted at `https://isakzvegelj.github.io/galerija-omerzel/`.
**Now:** Homepage refresh is complete locally: warm editorial palette, concise hero, shorter featured-artwork carousel, verified visit details, and no custom cursor. Fixed Tailwind v4 not loading the custom palette; navy/gold text and backgrounds now render with intended contrast. Unverified prices display as “Price on request”; nothing published.
**Status:** Branch `main` started at `543ca57`. Local work includes visual titles/alt text and matching categories, homepage SEO metadata, removal of a mistakenly listed chat screenshot, price-on-request display, mobile carousel/header/player refinements, and the 2026-10-06 homepage/palette fixes. `npm run lint` passed before the CSS-only fix (2 pre-existing warnings); `npm run build` passes after it. Temporary static preview uses Tailscale port 4173. `bledgallery.com` remains an unverified domain candidate.
**Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS; static export for GitHub Pages (`basePath: /galerija-omerzel`).

## Off-box backup (2026-10-02)
- Automatically mirrored to a **private** repo via a remote named `backup` (ssh alias `github-backup`), committed and pushed every 6h by `~/.local/bin/dsh-work-backup`. The 10 files of uncommitted client work are now preserved off-box.
- The backup path deliberately **never** pushes to `origin`. `origin` (`isakzvegelj/galerija-omerzel`) is the live site: `.github/workflows/deploy.yml` publishes to GitHub Pages on any push to `main`. Backing up and publishing are separate acts — keep them that way.

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

*Last reviewed: 2026-10-06 (homepage refresh and local verification).*
