# Nihanth Kethireddy — Portfolio

A static, responsive portfolio for Nihanth Kumar Reddy Kethireddy, built with Vite, React, TypeScript, Framer Motion, and Lucide. It is configured for the GitHub project page at <https://nihanthkethireddy.github.io/portfolio/>.

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To test the production build:

```bash
npm run verify:deploy
npm run preview
```

## Content and assets

- Update portfolio copy, roles, projects, skills, contact links, and `RESUME_URL` in `src/data/portfolio.ts`.
- The profile image lives at `public/assets/nihanth-profile.jpg`. Replace that file with a suitably optimized portrait using the same filename.
- Company logo SVGs live in `public/assets/company-logos/`. Each image has a text-based fallback treatment in its source asset and an accessible `alt` in the interface.

Asset URLs are resolved through Vite's `BASE_URL`, and `vite.config.ts` sets the GitHub Pages project base to `/portfolio/`.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy-pages.yml` checks TypeScript, builds, uploads the Pages artifact, and deploys on every push to `main`.

In the GitHub repository, open **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source, then push:

```bash
git push origin main
```

You can also run the workflow manually from the repository's **Actions** tab.
