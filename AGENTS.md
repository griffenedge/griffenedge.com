# AGENTS.md

## Purpose

- This repo is an Eleventy (`@11ty/eleventy`) static portfolio site.
- Source lives in `src/`; production output is generated into `dist/`.
- Production hosting is Cloudflare Pages.

## Stack

- Templating: Liquid (`.liquid`) and Markdown (`.md`) via Eleventy.
- Styling: `src/assets/css/main-css.liquid` composes Pico CSS + local styles into `main.css`.
- Scripts: `src/assets/js/main.js.liquid` outputs `main.js`.
- Package manager: `pnpm` (lockfile is `pnpm-lock.yaml`).

## Commands

- Install deps: `pnpm install`
- Build: `pnpm run build`
- Dev server: `pnpm run start`
- CSS lint: `pnpm exec stylelint "src/assets/css/**/*.css"`
- Format check: `pnpm exec prettier --check .`

## Editing Rules

- Edit source files only, mainly under `src/` and `_11ty/`.
- Do not hand-edit generated output in `dist/`.
- Do not rely on root `main.css` for source edits; update CSS inputs under `src/assets/css/`.
- Keep metadata and URLs in `src/_data/metadata.json` consistent with Cloudflare Pages deploy target.

## Common Paths

- Eleventy config: `.eleventy.js`
- Base layout: `src/_layouts/base.liquid`
- Project layout: `src/_layouts/project.liquid`
- Includes: `src/_includes/`
- Site data: `src/_data/metadata.json`
- Cloudflare redirects source: `src/_redirects`
- Cloudflare Pages settings: configured in Cloudflare dashboard (no repo config file)
