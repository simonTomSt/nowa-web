---
name: Project overview: nowa-website
description: Static marketing site for NOWA (chemical admixtures / lab tests), React 19 + Vite + HeroUI v3 + Tailwind v4, bilingual pl/en
type: project
---

Static marketing website for NOWA — a Polish company producing chemical admixtures for aerated/ready-mix concrete and running a construction materials testing lab. Pages: HomePage, AboutAdmixturesPage, AboutUsPage, LabTestsPage, OfferAdmixturesPage, ContactPage, EUProjectsPage. Two languages (pl/en) with URL-prefix routing (/:lang/...). SEO via react-helmet-async + custom Seo component. Deployed as plain Vite SPA output.

**Why:** Needed by company as a presence/marketing site.
**How to apply:** Keep implementation simple — no SSR, no backend, no complex state. Pages are thin wrappers around section components.
