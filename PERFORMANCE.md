# October 17 performance changes

Artwork cards and carousel thumbnails use checked-in WebP variants with real width descriptors. `ArtworkImage` selects these without a server-side Next image optimizer. Card photographs start loading only when their card comes within 240px of the viewport, rather than the browser's much larger native lazy-load threshold. Detailed modal views retain the original photographs. Run `npm ci` and `npm run images` (Node 20.11+) after adding or changing photographs, review image quality, and commit both the variants and `src/data/image-variants.json`. The static export remains `npm run build`.

The carousel renders its first photograph and text immediately. Playback starts only when requested, pauses on focus/hover, and is disabled when reduced motion is preferred. Previous/next and thumbnail selection remain available.

The existing mailto enquiry flow now explains that a draft must still be sent. Artwork drafts include a stable identifier and the photograph URL, so a gallery can identify the requested work without relying on unconfirmed catalogue claims. No email backend or new tracking was added.

Verification for this release includes a production static export, lint, mobile and desktop browser checks in light and dark themes, manual slide changes, reduced-motion checks, and intercepted mailto navigation without sending messages. Existing lint warnings in `middleware.ts` and `src/lib/utils.ts` remain. No artist, price, provenance or availability facts were independently confirmed.

The complete comparison reports and screenshots are retained at `/home/isak/projects/website-performance-20261017/evidence` on VMP; the release summary is in the parent directory. Lab observations do not establish real-user Core Web Vitals or business conversion. Review Search Console and actual visit/artwork enquiries over comparable 28-day periods.
