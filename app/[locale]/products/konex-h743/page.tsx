import Link from 'next/link';

import { getLocaleOrDefault } from '@/lib/i18n';
import { getSiteCopy } from '@/lib/content';
import { buildMetadata } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';
import SectionHeader from '@/components/SectionHeader';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const { products } = getSiteCopy(locale);

  return buildMetadata(locale, {
    title: products.h743.name,
    description: products.h743.description,
    path: '/products/konex-h743'
  });
}

export default async function KonexH743Page({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const { products } = getSiteCopy(locale);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: products.h743.name,
    description: products.h743.description
  };

  return (
    <>
      <StructuredData data={schema} />
      <section className="hero">
        <div className="container">
          <SectionHeader
            kicker={locale === 'es' ? 'Controladora' : 'Flight Controller'}
            title={products.h743.name}
            description={products.h743.description}
          />
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="card">
            <h3>{locale === 'es' ? 'Especificaciones' : 'Specifications'}</h3>
            <ul className="list">
              {products.h743.specs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>{locale === 'es' ? 'Por qué destaca' : 'Why it stands out'}</h3>
            <p>
              {locale === 'es'
                ? 'Diseñada desde cero para pilotos FPV exigentes. Su arquitectura permite builds rápidas, limpias y fiables.'
                : 'Designed from scratch for demanding FPV pilots. The architecture enables fast, clean, and reliable builds.'}
            </p>
            <Link
              href={products.h743.cta.href}
              target={products.h743.cta.external ? '_blank' : undefined}
              rel={products.h743.cta.external ? 'noreferrer' : undefined}
              className="button button-primary"
            >
              {products.h743.cta.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
