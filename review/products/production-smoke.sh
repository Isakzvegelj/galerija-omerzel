#!/bin/bash
set -euo pipefail
unset NEXT_PUBLIC_BASE_PATH
NEXT_TELEMETRY_DISABLED=1 npm run build > review/products/evidence/build-production.log 2>&1
TEST_BASE_PATH='' TEST_ROOT=out SMOKE=1 node review/products/check-browser.mjs
