# 📄 Product Requirements Document (PRD)

## Internationalization (i18n) — React 19 + Vite

---

## 1. Overview

The goal is to implement **full internationalization (i18n)** for the application with support for:

- 🇵🇱 Polish (default / primary)
- 🇬🇧 English

The system must:

- Detect user language from browser
- Allow manual switching (footer)
- Support **localized routes** (SEO-friendly)
- Scale for future languages

---

## 2. Objectives

- Enable multilingual UI (PL + EN)
- Implement **language-aware routing**
- Ensure consistent translations across all components
- Maintain good SEO (localized URLs)
- Keep implementation scalable and maintainable

---

## 3. Scope

### In Scope

- Translation system setup
- Language detection
- Language switcher (footer)
- Route localization
- Translation files structure
- SEO-friendly URLs

### Out of Scope

- CMS translation management
- RTL support (future)
- Dynamic content translations (API)

---

## 4. Tech Stack

- React 19

- Vite

- TypeScript

- Recommended libraries:

  - `react-i18next`
  - `i18next`
  - `i18next-browser-languagedetector`

- Routing:

  - `react-router-dom` (or equivalent)

---

## 5. Supported Languages

| Language | Code | Default |
| -------- | ---- | ------- |
| Polish   | `pl` | ✅ YES  |
| English  | `en` | ❌      |

---

## 6. URL Structure (CRITICAL)

We use **localized routes instead of query params**.

### Recommended Approach:

Use prefixes for both languages:

- `/pl/...`
- `/en/...`

---

### Example Routes:

| Page        | Polish URL            | English URL       |
| ----------- | --------------------- | ----------------- |
| Home        | `/pl`                 | `/en`             |
| About       | `/pl/o-nas`           | `/en/about-us`    |
| Contact     | `/pl/kontakt`         | `/en/contact`     |
| Admixtures  | `/pl/domieszki`       | `/en/admixtures`  |
| EU Projects | `/pl/projekty-unijne` | `/en/eu-projects` |

---

## 7. Route Mapping System

Create a **central route dictionary**:

```ts
const routes = {
  home: {
    pl: "/pl",
    en: "/en",
  },
  about: {
    pl: "/pl/o-nas",
    en: "/en/about-us",
  },
  contact: {
    pl: "/pl/kontakt",
    en: "/en/contact",
  },
};
```

### Requirements:

- All navigation must use this mapping
- No hardcoded paths in components

---

## 8. Language Detection

Use:

- `i18next-browser-languagedetector`

### Detection Order:

1. URL (highest priority)
2. LocalStorage (saved preference)
3. Browser language (`navigator.language`)
4. Fallback → `pl`

### Behavior:

- `/en/...` → force English
- `/pl/...` → force Polish
- No prefix → redirect to detected language

---

## 9. Language Switcher (Footer)

### UI:

- 🇵🇱 Polish
- 🇬🇧 English

### Behavior:

- Switch language
- Redirect to equivalent route

### Example:

`/pl/o-nas` → `/en/about-us`

---

## 10. Translation Structure

```
/src/i18n/
  ├── index.ts
  ├── locales/
  │   ├── en/
  │   │   ├── common.json
  │   │   ├── home.json
  │   │   ├── about.json
  │   │   └── contact.json
  │   ├── pl/
  │       ├── common.json
  │       ├── home.json
  │       ├── about.json
  │       └── contact.json
```

### Namespace Strategy:

- `common` → shared UI
- page-based namespaces

---

## 11. Translation Usage

```ts
const { t } = useTranslation("home");
t("hero.title");
```

### Rules:

- No hardcoded text
- All UI must use translations

---

## 12. SEO Requirements

- Localized URLs
- `<html lang="pl">` / `<html lang="en">`
- `hreflang` tags

```html
<link rel="alternate" hreflang="pl" href="/pl/o-nas" />
<link rel="alternate" hreflang="en" href="/en/about-us" />
```

---

## 13. Persistence

- Store language in `localStorage`
- Key: `lang`

---

## 14. Fallback Strategy

- Missing translation fallback:

  - same language OR
  - default → Polish

---

## 15. Performance

- Lazy load translations (optional)
- Avoid loading all namespaces

---

## 16. Developer Guidelines

### DO:

- Use route dictionary
- Use `t()`
- Keep keys structured

### DON'T:

- Hardcode strings
- Hardcode routes

---

## 17. Future Extensions

- More languages
- CMS integration
- SSR support

---

## 18. Success Criteria

- Language switching works everywhere
- URLs are localized
- Detection works correctly
- No hardcoded strings
- Scalable structure
