import { createI18n } from 'vue-i18n';
import en from './locales/en.js';
import es from './locales/es.js';
import ar from './locales/ar.js';

const LOCALE_STORAGE_KEY = 'capcut_locale';
const supportedLocales = [
  { code: 'en', name: 'English', flag: 'us' },
  { code: 'es', name: 'Español', flag: 'es' },
  { code: 'ar', name: 'العربية', flag: 'ar' },
];

function getInitialLocale() {
  try {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved && supportedLocales.some((l) => l.code === saved)) return saved;
  } catch (_) {}
  const browser = (navigator.language || navigator.userLanguage || 'en').split('-')[0];
  if (supportedLocales.some((l) => l.code === browser)) return browser;
  return 'en';
}

const initialLocale = getInitialLocale();

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: initialLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    es,
    ar,
  },
});

export { supportedLocales, LOCALE_STORAGE_KEY };
export default i18n;
