export type Lang = 'pl' | 'en';

export const SUPPORTED_LANGS: Lang[] = ['pl', 'en'];
export const DEFAULT_LANG: Lang = 'pl';

const routeSegments = {
  home:            { pl: '',                             en: '' },
  aboutAdmixtures: { pl: 'o-domieszkach',                en: 'about-admixtures' },
  aboutUs:         { pl: 'o-nas',                        en: 'about-us' },
  offerLabTests:   { pl: 'oferta/badania-laboratoryjne', en: 'offer/laboratory-tests' },
  offerAdmixtures: { pl: 'oferta/domieszki',             en: 'offer/concrete-admixtures' },
  contact:         { pl: 'kontakt',                      en: 'contact' },
  euProjects:      { pl: 'projekty-unijne',              en: 'eu-projects' },
} as const;

export const routes = Object.fromEntries(
  Object.entries(routeSegments).map(([key, localizedSegments]) => [
    key,
    Object.fromEntries(
      Object.entries(localizedSegments).map(([lang, segment]) => [
        lang,
        segment ? `/${lang}/${segment}` : `/${lang}`,
      ]),
    ),
  ]),
) as {
  [Key in keyof typeof routeSegments]: Record<Lang, string>;
};

export type RouteKey = keyof typeof routeSegments;

/** Returns the route for the given key in the given language. */
export function getRoute(key: RouteKey, lang: Lang): string {
  return routes[key][lang];
}

/** Returns the localized route segment without the language prefix. */
export function getRouteSegment(key: RouteKey, lang: Lang): string {
  return routeSegments[key][lang];
}

export function getLangRoot(lang: Lang): string {
  return `/${lang}`;
}

export function getOfferLandingRoute(lang: Lang): string {
  return getRoute('offerLabTests', lang);
}

export function matchRoute(pathname: string): RouteKey | null {
  for (const key of Object.keys(routes) as RouteKey[]) {
    for (const lang of SUPPORTED_LANGS) {
      const route = routes[key][lang];
      if (route === pathname || pathname.startsWith(`${route}/`)) {
        return key;
      }
    }
  }

  return null;
}

/**
 * Given a current path and a target language, returns the equivalent path in
 * the target language by reversing the route map.
 */
export function switchLangRoute(currentPath: string, targetLang: Lang): string {
  const matchedRoute = matchRoute(currentPath);

  if (matchedRoute) {
    return routes[matchedRoute][targetLang];
  }

  // Fallback: just go to home in target lang
  return routes.home[targetLang];
}

export function getAlternateRoutes(currentPath: string): { lang: Lang; href: string }[] {
  const matchedRoute = matchRoute(currentPath);

  if (!matchedRoute) {
    return [];
  }

  return SUPPORTED_LANGS.map((lang) => ({
    lang,
    href: routes[matchedRoute][lang],
  }));
}

/** Extract language from a URL path prefix (/pl/... or /en/...) */
export function langFromPath(pathname: string): Lang | null {
  const segment = pathname.split('/')[1];
  if (segment === 'pl') return 'pl';
  if (segment === 'en') return 'en';
  return null;
}
