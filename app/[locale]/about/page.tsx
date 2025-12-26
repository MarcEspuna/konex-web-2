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
  const { about } = getSiteCopy(locale);

  return buildMetadata(locale, {
    title: about.metaTitle,
    description: about.metaDescription,
    path: '/about'
  });
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const { about } = getSiteCopy(locale);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: about.metaTitle,
    description: about.metaDescription
  };

  return (
    <>
      <StructuredData data={schema} />
      <section className="hero">
        <div className="container">
          <SectionHeader
            kicker={about.hero.kicker}
            title={about.hero.title}
            description={about.hero.lede}
          />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="card">
            {about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="grid">
            {about.values.map((value) => (
              <div key={value.title} className="card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
