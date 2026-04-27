# 📄 Product Requirements Document (PRD)

## Offer Page — Services (Usługi) — Full Redesign

---

## 1. Overview

The goal is to create a **new “Services” (Usługi) page** as part of the Offer section, based on:

👉 https://nowa.wielun.pl/oferta/

⚠️ **Important:**

- The current implementation is **tab-based and outdated**
- Content is hidden and not SEO-friendly
- UX is weak and not scalable

👉 We are transforming this into a **modern, structured multi-section page**

---

## 2. Objectives

- Present all services as **clear, independent sections**
- Improve readability and SEO indexing
- Replace tabs with **scrollable sections**
- Build a modern, visually engaging layout
- Ensure consistency with the rest of the website

---

## 3. Scope

### In Scope

- New page: `/services` (EN) / `/pl/uslugi`
- Section-based layout (instead of tabs)
- Content restructuring
- Visual redesign

### Out of Scope

- Backend / CMS
- Dynamic filtering

---

## 4. Page Structure (NEW)

1. Hero Section (reuse)
2. Intro Section
3. Services Navigation (optional sticky)
4. Service Sections:

   - Laboratory Tests
   - Chemical Admixtures
   - Audit
   - Production Technology
   - Machinery (Zamaszynowanie)
   - Raw Materials (Surowce)

5. CTA Section

---

## 5. Section 1 — Hero

### Content:

- Title: “Our Services”
- Subtitle: “Comprehensive solutions for construction and industrial production”

### Design:

- Reusable hero component
- Background: industrial / lab
- Dark overlay
- Left-aligned content

---

## 6. Section 2 — Intro

### Content:

Short intro explaining full offer:

```text
We provide comprehensive services for construction and industrial production, including laboratory testing, chemical admixtures, audits, production technologies, machinery consulting and raw materials selection.
```

---

### Layout:

- Centered text
- Max width container
- Clean spacing

---

## 7. Section 3 — Services Navigation (Optional but Recommended)

### UI:

Horizontal menu:

- Laboratory Tests
- Chemical Admixtures
- Audit
- Production Technology
- Machinery
- Raw Materials

---

### Behavior:

- Scroll to section
- Highlight active section
- Sticky on scroll

---

## 8. Section 4 — Services Content

⚠️ IMPORTANT:
Each tab from old page → becomes **full section**

---

## 🧪 8.1 Laboratory Tests

### Content:

(Use existing content from lab tests page)

### Layout:

- Title
- Description
- Optional features grid
- CTA button

---

## 🧪 8.2 Chemical Admixtures

### Content:

(Reuse from admixtures page)

---

## 🧑‍🔬 8.3 Audit

### Content (USE EXACT TEXT):

```text
Nasza firma specjalizuje się w kompleksowych audytach zakładów przemysłowych i produkcyjnych. Działamy na rzecz naszych klientów, oferując profesjonalne usługi, które pomagają w analizie, ocenie i doskonaleniu działań przemysłowych oraz produkcyjnych zakładów. Nasz zespół doświadczonych specjalistów przeprowadza dokładne badania, identyfikując potencjalne obszary usprawnień i minimalizacji kosztów, co może przyczynić się do zwiększenia wydajności i rentowności działalności zakładu. Dzięki naszym usługom audytowym nasi klienci mogą skoncentrować się na rozwoju swojego biznesu, mając pewność, że ich zakłady działają efektywnie i zgodnie z obowiązującymi standardami oraz przepisami.
```

---

### Design:

- Two-column layout (text + image)
- Soft background blob
- Card-style container

---

## ⚙️ 8.4 Production Technology

### Content (USE EXACT TEXT):

```text
Nasza firma jest zorientowana na innowacje i pracuje nad dostarczeniem klientom zaawansowanych rozwiązań technologicznych, które mogą zrewolucjonizować ich procesy produkcyjne.

Nasza technologia produkcji jest efektem wieloletnich badań i rozwoju, dzięki czemu jesteśmy w stanie zapewnić naszym klientom wydajniejsze i bardziej zrównoważone rozwiązania. Nasz zespół ekspertów jest gotów pomóc klientom w dostosowaniu tej technologii do ich indywidualnych potrzeb, a także w procesie projektowania nowych rozwiązań produkcyjnych.

Naszym celem jest nie tylko dostarczanie narzędzi i technologii, ale także pełne wsparcie w procesie wdrażania, szkolenia personelu i monitorowania wyników. Dzięki temu nasi klienci mogą osiągnąć znaczący postęp w swojej produkcji, zyskując konkurencyjną przewagę i pozostając na czele działań innowacyjnych w swojej branży.
```

