import type { Locale } from './i18n';

import { site as enSite } from '@/content/en/site';
import { site as esSite } from '@/content/es/site';
import { events as enEvents } from '@/content/en/events';
import { events as esEvents } from '@/content/es/events';
import { pilots as enPilots, communityLinks as enCommunity } from '@/content/en/pilots';
import { pilots as esPilots, communityLinks as esCommunity } from '@/content/es/pilots';

const sites = {
  en: enSite,
  es: esSite
};

const events = {
  en: enEvents,
  es: esEvents
};

const pilots = {
  en: enPilots,
  es: esPilots
};

const communityLinks = {
  en: enCommunity,
  es: esCommunity
};

export type SiteCopy = typeof enSite;
export type EventItem = (typeof enEvents)[number];
export type PilotItem = (typeof enPilots)[number];
export type CommunityLink = (typeof enCommunity)[number];

export function getSiteCopy(locale: Locale): SiteCopy {
  return sites[locale];
}

export function getEvents(locale: Locale): EventItem[] {
  return events[locale];
}

export function getEventBySlug(locale: Locale, slug: string): EventItem | undefined {
  return events[locale].find((event) => event.slug === slug);
}

export function getPilots(locale: Locale): PilotItem[] {
  return pilots[locale];
}

export function getCommunityLinks(locale: Locale): CommunityLink[] {
  return communityLinks[locale];
}
