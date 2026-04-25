# 📄 Product Requirements Document (PRD)

## Homepage — Feature / Value Proposition Sections (Advanced Split Sections)

---

## 1. Overview

The goal of this task is to implement a **larger, visually rich homepage section composed of two advanced split-layout blocks**.

These sections highlight:

1. Product advantages (chemical admixtures)
2. Laboratory services

They should follow previous sections and introduce a more **dynamic, modern, and premium visual style** using:

- Background blob SVGs
- Floating content cards
- Modern shadows and layering

Design reference:  
https://nowa.wielun.pl/en/

---

## 2. Objectives

- Present key value propositions in a visually engaging way
- Break monotony of previous sections with more dynamic layouts
- Introduce depth using overlays, cards, and shadows
- Maintain strong readability and UX clarity
- Ensure responsiveness and scalability

---

## 3. Scope

### In Scope

- Two split sections (stacked vertically)
- Image + content layout (alternating sides)
- Floating info cards on images
- Feature highlights (icons + labels)
- CTA buttons
- Background decorative blobs (SVG from `/assets`)
- Modern shadow system

### Out of Scope

- Navigation to detailed pages (can be stubbed)
- Animations beyond subtle hover effects
- Backend integration

---

## 4. Section Structure

This block consists of **two sub-sections**:

---

### 4.1 Section A — Product Value Proposition

#### Layout:

- Left: Text content
- Right: Image with floating card

#### Content:

- Title (e.g., “Why are our chemical admixtures for concrete the best choice?”)
- Description paragraph
- Feature highlights (2 items):
  - Greater Endurance
  - Water Reduction
- CTA button (“More properties”)

#### Image Area:

- Large image
- Floating card overlay:
  - Title: “Individual Approach”
  - Short description

---

### 4.2 Section B — Laboratory Services

#### Layout:

- Left: Image with floating card
- Right: Text content

#### Content:

- Title (e.g., “Laboratory tests of building materials”)
- Description paragraph
- Feature highlights (2 items):
  - Maintaining Standards and Norms
  - Product Quality Control
- CTA button (“Full offer of tests”)

#### Image Area:

- Large image
- Floating card overlay:
  - Title: “Professional measuring equipment”
  - Short description

---

## 5. Visual & Design Requirements

### 5.1 General Style

- Modern, clean, slightly more “premium” than previous sections
- Strong use of spacing and layering
- Clear separation between subsections

---

### 5.2 Floating Cards

- Positioned partially overlapping images
- Rounded corners
- Elevated using modern shadows
- Background: primary brand color (blue)
- Text: white

### Shadow Requirements:

- Soft, diffused shadows (not harsh)
- Multiple layers for depth (subtle elevation effect)

---

### 5.3 Background Blobs (IMPORTANT)

Use **blob SVG shapes from `/assets`** as decorative elements.

#### Requirements:

- Positioned behind content sections
- Low opacity
- Organic shapes to break rigid layout
- Must not interfere with readability

#### Placement Ideas:

- Behind text block in Section A
- Behind image block in Section B
- Slight offset positioning (not centered)

---

### 5.4 Images

- Rounded corners
- High quality
- Maintain aspect ratio
- Proper scaling across breakpoints

---

## 6. Feature Highlights

Each section includes **two feature items**:

### Structure:

- Icon
- Short title

### Layout:

- Horizontal alignment (desktop)
- Vertical stacking (mobile)

---

## 7. CTA Buttons

Each subsection includes a CTA:

- Section A: “More properties”
- Section B: “Full offer of tests”

### Style:

- Secondary button style (outlined or subtle fill)
- Consistent with previous sections
- Hover interaction

---

## 8. Responsiveness

### Desktop:

- Alternating two-column layouts
- Floating cards positioned over images
- Blob backgrounds visible

### Tablet:

- Reduced spacing
- Maintain layout if possible

### Mobile:

- Stacked layout:
  - Image
  - Floating card (adjusted position)
  - Content
- Blobs may be simplified or repositioned
- Maintain readability and spacing

---

## 9. Assets

Use assets from `/assets`:

- Section images (lab / materials)
- Blob SVG shapes (decorative backgrounds)
- Icons for features

Assets must:

- Be optimized for performance
- Scale correctly across devices

---

## 10. Reusability & Architecture

- Each subsection should be a reusable component (e.g., “SplitFeatureSection”)
- Support props for:
  - Layout direction (left/right)
  - Title, description
  - Features list
  - Image
  - Floating card content
- Avoid hardcoding layout logic

---

## 11. UX Considerations

- Maintain readability despite complex visuals
- Ensure floating elements do not overlap critical content
- Keep interactions intuitive
- Preserve visual hierarchy

---

## 12. Success Criteria

- Sections visually match or improve upon reference design
- Blob backgrounds are implemented subtly and correctly
- Floating cards appear modern and well-positioned
- Fully responsive across devices
- Clear content hierarchy and readability
- Components are reusable and configurable
