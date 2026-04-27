import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enAdmixtures from './locales/en/admixtures.json';
import enContact from './locales/en/contact.json';
import enLabTests from './locales/en/labTests.json';
import enOffer from './locales/en/offer.json';
import enEuProjects from './locales/en/euProjects.json';

import plCommon from './locales/pl/common.json';
import plHome from './locales/pl/home.json';
import plAbout from './locales/pl/about.json';
import plAdmixtures from './locales/pl/admixtures.json';
import plContact from './locales/pl/contact.json';
import plLabTests from './locales/pl/labTests.json';
import plOffer from './locales/pl/offer.json';
import plEuProjects from './locales/pl/euProjects.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        about: enAbout,
        admixtures: enAdmixtures,
        contact: enContact,
        labTests: enLabTests,
        offer: enOffer,
        euProjects: enEuProjects,
      },
      pl: {
        common: plCommon,
        home: plHome,
        about: plAbout,
        admixtures: plAdmixtures,
        contact: plContact,
        labTests: plLabTests,
        offer: plOffer,
        euProjects: plEuProjects,
      },
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupLocalStorage: 'lang',
      lookupFromPathIndex: 0,
    },
    fallbackLng: 'pl',
    supportedLngs: ['pl', 'en'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
