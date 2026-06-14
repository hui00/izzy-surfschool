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
# izzy-surfschool
