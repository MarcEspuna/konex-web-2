'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const locales = ['es', 'en'] as const;

type Locale = (typeof locales)[number];

function buildLocalePath(pathname: string, locale: Locale) {
  const segments = pathname.split('/');
  const currentLocale = segments[1];

  if (locales.includes(currentLocale as Locale)) {
    segments[1] = locale;
    return segments.join('/') || '/';
  }

  return `/${locale}${pathname}`;
}

export default function LocaleSwitch({ current }: { current: Locale }) {
  const pathname = usePathname();

  return (
    <div className="locale-switch">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={buildLocalePath(pathname, locale)}
          className={locale === current ? 'active' : undefined}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
