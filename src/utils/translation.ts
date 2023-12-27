import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../db/translation/eng.json';
import uaTranslation from '../db/translation/ua.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: uaTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    keySeparator: false, // allows for nested translations
    interpolation: {
      escapeValue: false, // react already safe from xss
    },
  });

export default i18n;
