# prateeksrt

React + TypeScript app powered by [Vite](https://vite.dev/).

**Live site:** [https://prateeksrt.github.io/prateeksrt/](https://prateeksrt.github.io/prateeksrt/)

Pushes to `main` build the app and deploy `dist/` to GitHub Pages via [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml).

## Prerequisites

- Node.js 20+ (22 recommended)
- npm 10+

## Getting started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |

## Project structure

```
├── public/          # Static assets
├── src/
│   ├── App.tsx      # Root React component
│   ├── main.tsx     # App entry point
│   ├── theme.css    # Colors, type, space, motion, reusable classes
│   ├── index.css    # Reset and page canvas
│   └── App.css      # Page layout (hero, about)
├── index.html
├── vite.config.ts
└── tsconfig*.json
```

## Theme

Visual language lives in [`src/theme.css`](src/theme.css). New pages and sections should use those tokens and classes (`.section`, `.prose`, `.display`, `.headline`, `.lede`, `.btn`, `.rise-in`) instead of introducing new colors or type styles.

## Stack

- React 19
- TypeScript
- Vite 8
- ESLint
