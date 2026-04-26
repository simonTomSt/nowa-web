# 📄 Product Requirements Document (PRD)

## Reusable Page Hero Section (Internal Pages)

---

## 1. Overview

The goal of this task is to create a **reusable Hero Section component** that will be used as the **top section across multiple internal pages**.

This component should replicate the design shown in the reference and will be first implemented on a new page:

👉 **Page:** `About Admixtures`

This Hero Section is a simplified version of the homepage hero, focused on:

- Page title
- Supporting description
- Background image

---

## 2. Objectives

- Create a reusable, configurable Hero component
- Ensure consistent design across all internal pages
- Allow dynamic content (title, description, background image)
- Maintain strong readability and visual hierarchy
- Integrate seamlessly with existing Header

---

## 3. Scope

### In Scope

- Reusable Hero component
- New page: `about-admixtures`
- Background image support
- Text overlay (title + description)
- Overlay for readability
- Responsive behavior

### Out of Scope

- Additional sections for the page (future PRDs)
- Animations beyond subtle effects
- CMS integration

---

## 4. Component Structure

### Hero Section Includes:

- Background image (full-width)
- Overlay layer (dark gradient or opacity)
- Content container:
  - Title (large heading)
  - Description (short paragraph)

---

## 5. Content Requirements

### Title:

- Large, bold heading
- Example: “About admixtures”

### Description:

- Short paragraph explaining the topic
- Max ~2–3 lines for readability

---

## 6. Layout Requirements

### General:

- Full-width section
- Content aligned inside global container
- Text aligned left

### Height:

- Large visual section (approx. 60–80vh)

### Background:

- Image must:
  - Cover entire section (`cover`)
  - Be centered
  - Scale responsively

---

## 7. Overlay (IMPORTANT)

To ensure readability:

- Add a **dark overlay layer** on top of the image
- Can be:
  - Gradient (preferred)
  - Semi-transparent dark background

### Requirements:

- Text must always be readable regardless of image
- Overlay should not completely hide the image

---

## 8. Design Requirements

### Typography:

- Title:
  - Very large
  - Bold
  - White color
- Description:
  - Smaller
  - Slightly muted white

### Spacing:

- Proper vertical centering or slightly offset (upper-middle)
- Consistent padding inside container

---

## 9. Reusability (CRITICAL)

The component must be fully configurable via props:

### Required Props:

- `title`
- `description`
- `backgroundImage`

### Optional Enhancements:

- overlay intensity
- alignment (left/center)

---

## 10. Integration — About Admixtures Page

### Page Requirements:

- Create new page: `about-admixtures`
- Use global layout (Header + Footer)
- Insert Hero Section as the first component

### Content for this page:

- Title: “About admixtures”
- Description: (based on screenshot/reference)
- Background image: architecture/industrial image from assets

---

## 11. Responsiveness

### Desktop:

- Large hero height
- Text aligned left

### Tablet:

- Slightly reduced font sizes
- Maintain spacing

### Mobile:

- Reduced height
- Text stacked with proper spacing
- Maintain readability
- Background properly scaled

---

## 12. Assets

Use assets from `/assets`:

- Background images (different per page)

Images must:

- Be optimized
- Maintain quality across resolutions

---

## 13. UX Considerations

- Immediate clarity of page context
- Strong contrast for readability
- Consistent experience across all pages
- Smooth transition from header to hero

---

## 14. Success Criteria

- Hero matches reference design visually
- Component is reusable across pages
- Works with different images and text
- Fully responsive
- Text remains readable in all scenarios
- Proper integration on `about-admixtures` page
