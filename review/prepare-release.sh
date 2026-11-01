#!/bin/bash
# Run only after passing validation; imports candidate without publishing.
set -euo pipefail
sha=$(git rev-parse HEAD)
git bundle create review/sales-candidate.bundle 7e2874f..HEAD
scp review/sales-candidate.bundle vma:/home/isak/website-optimization/reviews/gallery-sales-20261101/
ssh vma "cd /home/isak/website-optimization/repos/galerija-omerzel && git fetch /home/isak/website-optimization/reviews/gallery-sales-20261101/sales-candidate.bundle HEAD && git worktree add --detach /home/isak/website-optimization/reviews/gallery-sales-20261101/source '$sha'"
