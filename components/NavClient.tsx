'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { Locale } from '@/lib/i18n';
import LocaleSwitch from '@/components/LocaleSwitch';

type NavItem = {
  label: string;
  href: string;
};

type NavStore = {
  label: string;
  href: string;
  external?: boolean;
};

type NavClientProps = {
  locale: Locale;
  items: NavItem[];
  store: NavStore;
};

export default function NavClient({ locale, items, store }: NavClientProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const labels =
    locale === 'es'
      ? {
          open: 'Menu',
          close: 'Cerrar',
          openLabel: 'Abrir menu de navegacion',
          closeLabel: 'Cerrar menu de navegacion'
        }
      : {
          open: 'Menu',
          close: 'Close',
          openLabel: 'Open navigation menu',
          closeLabel: 'Close navigation menu'
        };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function toggleMenu() {
    setOpen((prev) => !prev);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <nav className={`nav${open ? ' nav-open' : ''}`}>
      <div className="container nav-inner">
        <Link href={`/${locale}`} className="logo" onClick={closeMenu}>
          KONEXDRONE
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? labels.closeLabel : labels.openLabel}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span className="nav-toggle-label">{open ? labels.close : labels.open}</span>
          <span className="nav-toggle-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
        <div id="primary-navigation" className="nav-links">
          {items.map((item) => (
            <Link key={item.href} href={`/${locale}${item.href}`} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="nav-right" onClick={closeMenu}>
          <Link
            href={store.href}
            target={store.external ? '_blank' : undefined}
            rel={store.external ? 'noreferrer' : undefined}
            className="button button-ghost"
          >
            {store.label}
          </Link>
          <LocaleSwitch current={locale} />
        </div>
      </div>
    </nav>
  );
}
