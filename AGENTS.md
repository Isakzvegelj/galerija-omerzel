# omerzel-website

**What:** Galerija Omerzel art-gallery website in Bled, Slovenia. Source: `isakzvegelj/galerija-omerzel`; currently hosted at `https://isakzvegelj.github.io/galerija-omerzel/`.
**Now:** Reviewing local-only site updates before any publish: homepage Google Maps embed at `Cesta svobode 19, 4260 Bled`, compact header monogram, removed sound bar, and scroll-triggered `Call us now` link to the gallery phone. Do not publish without explicit approval.
**Status:** Branch `main` contains custom-domain commit `3be9b67` pushed to `origin/main`. Address, homepage map, header, sound-bar removal, and scroll CTA remain local. `gallerybled.com.zone` contains the GitHub Pages DNS records. `npm run build` passes with a temporary Node 20.19.5 runtime in `/tmp`; the current `out/` is a fresh full static build with client scripts enabled. Nothing has been published.
**Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS; static export for GitHub Pages at the site root.

## Off-box backup (2026-10-02)
- Automatically mirrored to a **private** repo via a remote named `backup` (ssh alias `github-backup`), committed and pushed every 6h by `~/.local/bin/dsh-work-backup`. The 10 files of uncommitted client work are now preserved off-box.
- The backup path deliberately **never** pushes to `origin`. `origin` (`isakzvegelj/galerija-omerzel`) is the live site: `.github/workflows/deploy.yml` publishes to GitHub Pages on any push to `main`. Backing up and publishing are separate acts — keep them that way.

## Run & deploy
- Install with `npm ci`; lint with `npm run lint`; build static export with `npm run build` (outputs `out/`).
- `npm run dev` runs the local Next dev server.
- Publishing is driven by `.github/workflows/deploy.yml` on pushes to `main`; never push/deploy without explicit current-conversation approval.

## Structure
- `src/data/artworks.ts`: artwork titles, descriptions, metadata, image alt text, and local image paths.
- `src/data/gallery.ts`: gallery identity and contact details.
- `src/app/`: homepage and gallery/about/contact pages; root SEO metadata in `src/app/layout.tsx`.
- `public/images/artworks/cropped/`: gallery photographs.

## Gotchas
- The seed artwork data contains likely invented names, artists, mediums, prices, sizes, and category/image mismatches; do not present guesses as verified facts. Describe visible subject matter in alt text and flag catalogue facts for gallery confirmation.
- Static export is configured for the custom domain at the site root. GitHub Pages custom-domain activation still requires repository Pages settings plus Cloudflare DNS records; no publish or DNS change without explicit current-conversation approval.
- The existing public admin route is intentionally absent from static output; see README/DEPLOYMENT docs, which may contain stale claims.

*Last reviewed: 2026-10-09 (local address, map, and header fixes).*
