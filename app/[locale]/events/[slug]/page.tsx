import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getLocaleOrDefault, locales } from '@/lib/i18n';
import { getEventBySlug, getEvents, getSiteCopy } from '@/lib/content';
import { buildMetadata } from '@/lib/metadata';
import { formatDate } from '@/lib/format';
import StructuredData from '@/components/StructuredData';
import SectionHeader from '@/components/SectionHeader';

export function generateStaticParams() {
  const params = [] as Array<{ locale: string; slug: string }>;

  locales.forEach((locale) => {
    getEvents(locale).forEach((event) => {
      params.push({ locale, slug: event.slug });
    });
  });

  return params;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const event = getEventBySlug(locale, slug);

  if (!event) {
    return {};
  }

  return buildMetadata(locale, {
    title: event.title,
    description: event.description,
    path: `/events/${event.slug}`
  });
}

export default async function EventDetailPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const event = getEventBySlug(locale, slug);
  const { events: eventsCopy } = getSiteCopy(locale);

  if (!event) {
    notFound();
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: event.location
    }
  };

  return (
    <>
      <StructuredData data={schema} />
      <section className="hero">
        <div className="container">
          <SectionHeader
            kicker={eventsCopy.hero.kicker}
            title={event.title}
            description={event.description}
          />
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="card">
            <h3>{locale === 'es' ? 'Detalles del evento' : 'Event details'}</h3>
            <ul className="list">
              <li>
                {formatDate(event.startDate, locale)} - {formatDate(event.endDate, locale)}
              </li>
              <li>{event.location}</li>
              <li>
                {locale === 'es' ? 'Precio' : 'Price'}: {event.priceEur} EUR
              </li>
              <li>
                {locale === 'es' ? 'Capacidad' : 'Capacity'}: {event.capacity}
              </li>
            </ul>
            <div style={{ marginTop: 20 }}>
              <Link
                href={`/${locale}/events/${event.slug}/register`}
                className="button button-primary"
              >
                {locale === 'es' ? 'Inscribirse' : 'Register'}
              </Link>
            </div>
          </div>
          <div className="card">
            <h3>{locale === 'es' ? 'Incluye' : 'Includes'}</h3>
            <ul className="list">
              {event.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ marginTop: 16 }}>{event.refundPolicy}</p>
          </div>
        </div>
      </section>
    </>
  );
}
