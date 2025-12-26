import Link from 'next/link';

import { getLocaleOrDefault } from '@/lib/i18n';
import { getEvents, getSiteCopy } from '@/lib/content';
import { buildMetadata } from '@/lib/metadata';
import { formatDate } from '@/lib/format';
import StructuredData from '@/components/StructuredData';
import SectionHeader from '@/components/SectionHeader';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const { events } = getSiteCopy(locale);

  return buildMetadata(locale, {
    title: events.metaTitle,
    description: events.metaDescription,
    path: '/events'
  });
}

export default async function EventsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const { events: eventsCopy } = getSiteCopy(locale);
  const events = getEvents(locale);

  return (
    <>
      {events.map((event) => (
        <StructuredData
          key={event.id}
          data={{
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
          }}
        />
      ))}
      <section className="hero">
        <div className="container">
          <SectionHeader
            kicker={eventsCopy.hero.kicker}
            title={eventsCopy.hero.title}
            description={eventsCopy.hero.lede}
          />
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          {events.map((event) => (
            <div key={event.id} className="card">
              <div className="pill">{formatDate(event.startDate, locale)}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <ul className="list">
                <li>{event.location}</li>
                <li>
                  {locale === 'es' ? 'Precio' : 'Price'}: {event.priceEur} EUR
                </li>
                <li>
                  {locale === 'es' ? 'Capacidad' : 'Capacity'}: {event.capacity}
                </li>
              </ul>
              <div style={{ marginTop: 16 }}>
                <Link
                  href={`/${locale}/events/${event.slug}`}
                  className="button button-primary"
                >
                  {locale === 'es' ? 'Ver detalles' : 'View details'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="card">
            <strong>{locale === 'es' ? 'Política de reembolsos' : 'Refund policy'}</strong>
            <p style={{ marginBottom: 0 }}>{eventsCopy.refundPolicy}</p>
          </div>
        </div>
      </section>
    </>
  );
}
