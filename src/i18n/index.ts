import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import globalPT from './translations/pt/global.json';
import globalUS from './translations/us/global.json';

i18next
  .use(detector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: 'pt',
    resources: {
      pt: {
        global: globalPT,
      },
      en: {
        global: globalUS,
      },
    },
  });

export default i18next;