---

## 🏭 8.5 Machinery (Zamaszynowanie)

### Content (USE EXACT TEXT):

```text
Nasza firma doskonale rozumie, że inwestycje w nowoczesne maszyny i urządzenia są kluczowe dla sukcesu przedsiębiorstw przemysłowych. Dlatego też staramy się zapewnić naszym klientom pełne wsparcie w procesie zakupu i wdrożenia nowego sprzętu.

Nasi eksperci posiadają szeroką wiedzę na temat rynku maszyn przemysłowych oraz najnowszych trendów w dziedzinie automatyki i technologii produkcyjnych. Dzięki temu jesteśmy w stanie doradzić naszym klientom w wyborze odpowiednich rozwiązań, które najlepiej odpowiadają ich potrzebom i oczekiwaniom.

Nasza pomoc w zakupie zamaszynowania obejmuje także negocjacje cenowe, wybór dostawców, oraz monitorowanie procesu dostawy i instalacji. Chcemy zapewnić naszym klientom spokój i pewność, że ich inwestycje będą udane i przyniosą oczekiwane korzyści. Dzięki naszemu wsparciu, nasi klienci mogą efektywnie modernizować swoje zakłady, poprawiając konkurencyjność i efektywność produkcji.
```

---

## 🧱 8.6 Raw Materials (Surowce)

### Content (USE EXACT TEXT):

```text
Nasza firma nie tylko oferuje usługi audytów zakładów, nowoczesne technologie produkcji i wsparcie w zakupie zamaszynowania, ale także pomaga w doborze odpowiednich surowców. Rozumiemy, że jakość i dostępność surowców są kluczowymi czynnikami wpływającymi na jakość i efektywność produkcji przemysłowej.

Nasi eksperci ds. surowców posiadają głęboką wiedzę na temat rynku surowców i materiałów, a także rozumieją unikalne potrzeby każdego klienta. Wspólnie z naszymi klientami analizujemy ich procesy produkcyjne i wymagania, aby zidentyfikować najlepsze surowce dostępne na rynku, które spełnią ich oczekiwania pod względem jakości, trwałości i dostępności.

Nasza pomoc w doborze surowców obejmuje również negocjacje z dostawcami, analizę kosztów oraz monitorowanie jakości dostarczanych materiałów. Dzięki temu nasi klienci mogą być pewni, że wybierają surowce, które zoptymalizują procesy produkcyjne i przyczynią się do osiągnięcia doskonałych rezultatów. Nasza firma jest gotowa wesprzeć w doborze surowców, aby zapewnić naszym klientom konkurencyjność i sukces w ich branży.
```

---

## 9. Design Guidelines

### Style:

- Modern
- Industrial + clean
- Structured

---

### Visual Elements:

- Blob backgrounds (from assets)
- Soft shadows
- Cards
- Icons (optional)

---

### Layout:

- Alternate sections:

  - left image / right text
  - right image / left text

---

## 10. UX Improvements vs Original

### Old:

- Tabs (hidden content)
- Poor SEO
- Low engagement

---

### New:

- Full scrollable content
- SEO-friendly structure
- Better storytelling
- Visual hierarchy

---

## 11. SEO Requirements

Each section:

- Should include H2
- Keyword optimized

Example:

- “Industrial Audit Services”
- “Production Technology Solutions”

---

## 12. Responsiveness

### Desktop:

- 2-column layout

### Mobile:

- Stacked sections
- Reduced spacing

---

## 13. Reusability

Components:

- ServiceSection
- SectionHeader
- CTA block

---

## 14. Success Criteria

- All services visible without interaction
- SEO indexable content
- Modern look & feel
- Consistent with design system
- Easy navigation between services

---

## 🔥 Key Improvement

We are converting:
👉 tabs → into **full SEO landing sections**

This is a **major upgrade in both UX and SEO performance**
