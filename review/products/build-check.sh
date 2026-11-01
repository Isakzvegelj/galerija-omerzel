#!/bin/bash
set -euo pipefail
node review/products/check-data.cjs
node review/products/contact-sheet.cjs
node node_modules/eslint/bin/eslint.js src/app/gallery/page.tsx src/components/ui/ArtworkCard.tsx src/components/ui/ArtworkCarousel.tsx src/components/ui/ArtworkProductImage.tsx src/components/ui/ArtworkModal.tsx src/components/ui/ArtworkInquiryModal.tsx src/components/ui/ArtworkSEO.tsx src/data/artwork-products.ts src/lib/product-copy.ts > review/products/evidence/lint.log 2>&1
NEXT_TELEMETRY_DISABLED=1 NEXT_PUBLIC_BASE_PATH=/previews/gallery-products-20261101 npm run build > review/products/evidence/build.log 2>&1
