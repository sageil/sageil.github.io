# sammyageil.com

This repository contains Sammy Ageil's personal site.
It uses Astro Starlight and deploys to GitHub Pages at `sammyageil.com`.

## Local development

```sh
pnpm install
pnpm dev
```

## Verification

```sh
pnpm check
pnpm build
```

The deployment workflow uses the committed `pnpm-lock.yaml` file and preserves the custom domain through `public/CNAME`.
