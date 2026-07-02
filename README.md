# Baker James Farm

Static Astro site for `bakerjamesfarm.com`.

## Commands

All commands are run from this project directory.

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the local dev server                  |
| `npm run dev:drafts` | Start the local dev server with draft pages enabled |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run build:drafts` | Build the site with draft pages enabled |
| `npm run preview` | Preview the production build locally        |
| `npm run preview:drafts` | Build and preview with draft pages enabled |
| `npm run deploy`  | Build, sync `./dist/` to S3, and invalidate CloudFront |

## Draft Pages

Draft-only pages are controlled by `SHOW_DRAFT_PAGES`.

Production builds and deploys force `SHOW_DRAFT_PAGES=false`, so draft pages are not generated or uploaded to S3.

Use draft scripts when you want to preview hidden pages locally:

```sh
npm run dev:drafts
npm run preview:drafts
```

Draft pages live in `src/content/draftPages.ts` and are rendered by `src/pages/[...draft].astro`. Add a page to the `draftPages` list to make it available locally when draft pages are enabled.

## Deploy

The deploy script builds the app, uploads `dist/` to the `bakerjamesfarm.com` S3 bucket with stale object deletion enabled, then invalidates the CloudFront distribution for HTTPS traffic.

```sh
npm run deploy
```

Optional overrides:

```sh
BUCKET=bakerjamesfarm.com AWS_REGION=us-east-2 CLOUDFRONT_DISTRIBUTION_ID=E2UF7X2XT0NELD npm run deploy
```

The default deployment target is `s3://bakerjamesfarm.com` in `us-east-2`, with CloudFront distribution `E2UF7X2XT0NELD`.
