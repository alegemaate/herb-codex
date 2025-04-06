#!/bin/bash

# Arg should be dev or prod
if [ "$1" != "dev" ] && [ "$1" != "prod" ]; then
  echo "Usage: $0 <dev|prod>"
  exit 1
fi

BUCKET_NAME="www-herbcodex-org-$1"

# 1. Build the project
yarn build

# 2. Sync everything except immutable (exclude it)
gsutil -m rsync -d -r -x "^_app/immutable/.*" ./build gs://$BUCKET_NAME

# 3. Sync immutable with cache headers
gsutil -m -h "Cache-Control: public, max-age=31536000, immutable" \
  rsync -d -r ./build/_app/immutable gs://$BUCKET_NAME/_app/immutable