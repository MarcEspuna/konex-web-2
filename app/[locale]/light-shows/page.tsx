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
  const { lightShows } = getSiteCopy(locale);

  return buildMetadata(locale, {
    title: lightShows.metaTitle,
    description: lightShows.metaDescription,
    path: '/light-shows'
  });
}

export default async function LightShowsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const { lightShows } = getSiteCopy(locale);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: lightShows.metaTitle,
    description: lightShows.metaDescription
  };

  return (
    <>
      <StructuredData data={schema} />
      <section className="hero">
        <div className="container">
          <SectionHeader
            kicker={lightShows.hero.kicker}
            title={lightShows.hero.title}
            description={lightShows.hero.lede}
          />
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3 stagger">
          {lightShows.services.map((service) => (
            <div key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section tight">
        <div className="container split">
          <div className="card">
            <h3>{locale === 'es' ? 'Precios de minidrones' : 'Minidrone pricing'}</h3>
            {lightShows.pricing.map((price) => (
              <div key={price.label} className="stat" style={{ marginBottom: 12 }}>
                <strong>{price.value}</strong>
                <span>{price.label}</span>
              </div>
            ))}
            <p>{lightShows.trainingNote}</p>
          </div>
          <div className="callout">
            <strong>{lightShows.callout.title}</strong>
            <p>{lightShows.callout.description}</p>
            <Link
              href={`/${locale}${lightShows.callout.cta.href}`}
              className="button button-primary"
            >
              {lightShows.callout.cta.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
