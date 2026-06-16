# labaccessnow.github.io

The projects portal at **[github.labaccessnow.com](https://github.labaccessnow.com)**
(mirrored at `labaccessnow.github.io`).

An Astro site that, at build time, lists the org's **public** repos tagged
`labaccessnow-showcase` and renders a card per project (linking to its docs +
GitHub repo). It rebuilds on every push **and daily** (cron), so newly tagged
repos appear automatically — no manual edits.

## Add a project to the portal
Tag a public repo with the topic **`labaccessnow-showcase`**, give it a
description, and publish its docs at `github.labaccessnow.com/<repo>/`. It shows
up on the next build.

## Deploy
GitHub Actions builds and publishes to **both** GitHub Pages and the self-hosted
Oracle edge (rsync, no `--delete` so the per-project `/​<repo>/` docs are
preserved), from one build. See `.github/workflows/deploy.yml`.

## Local dev
```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # -> dist/   (export GITHUB_TOKEN to avoid API rate limits)
```
