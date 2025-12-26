import { getLocaleOrDefault } from '@/lib/i18n';
import { getCommunityLinks, getPilots, getSiteCopy } from '@/lib/content';
import { buildMetadata } from '@/lib/metadata';
import SectionHeader from '@/components/SectionHeader';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const { pilots } = getSiteCopy(locale);

  return buildMetadata(locale, {
    title: pilots.metaTitle,
    description: pilots.metaDescription,
    path: '/pilots'
  });
}

export default async function PilotsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const { pilots: pilotsCopy } = getSiteCopy(locale);
  const pilots = getPilots(locale);
  const communityLinks = getCommunityLinks(locale);

  return (
    <>
      <section className="hero">
        <div className="container">
          <SectionHeader
            kicker={pilotsCopy.hero.kicker}
            title={pilotsCopy.hero.title}
            description={pilotsCopy.hero.lede}
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          {pilots.length === 0 ? (
            <div className="card">
              <p>{pilotsCopy.rosterNote}</p>
            </div>
          ) : (
            <div className="grid grid-3">
              {pilots.map((pilot) => (
                <div key={pilot.id} className="card">
                  <h3>{pilot.name}</h3>
                  <p>{pilot.location}</p>
                  <ul className="list">
                    {pilot.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <div className="card">
            <h3>{locale === 'es' ? 'Comunidad' : 'Community'}</h3>
            <p>{pilotsCopy.communityNote}</p>
            {communityLinks.length > 0 ? (
              <div className="button-row">
                {communityLinks.map((link) => (
                  <a key={link.href} href={link.href} className="button button-ghost">
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
