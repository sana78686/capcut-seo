import { useI18n } from 'vue-i18n';

/**
 * Returns a function that builds locale-prefixed URLs for the current locale.
 * Use for all internal links so each language has a separate URL (e.g. /en, /ar, /es).
 *
 * @returns {(path: string) => string}
 *   - localePath('') or localePath('/') → '/en'
 *   - localePath('#download') → '/en#download'
 *   - localePath('about-us') → '/en/about-us'
 */
export function useLocalePath() {
  const { locale } = useI18n();

  function localePath(path) {
    const code = locale.value;
    if (!path || path === '/') return `/${code}`;
    if (path.startsWith('#')) return `/${code}${path}`;
    const clean = path.replace(/^\//, '');
    return `/${code}/${clean}`;
  }

  return { localePath };
}
