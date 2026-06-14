# Izzy Surf School

Static Vite/React site.

## Local development

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Free hosting with GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

To enable hosting:

1. Push the repository to GitHub.
2. Open the repository settings.
3. Go to `Pages`.
4. Set `Build and deployment` to `GitHub Actions`.
5. Push to the `main` branch.

GitHub will run `npm ci`, build the site with `npm run build`, and publish `dist/`.

## Google reviews refresh

The site reads review data from `src/data/google-reviews.json`.

To refresh that file automatically, add this GitHub repository secret:

```text
GOOGLE_MAPS_API_KEY
```

Optional repository variable:

```text
GOOGLE_PLACE_ID
```

If `GOOGLE_PLACE_ID` is not set, the updater searches for `Izzy Surf School Lombok Kabupaten Lombok Barat` and uses the first Google Places result.

Run manually:

```bash
GOOGLE_MAPS_API_KEY=your_key npm run reviews:update
```

GitHub Actions also runs `.github/workflows/update-google-reviews.yml` every Monday. When Google returns changed review data, the workflow commits `src/data/google-reviews.json`, which triggers the normal Pages deploy.
