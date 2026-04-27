import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { type Lang, type RouteKey, getRoute, switchLangRoute, SUPPORTED_LANGS, DEFAULT_LANG } from '../i18n/routes';

export function useLocale() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();

  const currentLang: Lang = (SUPPORTED_LANGS.includes(lang as Lang) ? lang : DEFAULT_LANG) as Lang;

  function switchLang(targetLang: Lang) {
    const newPath = switchLangRoute(window.location.pathname, targetLang);
    void i18n.changeLanguage(targetLang);
    localStorage.setItem('lang', targetLang);
    navigate(newPath);
  }

  return {
    lang: currentLang,
    switchLang,
    getRoute: (key: RouteKey) => getRoute(key, currentLang),
  };
}
