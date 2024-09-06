import pl from './locales/pl.json';
import en from './locales/en.json';

// You can use `defineI18nConfig` to get type inferences for options to pass to vue-i18n.
export default defineI18nConfig(() => {
  return {
    strategy: 'prefix_except_default',
    legacy: false,
    defaultLocale: 'pl',
    locales: ['en', 'pl'],
    messages: {
      pl,
      en,
    },
  };
});
