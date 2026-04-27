# 📄 Product Requirements Document (PRD)

## EU Projects Page (Full Redesign)

---

## 1. Overview

The goal of this task is to design and implement a **modern, structured, and professional EU Projects page**, based on:

👉 https://nowa.wielun.pl/en/projekty-unijne/

⚠️ **Critical requirement:**  
The current page is:

- a single long text block
- visually outdated
- lacks hierarchy and storytelling

We are redesigning it into a **clear, credible, and visually strong presentation of EU-funded projects**.

---

## 2. Objectives

- Present EU-funded projects in a **professional and trustworthy way**
- Improve readability of complex project data
- Structure content into **clear sections and blocks**
- Highlight funding, impact, and credibility
- Maintain consistency with the rest of the website

---

## 3. Scope

### In Scope

- Full redesign of the page
- Structured project presentation
- Visual hierarchy improvements
- Branding (EU logos integration)
- Decorative elements (blobs, cards)

### Out of Scope

- Multiple projects system (for now → single project)
- Backend / CMS

---

## 4. Page Structure (NEW)

1. Hero Section (reuse)
2. Intro Section
3. Project Overview Card (MAIN BLOCK)
4. Project Details (structured)
5. Financial Summary
6. CTA / Trust Section

---

## 5. Section 1 — Hero

### Content:

- Title: “EU projects”

### Design:

- Background image (corporate / planning / documents)
- Dark overlay
- Text aligned left

---

## 6. Section 2 — Intro

### Title:

“EU Funds – Implemented Projects”

### Layout:

- Centered heading
- Optional short description

---

## 7. Section 3 — Project Overview Card (CORE SECTION)

⚠️ THIS IS THE MOST IMPORTANT PART

---

### Content (USE EXACT TEXT):

**Project Title:**
“Implementation of own results of R&D work on the development of small-size masonry elements and innovative insulating wall materials”

**Program Context:**
“as part of the competition number RPLD.02.03.01-IP.02-10-080/22 announced under the regional operational program of the Łódź Voivodeship for 2014-2020 PRIORITY AXIS II: INNOVATIVE AND COMPETITIVE ECONOMY MEASURE II.3: INCREASING THE COMPETITIVENESS OF SMEs SUB-MEASURE II.3.1: INNOVATION IN SMEs”

---

### Layout:

Instead of plain text:

- Use a **large centered card**
- Include:
  - EU logos row (top)
  - Title
  - Description

---

### Design:

- Card with:
  - rounded corners
  - soft shadow
  - padding
- Clean spacing between sections

---

## 8. Section 4 — Project Details

### Content (USE EXACT TEXT):

**Project goal:**

“The aim of the project is to increase the company’s competitiveness on the domestic market by proposing a solution that is currently not offered by any other entity in Poland. As a result of the project, the Applicant plans to implement proprietary solutions that were developed in a laboratory belonging to the Company. The project result is in line with current market trends regarding pro-environmental solutions and is a response to market problems, including the growing challenges of thermal modernization and the lack of ecological and economic alternatives in the production of wall and insulation materials. The result will be dedicated to both individual clients and companies, including: the entire market of wall and insulation materials (including wholesalers and developers). The project assumes the implementation of two tasks: purchase of fixed assets and purchase of software. Locating the project in the province Łódź Province. In addition to product/process innovation, the project assumes the use of information and communication technologies (ICT) and takes into account environmental aspects. The investment is carried out by a micro-enterprise and is located in a rural area.”

---

### Layout:

- Split into readable paragraphs
- Possibly:
  - 2-column layout (desktop)
  - single column (mobile)

---

## 9. Section 5 — Financial Summary

### Content (USE EXACT TEXT):

- Total expenses for the project implementation:  
  Total expenses: PLN 1,433,023.80

- Eligible expenses: PLN 1,165,060.00

- Funding: PLN 879,969.82

---

### Layout:

- Display as **stat cards** or highlighted blocks

### Example:

- 3 cards in row:
  - Total cost
  - Eligible cost
  - Funding

---

## 10. Section 6 — Timeline & Info

### Content:

- Project implementation deadline:  
  01/04/2023 – 31/12/2023

- Link:  
  www.mapadotacji.gov.pl

---

### Layout:

- Simple info block
- Could include icon (calendar, link)

---

## 11. Section 7 — Visual & Branding Elements

### EU Logos:

- Must be displayed prominently
- Positioned at top of main card

---

### Decorative Elements:

Use `/assets`:

- Blob SVGs

### Rules:

- Low opacity
- Positioned behind main card
- Enhance visual depth

---

## 12. Design Guidelines

### Style:

- Clean, corporate, official
- Trust-focused
- Structured

---

### Components:

- Cards
- Grid layouts
- Info blocks

---

## 13. Typography

- Strong hierarchy:
  - Title → large bold
  - Section headers → medium
  - Body → readable

---

## 14. Responsiveness

### Desktop:

- Centered card layout
- Multi-column stats

### Tablet:

- Reduced spacing

### Mobile:

- Single column
- Cards stacked

---

## 15. UX Improvements vs Original

### Original:

- One large text block
- No hierarchy
- Poor readability

---

### New:

- Structured sections
- Card-based layout
- Clear financial data
- Better storytelling

---

## 16. Reusability

Components:

- ProjectCard
- StatsGrid
- InfoBlock

Reusable for:

- future EU projects
- case studies

---

## 17. Success Criteria

- Page looks modern and professional
- Content is easy to read and scan
- EU branding is clear and visible
- Financial data is highlighted
- Fully responsive
- Strong improvement over original
