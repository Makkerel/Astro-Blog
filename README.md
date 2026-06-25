# Astro Blog

Personal blog and portfolio built with [Astro](https://astro.build/), [MDX](https://mdxjs.com/), and
[Vite+](https://viteplus.dev/guide/). Hosted on [Cloudflare](https://www.cloudflare.com/) via
Wrangler.

## Tech Stack

- **Astro 6** — static site framework
- **MDX** — blog posts and content pages with components
- **Vite+** — unified toolchain for dev, build, and task running
  ([guide](https://viteplus.dev/guide/))
- **Cloudflare Wrangler** — deployment to Cloudflare Workers/Pages
- **pnpm** — package manager

## Project Structure

```text
/
├── public/                  # Static assets (not processed by Astro)
├── src/
│   ├── assets/              # Images and SVGs processed by Astro
│   ├── components/
│   │   ├── blogpost.astro   # Blog post card for listing pages
│   │   ├── colorPalette.astro
│   │   ├── details.astro
│   │   ├── figure.astro     # Inline images with optional captions
│   │   ├── footer.astro
│   │   ├── header.astro
│   │   ├── link.astro       # External link component for MDX
│   │   ├── navigation.astro
│   │   ├── tableOfContents.astro
│   │   ├── tags.astro       # Optional per-post tags footer
│   │   └── title.astro      # Post hero (image, title, date, dek)
│   ├── layouts/
│   │   ├── baseLayout.astro
│   │   └── markdownLayout.astro
│   ├── pages/
│   │   ├── posts/           # Blog posts (.mdx)
│   │   ├── tags/            # Tag index and [tag] pages
│   │   ├── about.astro
│   │   ├── blogs.astro
│   │   ├── collophon.mdx
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── wrangler.jsonc           # Cloudflare deployment config
└── pnpm-workspace.yaml      # Vite+ catalog overrides
```

### Directories and Files

- **`src/pages/`** — Routes. `.astro` and `.mdx` files become pages.
  - `index.astro` — Homepage
  - `about.astro` — About page
  - `blogs.astro` — Blog post listing
  - `collophon.mdx` — Colophon, acknowledgements, and licensing
  - `posts/` — Individual blog posts (MDX)
  - `tags/` — Tag index and per-tag listing pages
- **`src/layouts/`** — Page shells
  - `baseLayout.astro` — Site-wide layout (header, footer, fonts)
  - `markdownLayout.astro` — Article layout with table of contents
- **`src/components/`** — Reusable Astro components used across pages and MDX
- **`src/assets/`** — Images and icons processed by Astro's asset pipeline
- **`src/styles/global.css`** — Global CSS variables, typography, and base styles
- **`public/`** — Static files served as-is (e.g. favicon)

## Commands

This project uses [Vite+](https://viteplus.dev/guide/) (`vp`) as the primary CLI. Package scripts
are run through `vp run`, which wraps `package.json` scripts with Vite+'s task runner.

| Command            | Action                                                    |
| :----------------- | :-------------------------------------------------------- |
| `pnpm install`     | Install dependencies                                      |
| `vp run dev`       | Start local dev server at `localhost:4321`                |
| `vp run build`     | Build production site to `./dist/`                        |
| `vp run preview`   | Preview the production build locally                      |
| `vp run deploy`    | Deploy to Cloudflare via Wrangler                         |
| `vp run astro ...` | Run Astro CLI commands (`astro add`, `astro check`, etc.) |

You can also use `pnpm dev`, `pnpm build`, etc. directly — they call the same Astro scripts.
`vp run` is preferred for caching and consistency with the Vite+ toolchain.

See the [Vite+ guide](https://viteplus.dev/guide/) for more: `vp dev`, `vp build`, `vp preview`, and
`vp run` for script execution.
