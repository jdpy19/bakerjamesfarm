#!/usr/bin/env bash
set -euo pipefail

BUCKET="${BUCKET:-bakerjamesfarm.com}"
REGION="${AWS_REGION:-${AWS_DEFAULT_REGION:-us-east-2}}"
DIST_DIR="${DIST_DIR:-dist}"
CLOUDFRONT_DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:-E2UF7X2XT0NELD}"

command -v aws >/dev/null 2>&1 || {
  echo "aws CLI is required but was not found in PATH." >&2
  exit 1
}

command -v npm >/dev/null 2>&1 || {
  echo "npm is required but was not found in PATH." >&2
  exit 1
}

echo "Building static site..."
SHOW_DRAFT_PAGES=false npm run build

if [ ! -d "$DIST_DIR" ]; then
  echo "Build output directory '$DIST_DIR' was not found." >&2
  exit 1
fi

echo "Deploying $DIST_DIR/ to s3://$BUCKET in $REGION..."
aws s3 sync "$DIST_DIR" "s3://$BUCKET" \
  --region "$REGION" \
  --delete

if [ -n "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
  echo "Creating CloudFront invalidation for distribution $CLOUDFRONT_DISTRIBUTION_ID..."
  aws cloudfront create-invalidation \
    --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
    --paths "/*"
fi

echo "Deploy complete: https://$BUCKET"
