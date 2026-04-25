# 📄 Product Requirements Document (PRD)

## Global Website Layout (Header + Footer)

---

## 1. Overview

The goal of this task is to design and implement a **reusable global layout** for a corporate website. This layout will serve as the foundation for all pages and must ensure visual consistency, responsiveness, and scalability.

The implementation should be inspired by the existing website:  
https://nowa.wielun.pl/en/

The layout consists of three primary sections:

- Header (navigation)
- Main content container
- Footer (with additional branding strip)

---

## 2. Objectives

- Create a consistent and reusable layout structure across the entire application
- Ensure responsive behavior across desktop, tablet, and mobile devices
- Maintain alignment with the provided visual reference (screenshots and existing website)
- Use a modern component-based architecture
- Leverage HeroUI components where applicable

---

## 3. Scope

### In Scope

- Header component
- Footer component
- Global layout wrapper
- Shared content container
- Responsive behavior
- Integration of provided assets

### Out of Scope

- Individual page content
- Backend integrations
- CMS functionality

---

## 4. Technical Stack

- React (Vite)
- TypeScript
- Tailwind CSS
- HeroUI component library

---

## 5. Layout Structure

The application must include a global layout wrapper used across all pages. The structure should follow:

- Header (top navigation)
- Main content area (wrapped in a consistent container)
- Footer (multi-column layout)
- Bottom branding strip (EU logos)

---

## 6. Global Container

A shared container must be implemented to ensure consistent alignment and spacing across all sections.

### Requirements:

- Fixed maximum width for content (centered layout)
- Consistent horizontal padding across breakpoints
- Reusable across Header, Main content, and Footer
- Prevent content from stretching full width on large screens

---

## 7. Header Requirements

### Structure:

- Left: Company logo
- Center/Right: Navigation menu
- Right: EU logo (branding requirement)

### Navigation Items:

- About admixtures
- Offer (dropdown menu)
- About us
- Contact

### Functional Requirements:

- Sticky positioning at the top of the page (preferred)
- Responsive behavior with mobile menu (hamburger)
- Dropdown support for nested navigation (Offer)

### Design Requirements:

- Clean and minimal layout
- Alignment consistent with container
- Optional transparency or subtle background styling

---

## 8. Footer Requirements

### Structure:

Footer should be divided into three columns on desktop:

#### Column 1:

- Company logo
- Contact details (phone, email)
- Language indicator (Polish)

#### Column 2:

- Navigation section (“Learn more”)
- List of internal links:
  - About admixtures
  - Offer
  - About us
  - Contact
  - Privacy policy

#### Column 3:

- Social section (“Follow Us”)
- Short descriptive text
- Social media icons (Facebook, LinkedIn)

---

## 9. Bottom Branding Strip

A separate section below the footer must display official EU-related branding.

### Requirements:

- Full-width section
- Light background for contrast
- Centered image containing multiple logos
- Proper vertical spacing
- Uses asset provided in `/assets`

---

## 10. Assets

All required visual assets are preloaded in the `/assets` directory:

- Company logo
- EU logo (header)
- EU branding strip (footer bottom)

These must be correctly integrated into the layout.

---

## 11. Responsiveness

The layout must adapt across devices:

### Desktop:

- Multi-column footer
- Full navigation visible

### Tablet:

- Adjusted spacing and alignment

### Mobile:

- Collapsible navigation (hamburger menu)
- Stacked footer layout
- Proper scaling of images and icons

---

## 12. Reusability & Maintainability

- Layout must be reusable across all pages
- Components should be modular and independently maintainable
- Avoid duplication of layout logic
- Ensure easy extension for future sections

---

## 13. UX Considerations

- Clear navigation hierarchy
- Accessible interaction patterns (e.g., dropdowns, links)
- Consistent spacing and typography
- Visual alignment with corporate branding

---

## 14. Success Criteria

- Layout matches the structure and feel of the reference website
- Fully responsive across major breakpoints
- All assets are correctly displayed
- Navigation is functional and intuitive
- Layout can be reused across multiple pages without modification
