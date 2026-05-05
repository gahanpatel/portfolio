# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # start dev server (http://localhost:3000)
npm run build     # production build + type check
npm run lint      # ESLint
npx tsc --noEmit  # type check only
```

## Architecture

Single-page portfolio built with Next.js 16 App Router, TypeScript, and Tailwind CSS v4.

**Content lives in one place:** [`src/lib/data.ts`](src/lib/data.ts) exports `personalInfo`, `experiences`, `projects`, and `skills`. Edit this file to update any portfolio content — nothing else needs to change.

**Component split:** Section components (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Contact`) are Server Components. The three interactive components require `'use client'`:
- `Navbar` — scroll listener for blur effect
- `ThemeToggle` — localStorage + `document.documentElement.classList`
- `FadeIn` — `IntersectionObserver` for scroll-triggered fade-up animations

**Dark mode** is class-based (`html.dark`). CSS variables `--background` / `--foreground` in `globals.css` swap values under `.dark`. The layout injects an inline script to read `localStorage` and set the class before first paint to prevent flash.

## Next.js 16 specifics

**Tailwind CSS v4** — no `tailwind.config.ts`. Configuration is CSS-native inside `globals.css` using `@theme`. Classes are detected automatically; no `content` array needed.

**`params` is a Promise** — in page and layout components, `params` must be awaited:
```tsx
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
}
```

**`'use cache'` directive** — replaces `fetch` caching options and `unstable_cache`. Requires `cacheComponents: true` in `next.config.ts` to enable. Not currently used in this project.

**`'use client'` boundary** — only needs to be added to the entry-point file of a client subtree, not every file that uses hooks. Children of a client component do not need it.

For slow client-side navigations, `Suspense` alone is not sufficient — also export `unstable_instant` from the route. See `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.md`.
