# Project: TanWinWin

## Commands
- `npm run dev` - Start dev server (Turbopack)
- `npm run build` - Build production
- `npm run lint` - Lint with Next.js ESLint
- `npm start` - Start production server

## Architecture
Next.js 16 App Router (TypeScript) with Tailwind CSS 4. B2B marketplace for construction surfaces, multifamily renovations, and trade loyalty program (TanClub). All data is static TypeScript files in `data/` — no CMS or database yet.

## Structure
- `app/` - Pages (surfaces, multifamily, pbsclub, ai-assistant, blog, about-us, sign-up)
- `components/` - Organized by feature: `layout/`, `ui/`, `surfaces/`, `multifamily/`, `pbsclub/`, `blog/`, `home/`
- `data/` - Static data: blog-posts, brands, faq, pricing, team, testimonials
- `public/` - Images and videos

## Code Patterns

### Page composition
Pages import feature components + data, compose in JSX:
```tsx
import SurfacesHero from "@/components/surfaces/SurfacesHero";
import { surfaceBrands } from "@/data/brands";

export default function HomePage() {
  return (
    <>
      <SurfacesHero />
      <LogoCarousel logos={surfaceBrands.map((name) => ({ name }))} />
    </>
  );
}
```

### Client components with Framer Motion
```tsx
"use client";
import { motion } from "framer-motion";

export default function Component() {
  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />;
}
```

## Design Tokens
- Primary dark: `charcoal` (#1A2332)
- Accent: `accent-orange` (#D97337), `accent-gold` (#D4A574)
- Green: `accent-green` (#4A6B5E)
- Font: Inter (Google Fonts)

## Gotchas
- Remote images: configure allowed domains in next.config.ts remotePatterns if needed
- Most components are client-side (`"use client"`) — prefer server components for static content
- No tests exist yet
- Path alias: `@/*` maps to project root
