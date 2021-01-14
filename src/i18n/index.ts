import i18next from 'i18next';
import pt from './translations/pt-br/translations.json';
import us from './translations/us/translations.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'pt',
  resources: {
    pt,
    us,
  },
});

export default i18next;
