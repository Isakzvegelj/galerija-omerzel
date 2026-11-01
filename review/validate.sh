#!/bin/bash
set -euo pipefail
export NEXT_TELEMETRY_DISABLED=1
export NEXT_PUBLIC_BASE_PATH=/previews/gallery-sales-20261101
npm run build > review/evidence/build-preview.log 2>&1
node node_modules/eslint/bin/eslint.js src/app/page.tsx src/app/gallery/page.tsx src/components/ui/ArtworkCard.tsx src/components/ui/ArtworkCarousel.tsx src/components/ui/ArtworkImage.tsx src/components/ui/ArtworkInquiryModal.tsx src/components/ui/ArtworkModal.tsx src/components/ui/CallUsNow.tsx src/components/ui/ThemeProvider.tsx src/lib/TranslationContext.tsx src/lib/sales-copy.ts > review/evidence/lint.log 2>&1
python3 review/make-bundle.py
node review/check-sales.mjs
