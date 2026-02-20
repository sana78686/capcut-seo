export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts',
    restructureDir: false,
    langDir: 'locales',
    bundle: { optimizeTranslationDirective: false },
    locales: [
      { code: 'en', iso: 'en', name: 'English', dir: 'ltr', file: 'en.json' },
      { code: 'ar', iso: 'ar', name: 'العربية', dir: 'rtl', file: 'ar.json' },
      { code: 'es', iso: 'es', name: 'Español', dir: 'ltr', file: 'es.json' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix',
    detectBrowserLanguage: { useCookie: true, cookieKey: 'capcut_locale' },
  },
  routeRules: {
    '/': { redirect: '/en' },
    '/privacy-policy': { redirect: '/en/privacy-policy' },
    '/about-us': { redirect: '/en/about-us' },
    '/contact-us': { redirect: '/en/contact-us' },
    '/disclaimer': { redirect: '/en/disclaimer' },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'CapCut Mod APK provides features such as no watermark, auto velocity, video background removal, no ads, strobe, 3D, Pro Stock Media Library, and shake effects.',
        },
      ],
      title: 'CapCut APK Free Download Latest Version For Android 2026',
    },
  },
  css: ['~/assets/theme.css'],
  vite: {
    css: {
      devSourcemap: true,
    },
  },
})
