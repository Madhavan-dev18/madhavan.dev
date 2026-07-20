# Next.js Migration Specification
Status: FINALIZED

## Goal
Migrate the pure Vite+React CSR portfolio to Next.js (App Router) to improve AEO (Answer Engine Optimization) and SEO.
The site will render static/server-side HTML containing semantic tags and structured data for web crawlers, removing the CSR bottleneck.

## Requirements
- Replace Vite dependencies with Next.js dependencies.
- Retain the current design, theming, and styling (`index.css`, `motion`, `lucide-react`).
- Migrate `src/App.tsx` and structure into Next.js App Router (`src/app/page.tsx`, `src/app/layout.tsx`).
- Keep existing components, but add `"use client"` where interactive hooks (`useState`, `useEffect`) are strictly necessary.
- Inject semantic metadata and structured data in the layout or page.
- Remove old Vite configuration files (`vite.config.ts`, `index.html` from root, `src/index.tsx`, etc.).
- Ensure `npm run build` succeeds and outputs static HTML for the landing page.

## Out of Scope
- Major redesigns or changes to the content.
- Adding new pages beyond the current single-page layout.
