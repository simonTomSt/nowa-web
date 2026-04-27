# 📄 Product Requirements Document (PRD)

## Offer Page — Chemical Admixtures (Full Redesign)

---

## 1. Overview

The goal of this task is to design and implement a **fully redesigned Offer page for Chemical Admixtures**, based on:

👉 https://nowa.wielun.pl/en/domieszki-chemiczne/

⚠️ **Critical requirement:**  
The current page is:

- outdated visually
- based on long accordions
- hard to scan

We are creating a **modern, product-focused, structured experience** with:

- better hierarchy
- product grouping
- clean UX
- premium visual style

---

## 2. Objectives

- Present admixtures as **products (not raw text)**
- Improve navigation between categories
- Make content **scannable and structured**
- Highlight technical value clearly
- Maintain consistency with homepage design system

---

## 3. Scope

### In Scope

- Full redesign of the page
- Product categories
- Product details (accordion or cards)
- CTA sections
- Visual improvements (blobs, shadows)

### Out of Scope

- E-commerce
- Filtering/search (future)
- Backend integration

---

## 4. Page Structure (NEW)

1. Hero Section (reuse)
2. Intro Section (short value proposition)
3. Product Categories (main section)
4. Product Details (interactive)
5. CTA Section

---

## 5. Section 1 — Hero

- Title: “Chemical admixtures”
- Short description
- Background: industrial/concrete image
- Dark overlay

---

## 6. Section 2 — Intro / Value Proposition

### Content (from site):

“Chemical admixtures offer numerous advantages, such as improving the properties of concrete, increasing its strength and frost resistance, and reducing the amount of water required. Our company has been producing these admixtures for many years, supplying them to the construction industry to improve aerated concrete, ready-mix concrete and mortars.”

---

### Layout:

- Centered text block
- Clean spacing
- Optional CTA: “Learn more”

---

## 7. Section 3 — Product Categories (CORE)

⚠️ THIS IS THE MOST IMPORTANT PART

---

### Categories:

#### 1. Admixtures for Aerated Concrete

#### 2. Admixtures for Ready-Mix Concrete

---

### Layout:

Instead of simple accordion:

- Use **section blocks**
- Each category:
  - Title
  - Short description (optional)
  - Product list

---

## 8. Section 4 — Product List & Details

### Structure:

Each category contains multiple products.

---

## 8.1 Category: Admixtures for Aerated Concrete

### Product: Porplast-1

**Description (USE EXACT TEXT):**
“It is a preparation consisting of a mixture of lignosulfonates and surfactants. It is a component with a comprehensive effect.”

**Features:**

- Improves plasticizing and liquefying properties
- Suitable for cement with high content of additives
- Reduces mixing water by 2–5%
- Reduces cement and lime consumption
- Improves rheological properties
- Reduces segregation of components
- No negative impact on setting time
- Slight delay in demoulding time
- Reduces production defects

**Additional:**

- Link: Safety Data Sheet

---

### Other Products (accordion items):

- Porplast-2
- Porplast-H
- Porplast-NF
- Sulfomiks-20
- Sulfomiks-35

(Structure ready, content expandable later)

---

## 8.2 Category: Admixtures for Ready-Mix Concrete

### Product: Poliplast-1

**Description (USE EXACT TEXT):**
“It is a modern plasticizer, consisting of a mixture of nitrates and other refining additives, with a comprehensive effect. It is an excellent accelerator of cement setting and concrete hardening, which results in automatic compaction of the mixture and prevents efflorescence. Suitable for the production of colored products, reduces water absorption and acts as a corrosion inhibitor. It is irreplaceable in early spring and autumn.”

**Additional:**

- Link: Safety Data Sheet

---

### Other Products:

- Poliplast-2
- Poliplast-3
- Superplast-100
- Superplast-150
- Superplast-440
- Superplast-500
- Ultraplast-100
- Ultraplast-110
- Ultraplast-300
- Ultraplast-310
- Ultraplast-700
- Wibroplast

---

## 9. Layout & UX (REDESIGN)

### Replace old structure:

❌ Long accordion lists  
❌ Raw text

---

### New UX:

#### Option A (Recommended):

- Category → Grid of product cards
- Click → expand details

#### Option B:

- Accordion but with:
  - better spacing
  - icons
  - clear hierarchy

---

## 10. Product Card Design

Each product should include:

- Name
- Short description
- Expandable details
- CTA (Data Sheet)

---

### Style:

- Card-based
- Rounded corners
- Soft shadows
- Hover effect

---

## 11. CTA Section

### Content:

“Don't you see the admixture which you need?”

### Button:

“Contact with us”

---

### Layout:

- Centered
- Highlighted background

---

## 12. Visual Design Guidelines

### Style:

- Modern industrial
- Clean and minimal
- Premium feel

---

### Use:

- Cards
- Sections
- Grid layouts
- Icons (optional)

---

## 13. Decorative Elements

Use `/assets`:

- Blob SVGs

### Rules:

- Low opacity
- Positioned behind sections
- Add depth

---

## 14. Typography

- Strong hierarchy
- Avoid long lines of text
- Clear spacing

---

## 15. Responsiveness

### Desktop:

- Multi-column grids

### Tablet:

- 2 columns

### Mobile:

- 1 column
- Accordion-style fallback

---

## 16. UX Improvements vs Original

Original:

- Hard to scan
- Flat structure

New:

- Clear product grouping
- Visual hierarchy
- Better interaction

---

## 17. Reusability

Components:

- ProductSection
- ProductCard
- ProductAccordion
- CTASection

Reusable across:

- other offer pages

---

## 18. Success Criteria

- Page looks modern and premium
- Products clearly structured
- Easy navigation between categories
- Fully responsive
- Content readable and well organized
- UX significantly improved vs original

---

## 19. Notes

- Content must be used EXACTLY as provided
- No rewriting of technical descriptions
- Focus on layout and UX improvements
