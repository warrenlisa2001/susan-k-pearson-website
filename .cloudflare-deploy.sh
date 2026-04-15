#!/bin/bash
# Direct deployment script
npx wrangler pages deploy dist \
  --project-name=susan-k-pearson-website \
  --branch=main \
  --commit-dirty=true \
  --skip-caching
