import en from '../locales/en.json'
import ar from '../locales/ar.json'
import es from '../locales/es.json'

export default defineNuxtPlugin({
  name: 'i18n-messages',
  order: 1, // run after i18n module (default order 0)
  setup(nuxtApp) {
  const i18n = nuxtApp.$i18n as { setLocaleMessage?: (locale: string, messages: Record<string, unknown>) => void }
  if (i18n?.setLocaleMessage) {
    i18n.setLocaleMessage('en', en as Record<string, unknown>)
    i18n.setLocaleMessage('ar', ar as Record<string, unknown>)
    i18n.setLocaleMessage('es', es as Record<string, unknown>)
  }
  },
})
