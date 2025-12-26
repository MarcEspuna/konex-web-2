export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleOrDefault(value: string | undefined): Locale {
  if (value && isLocale(value)) {
    return value;
  }
  return 'es';
}
