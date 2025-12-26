import Link from 'next/link';

import type { Locale } from '@/lib/i18n';
import { getSiteCopy } from '@/lib/content';
import LocaleSwitch from '@/components/LocaleSwitch';

export default function Nav({ locale }: { locale: Locale }) {
  const { common } = getSiteCopy(locale);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href={`/${locale}`} className="logo">
          KONEXDRONE
        </Link>
        <div className="nav-links">
          {common.nav.items.map((item) => (
            <Link key={item.href} href={`/${locale}${item.href}`}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="nav-right">
          <Link
            href={common.nav.store.href}
            target={common.nav.store.external ? '_blank' : undefined}
            rel={common.nav.store.external ? 'noreferrer' : undefined}
            className="button button-ghost"
          >
            {common.nav.store.label}
          </Link>
          <LocaleSwitch current={locale} />
        </div>
      </div>
    </nav>
  );
}
