# Roadmap: Next.js Migration

## Wave 1: Foundation and Dependencies
- [ ] Uninstall Vite and related dependencies.
- [ ] Install Next.js and updated React types.
- [ ] Update `package.json` scripts for Next.js.
- [ ] Remove old Vite files (`vite.config.ts`, `index.html`, `src/index.tsx`, `src/vite-env.d.ts`).

## Wave 2: App Router Configuration
- [ ] Create `next.config.ts`.
- [ ] Create `src/app/layout.tsx` incorporating metadata and the root HTML structure.
- [ ] Create `src/app/page.tsx` as the main server component (migrating `App.tsx`).

## Wave 3: Component Adaptation
- [ ] Add `"use client"` directives to components that require React hooks (`Nav.tsx`, `Hero.tsx` maybe, `Contact.tsx`, etc.).
- [ ] Ensure `index.css` is properly imported in `layout.tsx`.
- [ ] Implement local Client Component for the floating mobile nav and scroll spy logic from `App.tsx`.

## Wave 4: Verification and Cleanup
- [ ] Run `npm run build` and ensure the site builds statically.
- [ ] Start the preview server and test UI interactions (Dark Mode, scrolling).
- [ ] Verify HTML output contains structured metadata.
