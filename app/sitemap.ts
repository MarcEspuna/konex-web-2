import type { MetadataRoute } from 'next';

import { locales } from '@/lib/i18n';
import { getEvents } from '@/lib/content';

const baseUrl = 'https://konexdrone.com';
const staticPaths = [
  '',
  '/about',
  '/products',
  '/products/konex-h743',
  '/light-shows',
  '/events',
  '/pilots',
  '/contact',
  '/privacy',
  '/cookies',
  '/terms'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    staticPaths.forEach((path) => {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        changefreq: 'monthly',
        priority: path === '' ? 1 : 0.7
      });
    });

    getEvents(locale).forEach((event) => {
      entries.push({
        url: `${baseUrl}/${locale}/events/${event.slug}`,
        changefreq: 'monthly',
        priority: 0.6
      });
    });
  });

  return entries;
}
