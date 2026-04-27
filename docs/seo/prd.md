# 📄 Product Requirements Document (PRD)

## SEO Strategy — NOWA Website (Laboratory & Chemical Admixtures)

---

## 1. Overview

This document defines a **complete SEO strategy and implementation requirements** for the NOWA website (construction laboratory & chemical admixtures for concrete).

The goal is to ensure that **every page achieves top-tier SEO performance**, both technically and content-wise, based on best practices for modern React/Vite applications.

---

## 2. Business Context

### Company Profile

- Construction laboratory
- Chemical admixtures for concrete (especially aerated concrete)
- B2B + industrial clients
- Market: Poland + international

---

## 3. SEO Objectives

- Rank for high-value industry keywords:

  - _chemical admixtures concrete_
  - _construction laboratory testing_
  - _beton komórkowy domieszki_
  - _badania laboratoryjne betonu_

- Generate inbound leads (contact forms)
- Build authority in construction/engineering niche
- Achieve strong visibility in both PL & EN markets

---

## 4. Core SEO Principles (CRITICAL)

### 4.1 Each Page = Independent SEO Unit

Every route must:

- Have unique `<title>`
- Have unique `<meta description>`
- Have structured content (H1–H3)
- Be indexable independently

➡️ In React apps, each route must behave like a full HTML document for crawlers ([CyberCraft Bangladesh][1])

---

### 4.2 Technical SEO Foundation

#### Mandatory:

- Dynamic meta tags (React Helmet Async)
- Sitemap.xml
- robots.txt
- hreflang (PL/EN)

#### Why:

- SPAs often fail indexing without proper setup ([Stackmatix][2])
- Meta + structured data are core ranking signals ([Spiral Compute][3])

---

## 5. Page-Level SEO Requirements

---

## 🏠 5.1 Home Page

### Title:

```
Chemical Admixtures & Construction Laboratory | NOWA
```

### Meta Description:

```
Professional construction laboratory and chemical admixtures for concrete. Improve durability, strength and efficiency with NOWA solutions.
```

### Keywords:

- chemical admixtures concrete
- construction laboratory
- admixtures for aerated concrete

### Content Structure:

- H1: Main value proposition
- H2: Services / Offer
- H2: About company
- H2: Benefits

---

## 🧪 5.2 About Admixtures Page

### Title:

```
Concrete Admixtures – Types, Benefits & Technology | NOWA
```

### Meta Description:

```
Learn how concrete admixtures improve strength, durability and efficiency. Discover types, benefits and applications in modern construction.
```

### SEO Focus:

- Long-form educational content
- Keyword-rich sections:

  - Types of admixtures
  - How they work
  - Benefits

---

## 🧑‍🔬 5.3 Laboratory Tests Page

### Title:

```
Construction Laboratory Testing Services | Concrete & Materials Analysis
```

### Meta Description:

```
Advanced laboratory testing of concrete and building materials. Ensure quality, compliance and performance with expert analysis.
```

### SEO Focus:

- Service-based keywords
- Local + technical intent

---

## 🧪 5.4 Admixtures Offer Page

### Title:

```
Chemical Admixtures for Concrete – Product Offer | NOWA
```

### Meta Description:

```
Explore high-quality chemical admixtures for concrete. Improve performance, reduce water usage and optimize production processes.
```

### SEO Focus:

- Product + category keywords
- Internal linking between products

---

## 📞 5.5 Contact Page

### Title:

```
Contact Construction Laboratory | NOWA
```

### Meta Description:

```
Contact NOWA laboratory for testing services and concrete admixtures. Get expert support and tailored solutions.
```

### SEO Focus:

- Local SEO
- Conversion optimization

---

## 🇪🇺 5.6 EU Projects Page

### Title:

```
EU Projects & Innovation in Construction | NOWA
```

### Meta Description:

```
Discover EU-funded projects implemented by NOWA. Innovation in construction materials and sustainable solutions.
```

---

## 6. Content SEO Requirements

### 6.1 Structure

Each page must:

