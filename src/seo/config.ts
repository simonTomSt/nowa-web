import type { Lang, RouteKey } from '../i18n/routes';

export const SITE_URL = 'https://nowa.wielun.pl';
export const SITE_NAME = 'NOWA';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SeoEntry {
  title: Record<Lang, string>;
  description: Record<Lang, string>;
}

export const SEO_CONFIG: Record<RouteKey, SeoEntry> = {
  home: {
    title: {
      pl: 'Domieszki do betonu i laboratorium budowlane | NOWA',
      en: 'Chemical Admixtures & Construction Laboratory | NOWA',
    },
    description: {
      pl: 'Profesjonalne laboratorium budowlane i domieszki do betonu. Popraw trwałość, wytrzymałość i efektywność z rozwiązaniami NOWA.',
      en: 'Professional construction laboratory and chemical admixtures for concrete. Improve durability, strength and efficiency with NOWA solutions.',
    },
  },
  aboutAdmixtures: {
    title: {
      pl: 'Domieszki do betonu – Rodzaje, Korzyści i Technologia | NOWA',
      en: 'Concrete Admixtures – Types, Benefits & Technology | NOWA',
    },
    description: {
      pl: 'Dowiedz się, jak domieszki do betonu poprawiają wytrzymałość, trwałość i efektywność. Odkryj rodzaje, korzyści i zastosowania w nowoczesnym budownictwie.',
      en: 'Learn how concrete admixtures improve strength, durability and efficiency. Discover types, benefits and applications in modern construction.',
    },
  },
  aboutUs: {
    title: {
      pl: 'O nas – Laboratorium i Domieszki do Betonu | NOWA',
      en: 'About Us – Construction Laboratory & Concrete Admixtures | NOWA',
    },
    description: {
      pl: 'Poznaj firmę NOWA – specjalistów w zakresie domieszek do betonu komórkowego i badań laboratoryjnych materiałów budowlanych.',
      en: 'Meet NOWA – specialists in chemical admixtures for aerated concrete and laboratory testing of construction materials.',
    },
  },
  offerLabTests: {
    title: {
      pl: 'Badania Laboratoryjne Betonu i Materiałów Budowlanych | NOWA',
      en: 'Construction Laboratory Testing Services | Concrete & Materials Analysis',
    },
    description: {
      pl: 'Zaawansowane badania laboratoryjne betonu i materiałów budowlanych. Zapewnij jakość, zgodność i wydajność dzięki eksperckim analizom NOWA.',
      en: 'Advanced laboratory testing of concrete and building materials. Ensure quality, compliance and performance with expert analysis.',
    },
  },
  offerAdmixtures: {
    title: {
      pl: 'Domieszki Chemiczne do Betonu – Oferta Produktowa | NOWA',
      en: 'Chemical Admixtures for Concrete – Product Offer | NOWA',
    },
    description: {
      pl: 'Odkryj wysokiej jakości domieszki chemiczne do betonu. Popraw wydajność, zmniejsz zużycie wody i zoptymalizuj procesy produkcyjne.',
      en: 'Explore high-quality chemical admixtures for concrete. Improve performance, reduce water usage and optimize production processes.',
    },
  },
  contact: {
    title: {
      pl: 'Kontakt – Laboratorium Budowlane | NOWA',
      en: 'Contact Construction Laboratory | NOWA',
    },
    description: {
      pl: 'Skontaktuj się z laboratorium NOWA w sprawie usług badawczych i domieszek do betonu. Uzyskaj wsparcie ekspertów i dostosowane rozwiązania.',
      en: 'Contact NOWA laboratory for testing services and concrete admixtures. Get expert support and tailored solutions.',
    },
  },
  offerServices: {
    title: {
      pl: 'Usługi – Badania, Audyty i Technologia Produkcji | NOWA',
      en: 'Services – Laboratory, Audits & Production Technology | NOWA',
    },
    description: {
      pl: 'Kompleksowe usługi dla budownictwa i przemysłu: badania laboratoryjne, domieszki chemiczne, audyty zakładów, technologia produkcji, zamaszynowanie i dobór surowców.',
      en: 'Comprehensive services for construction and industry: laboratory testing, chemical admixtures, plant audits, production technology, machinery consulting and raw materials sourcing.',
    },
  },
  euProjects: {
    title: {
      pl: 'Projekty Unijne i Innowacje w Budownictwie | NOWA',
      en: 'EU Projects & Innovation in Construction | NOWA',
    },
    description: {
      pl: 'Odkryj projekty dofinansowane ze środków UE realizowane przez NOWA. Innowacje w materiałach budowlanych i zrównoważone rozwiązania.',
      en: 'Discover EU-funded projects implemented by NOWA. Innovation in construction materials and sustainable solutions.',
    },
  },
};
