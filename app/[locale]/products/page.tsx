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
    title: products.metaTitle,
    description: products.metaDescription,
    path: '/products'
  });
}

export default async function ProductsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const { products } = getSiteCopy(locale);

  const productSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: products.h743.name,
      description: products.h743.description
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: products.minidrone.name,
      description: products.minidrone.description
    }
  ];

  return (
    <>
      {productSchema.map((schema) => (
        <StructuredData key={schema.name} data={schema} />
      ))}
      <section className="hero">
        <div className="container">
          <SectionHeader
            kicker={products.hero.kicker}
            title={products.hero.title}
            description={products.hero.lede}
          />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="card">
            <h3>{products.h743.name}</h3>
            <p>{products.h743.description}</p>
            <ul className="list">
              {products.h743.specs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
            <div className="button-row" style={{ marginTop: 20 }}>
              <Link
                href={`/${locale}/products/konex-h743`}
                className="button button-ghost"
              >
                {locale === 'es' ? 'Ver detalles' : 'View details'}
              </Link>
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
          <div className="card">
            <h3>{products.minidrone.name}</h3>
            <p>{products.minidrone.description}</p>
            <ul className="list">
              {products.minidrone.specs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
            <div style={{ marginTop: 16 }}>
              {products.minidrone.pricing.map((price) => (
                <div key={price.label} className="stat" style={{ marginBottom: 12 }}>
                  <strong>{price.value}</strong>
                  <span>{price.label}</span>
                </div>
              ))}
            </div>
            <Link
              href={`/${locale}${products.minidrone.cta.href}`}
              className="button button-primary"
            >
              {products.minidrone.cta.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