- Have exactly **1 H1**
- Use H2/H3 hierarchy
- Include keywords naturally

---

### 6.2 Content Length

- Core pages: 800–2000+ words
- Avoid thin content (<300 words)

➡️ Content is a primary ranking signal ([Spiral Compute][3])

---

### 6.3 Keyword Strategy

#### Primary Keywords:

- concrete admixtures
- laboratory testing construction
- beton domieszki

#### Secondary:

- durability of concrete
- water reduction concrete
- construction materials testing

---

## 7. Technical SEO Implementation

---

### 7.1 Meta Tags (MANDATORY)

Each page must include:

```html
<title>...</title>
<meta name="description" content="..." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="..." />
```

---

### 7.2 Open Graph (Social SEO)

```html
<meta property="og:title" />
<meta property="og:description" />
<meta property="og:image" />
```

---

### 7.3 hreflang (CRITICAL for i18n)

```html
<link rel="alternate" hreflang="pl" href="/pl/..." />
<link rel="alternate" hreflang="en" href="/en/..." />
```

➡️ Helps Google show correct language version ([Wikipedia][4])

---

### 7.4 Sitemap

- Auto-generated
- Include all routes
- Separate entries for PL/EN

---

### 7.5 Structured Data (JSON-LD)

#### Required schemas:

- Organization
- Product (admixtures)
- FAQ (optional)
- Breadcrumb

---

## 8. Performance SEO

### Requirements:

- Lighthouse score > 90
- Fast LCP (<2.5s)
- Optimized images (WebP)

➡️ Core Web Vitals directly impact ranking ([Medium][5])

---

## 9. Internal Linking Strategy

- Link between:

  - Home → Offer → Products
  - Blog-style sections → Offer pages

- Use keyword-rich anchor text

---

## 10. URL Structure

- Clean, semantic URLs:

```
/en/about-us
/pl/o-nas
/en/laboratory-tests
```

- No query params
- No duplicates

---

## 11. Image SEO

- Alt text required
- Descriptive filenames:

  - `concrete-testing-lab.jpg`

- Lazy loading enabled

---

## 12. Conversion SEO (IMPORTANT)

Each page must include:

- CTA buttons
- Contact links
- Trust signals

---

## 13. Monitoring & Tools

- Google Search Console
- Google Analytics (GA4)
- Lighthouse audits
- Ahrefs / SEMrush (optional)

---

## 14. Developer Requirements

### MUST:

- Use SEO component wrapper
- Inject meta dynamically
- Follow route-based SEO config

### MUST NOT:

- Hardcode meta globally
- Duplicate titles/descriptions

---

## 15. Future Enhancements

- Blog for long-tail SEO
- Case studies (industrial projects)
- FAQ rich snippets
- Local SEO (Google Maps optimization)

---

## 16. Success Criteria

- Pages indexed in Google
- Ranking for target keywords
- Increased organic traffic
- Higher conversion rate

---

## 🔥 Key Takeaway

SEO in React is not automatic — it must be **engineered**:

- Proper meta tags
- Crawlable HTML
- Structured content
- Performance optimization

Without these, even a good UI will not rank.

---

[1]: https://ccbd.dev/blog/React-Developer-Tool-For-SEO?utm_source=chatgpt.com "React Developer Tool For SEO - CyberCraft Bangladesh"
[2]: https://www.stackmatix.com/blog/best-seo-practices-for-single-page-applications-spas?utm_source=chatgpt.com "Single-Page Application SEO: Complete Guide to Ranking ..."
[3]: https://www.spiralcompute.co.nz/react-seo-practices-optimize-practical-guide-for-developers/?utm_source=chatgpt.com "React SEO Practices Optimise: A Practical, Technical Guide"
[4]: https://en.wikipedia.org/wiki/Hreflang?utm_source=chatgpt.com "Hreflang"
[5]: https://utsavdesai26.medium.com/optimizing-react-apps-for-seo-in-2025-the-ultimate-guide-f3a7af1b1414?utm_source=chatgpt.com "Optimizing React Apps for SEO in 2025: The Ultimate Guide"
