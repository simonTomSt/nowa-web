import { useLocation } from 'react-router-dom';
import { useLocale } from './useLocale';
import { SEO_CONFIG } from '../seo/config';
import type { RouteKey } from '../i18n/routes';

export function useSeo(routeKey: RouteKey) {
  const { lang } = useLocale();
  const location = useLocation();
  const config = SEO_CONFIG[routeKey];

  return {
    title: config.title[lang],
    description: config.description[lang],
    canonical: location.pathname,
  };
}
