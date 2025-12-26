import { notFound } from 'next/navigation';

import { getLocaleOrDefault, locales } from '@/lib/i18n';
import { getEventBySlug, getEvents } from '@/lib/content';
import { buildMetadata } from '@/lib/metadata';
import { formatDate } from '@/lib/format';
import RegistrationForm from '@/components/RegistrationForm';
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
    title: `${event.title} - ${locale === 'es' ? 'Inscripción' : 'Registration'}`,
    description: event.description,
    path: `/events/${event.slug}/register`
  });
}

export default async function EventRegistrationPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const event = getEventBySlug(locale, slug);

  if (!event) {
    notFound();
  }

  return (
    <section className="section">
      <div className="container split">
        <div>
            <SectionHeader
            kicker={locale === 'es' ? 'Inscripción' : 'Registration'}
            title={event.title}
            description={event.description}
          />
          <div className="card" style={{ marginTop: 24 }}>
            <strong>{event.location}</strong>
            <p>{formatDate(event.startDate, locale)}</p>
            <p>
              {locale === 'es' ? 'Capacidad' : 'Capacity'}: {event.capacity}
            </p>
          </div>
        </div>
        <div className="card">
          <RegistrationForm
            locale={locale}
            eventId={event.id}
            eventTitle={event.title}
            priceEur={event.priceEur}
            refundPolicy={event.refundPolicy}
          />
        </div>
      </div>
    </section>
  );
}
