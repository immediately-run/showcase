# immediately.run — Showcase

> **Deprecated — this standalone app is no longer maintained.** The public
> site's showcase now lives **inside the `landing-page` app** as the
> `#/showcase` routed section, after the site was de-federated into a single
> hash-routed app (one repo, one fork). See
> [`immediately-run/landing-page`](https://github.com/immediately-run/landing-page)
> and the rationale in the docs repo at
> `design-briefs/landing-page/SITE_OVERVIEW.md` §5. This repo remains only as a
> forkable example of a standalone showcase; the composed site does not load it.

A standalone [immediately.run](https://immediately.run) app: the **Showcase**
grid of real, forkable apps that run on the platform. Built as part of
`docs/plans/ui-as-apps` **Phase 02** (standalone apps) — it has **no host
dependency**; it loads via a `present` URL like any other app.

- **Content** is a typed array in `src/data/showcase.ts` (apps + their
  Open/Tinker routes). Add an app by adding an entry — no component changes.
- **Design** pulls tokens from `src/index.css` (the immediately.run design
  system): cool-dark canvas, magenta↔violet gradient, Gabarito / Public Sans /
  Space Mono, hairline borders, hard-offset hover. Mobile-first.
- **Loading** rides the gh-pages zip cache via `.github/workflows/cache.yml`
  (`requireLatest: "stale_ok"` in `package.json`). One-time repo setup:
  Settings → Pages → Source: GitHub Actions.

## Local dev

```bash
npm install
npm run dev      # local preview
npm run build    # tsc -b && vite build — must pass clean
npm run lint
```

The Open / Tinker links are same-origin immediately.run routes
(`/present/...`, `/edit/...`), so they resolve wherever the app is served.

> See `CLAUDE.md` for the immediately.run authoring rules (App.tsx entry,
> HMR-safe modules, the design system, and the platform capability model).
