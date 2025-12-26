import type { Locale } from '@/lib/i18n';
import { getSiteCopy } from '@/lib/content';
import NavClient from '@/components/NavClient';

export default function Nav({ locale }: { locale: Locale }) {
  const { common } = getSiteCopy(locale);

  return (
    <NavClient locale={locale} items={common.nav.items} store={common.nav.store} />
  );
}
