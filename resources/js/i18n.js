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
  // 1. From server-rendered data (URL-based locale: /en, /ar, /es)
  const appEl = document.getElementById('app');
  const dataLocale = appEl?.dataset?.locale;
  if (dataLocale && supportedLocales.some((l) => l.code === dataLocale)) return dataLocale;
  // 2. From URL pathname (e.g. /en or /en/about-us)
  const match = typeof window !== 'undefined' && window.location.pathname.match(/^\/(en|es|ar)(?:\/|$)/);
  if (match && supportedLocales.some((l) => l.code === match[1])) return match[1];
  // 3. From localStorage (user preference when no locale in URL)
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
