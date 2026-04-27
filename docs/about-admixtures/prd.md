# 📄 Product Requirements Document (PRD)

## About Admixtures Page — Content Sections (Redesign)

---

## 1. Overview

The goal of this task is to design and implement the **main content sections** of the **About Admixtures page**, following the Hero section.

⚠️ **Important:**  
This page should **NOT** be a simple text dump.  
It requires a **modern redesign** to transform dense content into:

- Visually engaging sections
- Easy-to-scan layouts
- Premium, clean UI consistent with homepage

The current version (reference screenshots) is too static and text-heavy.  
We aim for a **more dynamic, structured, and visually appealing experience**.

---

## 2. Objectives

- Transform long textual content into **modern UI sections**
- Improve readability and structure
- Introduce visual hierarchy and spacing
- Use components (cards, grids, highlights)
- Maintain consistency with homepage design system
- Keep the content EXACTLY as provided (no rewriting)

---

## 3. Scope

### In Scope

- Multiple new sections for About page
- Content structuring and layout redesign
- Use of decorative elements (blobs, subtle backgrounds)
- Typography and spacing improvements
- Responsive design

### Out of Scope

- Changing content wording
- Backend/CMS
- Complex animations (keep subtle)

---

## 4. Content Sections Breakdown

---

## 4.1 Section: Basic Advantages of Admixtures

### Content:

- Title: “Basic advantages of admixtures”
- Bullet list (7 items)

### Layout Requirements:

- Centered title
- List displayed in **2-column grid (desktop)**
- Each item styled as:
  - Bullet OR icon + text
  - Optional card-style items

### Design Enhancements:

- Use icons or subtle markers instead of plain bullets
- Add spacing between items
- Optional soft background (light gray or gradient)

---

## 4.2 Section: What are Concrete Admixtures?

### Content:

- Title
- One descriptive paragraph

### Layout:

- Narrow centered text block (max-width for readability)
- Strong typography hierarchy

### Enhancements:

- Optional decorative blob background (low opacity)
- Slight emphasis styling (e.g., highlighted keywords optional)

---

## 4.3 Section: Types of Concrete Admixtures

### Content:

- Title
- Numbered list (8 items with descriptions)

### Layout Requirements:

⚠️ THIS IS A KEY REDESIGN SECTION

Instead of a long text block:

- Convert into **cards or structured blocks**

### Recommended Layout:

- Grid (2 columns desktop, 1 mobile)
- Each item:
  - Title (bold)
  - Description
  - Optional icon

### Design:

- Card-based layout
- Subtle shadows
- Clear spacing between items

---

## 4.4 Section: Summary / Explanation Block

### Content:

Paragraph starting with:
“Depending on the specific construction project…”

### Layout:

- Centered paragraph block
- Slightly emphasized (larger spacing or background)

### Purpose:

- Acts as a transition before technical section

---

## 4.5 Section: How Do Concrete Admixtures Work?

### Content:

Multiple structured paragraphs (each describing a type)

### Subsections:

- Plasticizers
- PCE Superplasticizers
- Retarding & Accelerating
- Bonding Admixtures
- Air-Entraining
- Complex Admixtures

---

### Layout Requirements:

⚠️ THIS SECTION MUST BE HIGHLY STRUCTURED

Instead of long paragraphs:

#### Option A (Preferred):

- Vertical list of **feature blocks**
- Each block:
  - Title
  - Description
  - Optional icon

#### Option B:

- Alternating layout (text blocks with subtle separators)

---

### Design Enhancements:

- Use spacing to separate blocks
- Optional icons per type
- Light background sections alternating (striped layout)

---

## 4.6 Final Section: Closing Statement

### Content:

Final paragraph:
“Our products redefine concrete production standards…”

### Layout:

- Highlighted section (important message)
- Centered or contained
- Optional:
  - Slight background color
  - Larger font size

---

## 5. Visual Design Guidelines

### General Style:

- Clean, modern, corporate
- Inspired by homepage sections
- Avoid dense text blocks

### Elements to Use:

- Cards
- Grid layouts
- Section spacing
- Subtle backgrounds
- Blob SVGs from `/assets` (low opacity)

---

## 6. Decorative Elements

Use:

- Blob SVG backgrounds (from `/assets`)
- Very subtle, non-intrusive
- Positioned behind sections (not text)

---

## 7. Typography

- Clear hierarchy:
  - Section titles (large, bold)
  - Subtitles (medium)
  - Body text (readable, not too wide)
- Limit line width for readability

---

## 8. Responsiveness

### Desktop:

- Multi-column layouts (grid/cards)

### Tablet:

- Reduced columns (2 → 1 where needed)

### Mobile:

- Single column
- Increased spacing
- Maintain readability

---

## 9. Reusability

- Sections should be modular components
- Cards reusable across other pages
- Avoid hardcoding layouts

---

## 10. UX Considerations

- Content must be easy to scan
- Avoid overwhelming user with text
- Use spacing and grouping
- Maintain flow between sections

---

## 11. Success Criteria

- Page feels modern and premium (not text-heavy)
- Content is clearly structured and readable
- Visual consistency with homepage
- Fully responsive
- Components reusable
- Decorative elements enhance (not distract)
