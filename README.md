# Portfolio — Nihanth Kumar Reddy Kethireddy

This is a static Vite + React + TypeScript portfolio intended for deployment to GitHub Pages at https://nihanthkethireddy.github.io/portfolio/

Local development

```bash
npm install
npm run dev
```

Build

```bash
npm run build
npm run preview
```

Profile photo

Place your LinkedIn profile photo at `public/assets/nihanth-profile.jpg` (exact path). A placeholder SVG exists at that path; replace it with a real JPEG for a polished hero portrait.

Vite base path

Vite is configured with `base: '/portfolio/'` in `vite.config.ts` to support GitHub Pages.

Deploying to GitHub Pages

1. Push to the repository `main` (or `master`).
2. The included GitHub Actions workflow at `.github/workflows/deploy-pages.yml` builds and deploys `dist` to GitHub Pages.

Update resume link

To update the resume URL, edit `src/data/portfolio.ts` and change `RESUME_URL`.
