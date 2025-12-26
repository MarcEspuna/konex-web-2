import Link from 'next/link';

import type { Locale } from '@/lib/i18n';
import { getSiteCopy } from '@/lib/content';

export default function Footer({ locale }: { locale: Locale }) {
  const { common } = getSiteCopy(locale);

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">{common.siteName}</div>
          <p>{common.tagline}</p>
        </div>
        {common.footer.columns.map((column) => (
          <div key={column.title}>
            <strong>{column.title}</strong>
            <ul className="list" style={{ marginTop: 12 }}>
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.external ? link.href : `/${locale}${link.href}`}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container" style={{ marginTop: 32 }}>
        <small>{common.footer.legalNote}</small>
      </div>
    </footer>
  );
}
