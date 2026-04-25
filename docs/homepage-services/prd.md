# 📄 Product Requirements Document (PRD)

## Homepage — Services / “What do we do?” Section

---

## 1. Overview

The goal of this task is to implement the **second section of the Homepage**, presenting the company’s core services.

This section should follow the Hero Section and provide a structured overview of what the company offers.

The design and content should be inspired by:  
https://nowa.wielun.pl/en/

This section plays a key role in:

- Explaining the company’s expertise
- Structuring offerings into clear categories
- Guiding users toward deeper exploration

---

## 2. Objectives

- Clearly communicate the company’s service areas
- Present information in a structured and scannable way
- Maintain visual consistency with the Hero and overall layout
- Encourage user interaction via a CTA
- Ensure responsiveness and accessibility

---

## 3. Scope

### In Scope

- Services section component
- Section header (title + description)
- CTA button
- Grid of service cards (6 items)
- Responsive layout

### Out of Scope

- Navigation to detailed service pages (can be stubbed)
- Backend or CMS integration
- Animations beyond basic hover effects

---

## 4. Section Structure

The section should include:

1. Section heading
2. Supporting description text
3. Call-to-action button
4. Grid of service cards (2 rows × 3 columns on desktop)

---

## 5. Content Requirements

### Section Header:

- Title: “What do we do?”
- Supporting paragraph describing company expertise

### CTA Button:

- Label: “Check Out Offer”
- Positioned below description
- Primary visual emphasis

---

## 6. Services Grid

### Structure:

- 6 service cards
- Grid layout:
  - Desktop: 3 columns
  - Tablet: 2 columns
  - Mobile: 1 column

### Each Card Includes:

- Icon (top)
- Title
- Short description

### Example Service Categories:

- Laboratory Tests
- Audit
- Admixtures
- Production Technology
- Machinery
- Raw Materials

---

## 7. Design Requirements

### Layout:

- Centered section content within global container
- Balanced spacing between elements
- Clear separation between header and grid

### Cards:

- Light background (contrast with page background)
- Rounded corners
- Subtle shadow for depth
- Consistent padding

### Icons:

- Simple, minimal, consistent style
- Positioned above the title

### Typography:

- Clear hierarchy:
  - Section title (large, bold)
  - Card titles (medium emphasis)
  - Descriptions (smaller, readable)

---

## 8. Styling Guidelines

- Maintain consistent spacing scale (Tailwind)
- Use grid layout for cards
- Ensure visual alignment with Hero section
- Keep design clean and uncluttered

---

## 9. Responsiveness

### Desktop:

- 3-column grid
- Spacious layout

### Tablet:

- 2-column grid
- Adjust spacing accordingly

### Mobile:

- Single-column layout
- Cards stacked vertically
- Maintain readability and spacing

---

## 10. Reusability & Extensibility

- Section should be implemented as a standalone component
- Card structure should be reusable (e.g., for other listings)
- Content should be easily configurable (data-driven preferred)

---

## 11. UX Considerations

- Easy to scan and understand quickly
- Logical grouping of services
- Clear visual hierarchy
- CTA should be noticeable but not overwhelming

---

## 12. Success Criteria

- Section visually matches reference design
- All 6 services are clearly presented
- Fully responsive across devices
- Cards are readable and visually distinct
- CTA is visible and accessible
- Component is reusable and easy to extend
