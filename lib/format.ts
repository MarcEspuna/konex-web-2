import type { Locale } from './i18n';

export function formatDate(value: string, locale: Locale) {
  const formatter = new Intl.DateTimeFormat(locale === 'es' ? 'es-ES' : 'en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  return formatter.format(new Date(value));
}
