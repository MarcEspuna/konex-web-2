import { getLocaleOrDefault } from '@/lib/i18n';
import { getSiteCopy } from '@/lib/content';
import { buildMetadata } from '@/lib/metadata';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const { contact } = getSiteCopy(locale);

  return buildMetadata(locale, {
    title: contact.metaTitle,
    description: contact.metaDescription,
    path: '/contact'
  });
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const { contact } = getSiteCopy(locale);

  return (
    <>
      <section className="hero">
        <div className="container">
          <SectionHeader
            kicker={contact.hero.kicker}
            title={contact.hero.title}
            description={contact.hero.lede}
          />
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="card">
            <ContactForm locale={locale} labels={contact.form} />
          </div>
          <div className="grid">
            {contact.contactCards.map((card) => (
              <div key={card.title} className="card">
                <strong>{card.title}</strong>
                <p>{card.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
