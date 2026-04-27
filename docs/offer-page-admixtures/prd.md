# 📄 Product Requirements Document (PRD)

## Offer Page — Laboratory Tests (Full Redesign)

---

## 1. Overview

The goal of this task is to design and implement a **completely redesigned Offer page for Laboratory Tests**, based on:

👉 https://nowa.wielun.pl/en/badania-laboratoryjne/

⚠️ **Critical requirement:**  
The current page is:

- visually outdated
- text-heavy
- poorly structured

We are NOT replicating it — we are creating a **modern, premium, high-conversion page** aligned with the homepage design system.

---

## 2. Objectives

- Transform raw technical content into a **clean, structured UI**
- Improve readability and hierarchy
- Present laboratory capabilities in a **professional and modern way**
- Introduce **interactive and visual components**
- Highlight expertise and trust

---

## 3. Scope

### In Scope

- Full redesign of the page
- New section architecture
- Accordion / structured content
- Visual enhancements (cards, grids, images, blobs)
- Responsive layout

### Out of Scope

- Backend integrations
- Pricing systems
- Booking system (future)

---

## 4. Page Structure (NEW)

The redesigned page should include:

1. Hero Section (reuse existing component)
2. Intro / Value Proposition
3. Test Categories (interactive)
4. Scope of Services (highlight section)
5. Visual Section (lab credibility)
6. CTA Section

---

## 5. Section 1 — Hero (Reusable)

Use existing reusable Hero:

- Title: “Laboratory tests”
- Description (short intro)
- Background: lab/industrial image
- Overlay for readability

---

## 6. Section 2 — Intro / Value Proposition

### Purpose:

Explain what the lab offers in a **clear and modern way**

### Layout:

- Centered content block
- Title + short paragraph

### Enhancements:

- Optional icons (precision, quality, research)
- Clean spacing

---

## 7. Section 3 — Test Categories (KEY REDESIGN)

### Current Problem:

- Accordion with long raw text
- Poor UX
- Hard to scan

---

### New Approach:

#### Structure:

- Categories:
  - Concrete
  - Aggregates
  - Masonry elements
  - Mortars

---

### Layout Options:

#### Option A (Recommended):

**Accordion + Cards hybrid**

- Each category = accordion section
- Inside:
  - List of tests displayed as structured list or mini cards

---

### UX Improvements:

- Clear grouping
- Icons per category
- Better spacing
- Optional search/filter (future)

---

### Design:

- Clean accordion (HeroUI)
- Soft shadows
- Rounded containers

---

## 8. Section 4 — Scope of Services

### Content:

Based on:
“Zakres działalności”

Includes:

- Technical consulting
- Raw material evaluation
- Recipe optimization
- Documentation
- Quality control

---

### Layout:

- Highlighted section (important)
- Could be:
  - Bullet list OR
  - Icon-based grid

---

### Design:

- Light background or subtle gradient
- Strong title
- Clean spacing

---

### Goal:

Turn boring paragraph into **clear service value**

---

## 9. Section 5 — Visual Credibility Section

### Content:

Images of:

- Laboratory equipment
- Testing process

---

### Layout:

- 2–3 images in grid or mosaic
- Optional overlay captions

---

### Purpose:

- Build trust
- Show real operations
- Break text monotony

---

## 10. Section 6 — CTA Section

### Purpose:

Encourage user action

---

### Content:

- Short message:
  - “Need laboratory testing?”
- CTA button:
  - “Contact us”
  - or “Request a quote”

---

### Design:

- Highlighted section (contrast background)
- Centered layout
- Strong button

---

## 11. Visual Design Guidelines

### Style:

- Modern, clean, technical
- Premium industrial feel

---

### Components to Use:

- Cards
- Accordions
- Grid layouts
- Icons
- Image blocks

---

## 12. Decorative Elements

Use from `/assets`:

- Blob SVGs

### Rules:

- Low opacity
- Positioned in background
- Add depth without clutter

---

## 13. Typography

- Strong hierarchy:
  - Section titles → large
  - Category titles → medium
  - Content → readable width

---

## 14. Responsiveness

### Desktop:

- Multi-column layouts
- Spacious sections

### Tablet:

- 2-column grids

### Mobile:

- Single column
- Accordion collapses properly
- Maintain readability

---

## 15. UX Improvements Over Original

Original page issues:

- Dense text
- Poor hierarchy
- Hard navigation

---

### New UX Goals:

- Easy scanning
- Clear grouping
- Interactive exploration
- Visual engagement

---

## 16. Reusability

Components to build:

- CategoryAccordion
- ServiceGrid
- ImageGallery
- CTASection

Reusable across:

- Other offer pages

---

## 17. Success Criteria

- Page looks modern and premium
- Clear structure vs old version
- Easy to scan and navigate
- Fully responsive
- Interactive elements improve UX
- Strong visual consistency with homepage
