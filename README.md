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
│   └── index.css    # Global styles
├── index.html
├── vite.config.ts
└── tsconfig*.json
```

## Stack

- React 19
- TypeScript
- Vite 8
- ESLint
