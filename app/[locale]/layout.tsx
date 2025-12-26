import { notFound } from 'next/navigation';

import type { Locale } from '@/lib/i18n';
import { isLocale, locales } from '@/lib/i18n';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;

  return (
    <>
      <Nav locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
