# Cozy Corner by Honey

A front-end shop for [Cozy Corner by Honey](https://www.instagram.com/cozy_corners_by_honey/). People browse the candles here and reserve a jar on Instagram. Payments are not set up yet.

Photos and scent names are placeholders. Swap them in `src/data/candles.ts` and `public/images/` when the real collection is photographed.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

The site is a static Next.js export. Pushing to `main` runs `.github/workflows/pages.yml` and publishes to GitHub Pages.

One-time setup: in the GitHub repo, open **Settings → Pages → Build and deployment** and choose **GitHub Actions**.

The live address is [https://candle-making-xi.vercel.app/](https://candle-making-xi.vercel.app/).
