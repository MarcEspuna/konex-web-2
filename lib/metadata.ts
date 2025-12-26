import type { Metadata } from 'next';
import type { Locale } from './i18n';

const baseUrl = 'https://konexdrone.com';

export function buildMetadata(
  locale: Locale,
  values: {
    title: string;
    description: string;
    path: string;
  }
): Metadata {
  const canonical = `${baseUrl}/${locale}${values.path}`;

  return {
    title: values.title,
    description: values.description,
    alternates: {
      canonical,
      languages: {
        es: `${baseUrl}/es${values.path}`,
        en: `${baseUrl}/en${values.path}`
      }
    },
    openGraph: {
      title: values.title,
      description: values.description,
      url: canonical,
      siteName: 'Konexdrone',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: values.title,
      description: values.description
    }
  };
}
