# 📄 Product Requirements Document (PRD)

## Contact Page (Full Redesign)

---

## 1. Overview

The goal of this task is to design and implement a **modern, clean, and conversion-focused Contact page**, based on:

👉 https://nowa.wielun.pl/en/kontakt/

⚠️ **Critical requirement:**  
The current page is:

- visually outdated
- very basic
- lacks hierarchy and engagement

We are redesigning it into a **modern, structured, and user-friendly experience** that:

- builds trust
- makes contact effortless
- looks premium and consistent with the rest of the site

---

## 2. Objectives

- Present contact information in a **clear and attractive way**
- Improve usability of the contact form
- Introduce better visual hierarchy
- Increase conversions (contact submissions)
- Maintain consistency with homepage and design system

---

## 3. Scope

### In Scope

- Full page redesign
- Contact information section
- Map integration
- Contact form
- CTA improvements
- Visual enhancements (cards, blobs, shadows)

### Out of Scope

- Backend form handling
- CRM/email integration

---

## 4. Page Structure (NEW)

1. Hero Section (reuse)
2. Contact Info Cards
3. Map Section
4. Contact Form Section
5. Optional CTA / Trust Section

---

## 5. Section 1 — Hero (Reusable)

### Content:

- Title: “Contact”
- Description:
  “Contact us and get support, answers to your questions and solutions to your problems. We are here for you!”

### Design:

- Full-width background image (construction/industrial)
- Dark overlay
- Text aligned left

---

## 6. Section 2 — Contact Details (KEY REDESIGN)

### Content (USE EXACT DATA):

- Address:  
  Południowa 78 Street  
  98-324 Wierzchlas  
  Poland

- Phone:  
  +48 783 366 742

- Email:  
  nowa@home.pl

- NIP:  
  8291181015

---

### Layout:

#### Desktop:

- 4 cards in a row

#### Tablet:

- 2x2 grid

#### Mobile:

- stacked cards

---

### Card Structure:

- Icon (top)
- Label (e.g., Address)
- Value (text)

---

### Design:

- Card-based UI
- Rounded corners
- Soft shadows
- Hover effect (subtle lift)
- Clean spacing

---

## 7. Section 3 — Map Section

### Purpose:

- Show physical location
- Increase trust

---

### Requirements:

- Full-width embedded map (Google Maps or similar)
- Marker on company location

---

### Design:

- Minimal UI (no heavy borders)
- Slight grayscale or styled map (optional)
- Rounded edges (optional modern touch)

---

## 8. Section 4 — Contact Form (IMPORTANT)

### Content:

Fields:

- Email input
- Message textarea

Checkbox:

- GDPR consent (required)

Text:
“Zgadzam się na przechowywanie przesłanych przeze mnie informacji w tej witrynie internetowej do celów udzielenia odpowiedzi na moje zapytanie.”

Button:

- “Send”

---

### Layout:

#### Desktop:

- Centered form (max-width container)

#### Mobile:

- Full width with padding

---

### Design:

- Clean modern inputs
- Rounded fields
- Focus states (important)
- Proper spacing

---

### UX Improvements:

- Clear validation states
- Better label clarity
- Optional success message (future)

---

## 9. Section 5 — Optional CTA / Trust Section

### Purpose:

Encourage contact

---

### Example Content:

“Have a question or need support?”

Button:

- “Contact us”
- or “Call now”

---

### Design:

- Highlighted background (brand color or subtle gradient)
- Centered content

---

## 10. Visual Design Guidelines

### Style:

- Modern, minimal, corporate
- Clean layout
- Strong spacing

---

### Use:

- Cards
- Grid layouts
- Icons
- Soft shadows

---

## 11. Decorative Elements

Use `/assets`:

- Blob SVG shapes

### Rules:

- Low opacity
- Positioned in background (e.g., behind cards)
- Do not interfere with content

---

## 12. Typography

- Clear hierarchy:
  - Section titles → large
  - Labels → medium
  - Content → readable

---

## 13. Responsiveness

### Desktop:

- Multi-column layout

### Tablet:

- Reduced columns

### Mobile:

- Stacked layout
- Large tap targets

---

## 14. UX Improvements vs Original

### Original:

- Flat layout
- Weak visual hierarchy
- Basic form

---

### New:

- Card-based contact info
- Clear structure
- Better form usability
- Strong visual identity

---

## 15. Reusability

Components to create:

- ContactCard
- ContactGrid
- ContactForm
- MapSection

Reusable across:

- footer
- other landing pages

---

## 16. Success Criteria

- Page looks modern and premium
- Contact info is easy to find
- Form is easy to use
- Fully responsive
- Clear improvement over original design
- Consistent with overall UI system
