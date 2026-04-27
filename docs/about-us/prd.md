# 📄 Product Requirements Document (PRD)

## About Us Page (Redesign)

---

## 1. Overview

The goal of this task is to design and implement the **About Us page** as a **modern, visually engaging, and structured experience**, based on:

👉 https://nowa.wielun.pl/en/o-nas/

⚠️ **Critical requirement:**  
The current page is **too static and text-heavy**.  
We are NOT recreating it 1:1 — we are **redesigning it into a premium, modern layout** consistent with the homepage.

---

## 2. Objectives

- Present company story in a **clear and engaging way**
- Improve readability and visual hierarchy
- Introduce modern UI patterns (cards, sections, spacing)
- Use decorative elements (blobs, shadows)
- Maintain consistency with homepage design system

---

## 3. Page Structure

The page should consist of the following sections:

1. Reusable Hero Section (already defined)
2. Intro Section (“Let’s Get To Know Each Other Better”)
3. Company Description Card Section
4. Company Values Section (grid cards)
5. FAQ Section

---

## 4. Section 1 — Hero (Reusable)

Already implemented via reusable component:

- Title: “About us”
- Background image (industrial/team related)
- Overlay for readability

---

## 5. Section 2 — Intro (Headline Section)

### Content:

- Title: “Let’s Get To Know Each Other Better!”
- Short supporting text

### Layout:

- Centered content
- Narrow max-width (readability)
- Strong typography hierarchy

### Design:

- Clean spacing (large vertical padding)
- Optional subtle blob background (low opacity)

---

## 6. Section 3 — Company Description (IMPORTANT REDESIGN)

### Current Problem:

- Long text block
- Poor readability
- No visual structure

---

### New Approach:

#### Layout:

- Centered **card-style container**
- Image at top
- Text below

#### Structure:

- Large image (rounded corners)
- Text divided into paragraphs

---

### Design Requirements:

- Card background (white or slightly elevated)
- Rounded corners
- Modern shadow (soft, diffused)
- Padding inside card

---

### Enhancements:

- Limit text width for readability
- Add spacing between paragraphs
- Optional subtle hover elevation

---

## 7. Section 4 — Company Values (KEY SECTION)

### Content:

- Title: “Company Values”
- Short intro text
- 6 values:
  - Perfectionism
  - Reliability
  - Honesty
  - Development
  - Cooperation
  - Ecology

---

### Layout:

- Grid of cards:
  - Desktop: 3 columns
  - Tablet: 2 columns
  - Mobile: 1 column

---

### Each Card:

- Icon (top)
- Title
- Short description

---

### Design:

- Card-based layout
- Light background
- Rounded corners
- Subtle shadow
- Hover effect (slight lift)

---

### Decorative Element:

- Blob SVG background (left side, low opacity)
- Should enhance, not distract

---

## 8. Section 5 — FAQ (Accordion)

### Content:

- Multiple questions and answers

---

### Layout:

- Centered container
- Accordion-style interaction

---

### Behavior:

- Expand/collapse items
- Only one open at a time (optional)
- Smooth transition

---

### Design:

- Clean card/accordion style
- Divider lines or subtle borders
- Icons (+ / −) for interaction

---

## 9. Visual Design Guidelines

### Style:

- Modern, minimal, corporate
- Consistent with homepage

### Elements:

- Cards
- Grid layouts
- Soft shadows
- Rounded corners

---

## 10. Decorative Elements

Use assets from `/assets`:

- Blob SVG shapes

### Rules:

- Low opacity
- Positioned in background
- Do not overlap text directly

---

## 11. Typography

- Clear hierarchy:
  - Section titles → large & bold
  - Subtitles → medium
  - Body → readable width

---

## 12. Responsiveness

### Desktop:

- Multi-column layouts
- Spacious sections

### Tablet:

- Reduced columns

### Mobile:

- Single column
- Increased spacing
- Maintain readability

---

## 13. Reusability

- Components should be modular:

  - IntroSection
  - ContentCardSection
  - ValuesGrid
  - FAQAccordion

- Avoid hardcoding content

---

## 14. UX Considerations

- Easy scanning of content
- Avoid large text walls
- Maintain visual flow
- Clear separation between sections

---

## 15. Success Criteria

- Page looks modern and premium (NOT text-heavy)
- Matches/improves reference design
- Fully responsive
- Content is readable and structured
- Components reusable across site
- Decorative elements enhance UI without clutter
