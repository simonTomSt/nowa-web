# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server
pnpm build      # type-check + production build (tsc -b && vite build)
pnpm lint       # run ESLint
pnpm preview    # preview production build
```

## Project purpose

This is a simple, responsive static marketing website for a company that produces innovative chemical admixtures for aerated and ready-mix concrete, and provides testing services for building materials. It is deployed as plain HTML/CSS/JS (output of `pnpm build`) — no SSR, no backend, no complex architecture. Keep the code straightforward.

## Stack

- **React 19** + **TypeScript 6** + **Vite 8**
- **HeroUI v3 (Beta)** — `@heroui/react` component library built on React Aria
- **Tailwind CSS v4** — configured as a Vite plugin (`@tailwindcss/vite`), no `tailwind.config.js` needed

## Key integration details

Tailwind v4 is imported in `src/index.css` via `@import "tailwindcss"` — utility classes work without any config file. HeroUI styles are imported via `@import "@heroui/styles"` in the same file.

HeroUI v3 components are imported directly from `@heroui/react` with no Provider wrapper required (v3 difference from v2). Components follow a compound pattern (e.g., `Card.Header`, `Card.Content`).

Use the `heroui-react` skill when working with HeroUI components to fetch accurate v3 docs.
