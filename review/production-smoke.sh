#!/bin/bash
set -euo pipefail
unset NEXT_PUBLIC_BASE_PATH
export NEXT_TELEMETRY_DISABLED=1
npm run build > review/evidence/build-production.log 2>&1
TEST_BASE_PATH='' TEST_ROOT=out SMOKE=1 node review/check-sales.mjs
