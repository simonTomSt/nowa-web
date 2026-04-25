# 📄 Product Requirements Document (PRD)

## Homepage — “Who We Are” Section

---

## 1. Overview

The goal of this task is to implement the **“Who We Are” section** on the Homepage.

This section provides a concise introduction to the company, highlighting experience, values, and positioning. It follows the Services section and continues building trust and credibility.

The design should be based on:  
https://nowa.wielun.pl/en/

---

## 2. Objectives

- Present company identity and credibility
- Build trust through clear messaging
- Maintain strong visual contrast and hierarchy
- Introduce a visually engaging split layout (image + content)
- Ensure consistency with the overall homepage design

---

## 3. Scope

### In Scope

- “Who We Are” section component
- Two-column layout (image + content)
- Background styling (colored panel)
- Decorative dots element (SVG from `/assets`)
- CTA button
- Responsive behavior

### Out of Scope

- Navigation to detailed “About” page (can be stubbed)
- Animations beyond simple hover effects
- Backend integration

---

## 4. Section Structure

The section should consist of:

- Left side: Image
- Right side: Content block (text + CTA)
- Decorative background element (dots SVG)

---

## 5. Content Requirements

### Title:

- “Who We Are?”

### Description:

- Paragraph describing:
  - Experience (e.g., 10+ years)
  - Industry focus (chemical admixtures, construction labs)
  - Values (innovation, creativity, commitment)

### CTA Button:

- Label: “Get to know us better”
- Positioned below text

---

## 6. Layout Requirements

### Desktop:

- Two-column layout:
  - Left: Image
  - Right: Content panel with colored background

### Content Panel:

- Background color: primary brand color (blue)
- Text: white or high-contrast
- Padding: generous spacing for readability

### Image:

- Rounded corners
- Covers container proportionally
- Positioned slightly overlapping or aligned with section edges (optional enhancement)

---

## 7. Decorative Element (IMPORTANT)

A **dots SVG pattern** from `/assets` must be used as a decorative background element.

### Requirements:

- Positioned on the left side (behind or near the image)
- Subtle visibility (low opacity)
- Must not interfere with readability
- Should enhance visual depth without distraction

---

## 8. Design Requirements

### Visual Style:

- Clean, modern, corporate
- Strong contrast between image and content panel
- Balanced spacing between elements

### Typography:

- Clear hierarchy:
  - Title (large, bold)
  - Paragraph (readable, medium size)

### CTA Button:

- Secondary style (outlined or subtle variant)
- Visible but less dominant than Hero CTA

---

## 9. Responsiveness

### Desktop:

- Side-by-side layout (image + content)

### Tablet:

- Reduced spacing
- Maintain two columns if possible

### Mobile:

- Stacked layout:
  - Image on top
  - Content below
- Dots SVG repositioned or hidden if needed
- Maintain readability and spacing

---

## 10. Assets

Use assets from `/assets`:

- Section image (team / collaboration related)
- Dots SVG pattern (decorative element)

Assets must:

- Be optimized for performance
- Scale properly across devices

---

## 11. Reusability & Extensibility

- Section should be modular and reusable
- Content should be easily editable (text, image, CTA)
- Layout should support reuse for similar sections in future

---

## 12. UX Considerations

- Clear and engaging storytelling
- Strong readability on colored background
- Visual balance between image and text
- CTA should be noticeable but not overpowering

---

## 13. Success Criteria

- Section matches reference design visually
- Decorative dots are correctly implemented
- Fully responsive across all devices
- Text remains readable in all conditions
- CTA is accessible and clearly visible
- Component is reusable and maintainable
