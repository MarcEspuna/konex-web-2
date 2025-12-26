import { getLocaleOrDefault } from '@/lib/i18n';
import { getSiteCopy } from '@/lib/content';
import { buildMetadata } from '@/lib/metadata';
import SectionHeader from '@/components/SectionHeader';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const { legal } = getSiteCopy(locale);

  return buildMetadata(locale, {
    title: legal.cookies.metaTitle,
    description: legal.cookies.metaTitle,
    path: '/cookies'
  });
}

export default async function CookiesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const { legal } = getSiteCopy(locale);

  return (
    <section className="section">
      <div className="container">
        <SectionHeader title={legal.cookies.metaTitle} />
        <div className="grid" style={{ marginTop: 24 }}>
          {legal.cookies.sections.map((section) => (
            <div key={section.title} className="card">
              <h3>{section.title}</h3>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
