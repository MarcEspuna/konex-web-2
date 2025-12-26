import Link from 'next/link';

import { getLocaleOrDefault } from '@/lib/i18n';
import { getEvents, getSiteCopy } from '@/lib/content';
import { buildMetadata } from '@/lib/metadata';
import { formatDate } from '@/lib/format';
import StructuredData from '@/components/StructuredData';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const { home } = getSiteCopy(locale);

  return buildMetadata(locale, {
    title: home.metaTitle,
    description: home.metaDescription,
    path: ''
  });
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const { home } = getSiteCopy(locale);
  const events = getEvents(locale).slice(0, 2);

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Konexdrone SL',
    url: 'https://konexdrone.com',
    description: home.metaDescription
  };

  return (
    <>
      <StructuredData data={orgSchema} />
      <section className="hero">
        <div className="container hero-grid">
          <div className="fade-in">
            <div className="pill">{home.hero.kicker}</div>
            <h1 className="hero-title">{home.hero.title}</h1>
            <p className="hero-lede">{home.hero.lede}</p>
            <div className="button-row" style={{ marginTop: 24 }}>
              {home.hero.ctas.map((cta) => (
                <Link
                  key={cta.label}
                  href={`/${locale}${cta.href}`}
                  className={`button ${
                    cta.variant === 'primary' ? 'button-primary' : 'button-ghost'
                  }`}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hero-panel fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 style={{ marginTop: 0 }}>
              {locale === 'es' ? 'Especificaciones clave' : 'Key specs'}
            </h3>
            <div className="grid">
              {home.stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3 stagger">
            {home.highlights.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container split">
          <div>
            <div className="section-kicker">{locale === 'es' ? 'Eventos' : 'Events'}</div>
            <h2 className="section-title">
              {locale === 'es' ? 'Próximas carreras' : 'Upcoming races'}
            </h2>
            <p className="hero-lede">
              {locale === 'es'
                ? 'Consulta el calendario y reserva tu plaza en nuestros eventos FPV.'
                : 'Check the calendar and secure your spot for upcoming FPV races.'}
            </p>
            <Link
              href={`/${locale}/events`}
              className="button button-primary"
              style={{ marginTop: 16 }}
            >
              {locale === 'es' ? 'Ver calendario' : 'View calendar'}
            </Link>
          </div>
          <div className="grid">
            {events.map((event) => (
              <div key={event.id} className="card">
                <div className="pill">{formatDate(event.startDate, locale)}</div>
                <h3>{event.title}</h3>
                <p>{event.location}</p>
                <p>
                  {locale === 'es' ? 'Inscripción' : 'Entry'}: {event.priceEur} EUR
                </p>
                <Link
                  href={`/${locale}/events/${event.slug}`}
                  className="button button-ghost"
                >
                  {locale === 'es' ? 'Ver evento' : 'View event'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="callout">
            <strong>{home.callout.title}</strong>
            <p>{home.callout.description}</p>
            <Link
              href={`/${locale}${home.callout.cta.href}`}
              className="button button-primary"
            >
              {home.callout.cta.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
