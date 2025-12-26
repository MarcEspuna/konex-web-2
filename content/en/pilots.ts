export type Pilot = {
  id: string;
  name: string;
  location: string;
  achievements: string[];
};

export type CommunityLink = {
  label: string;
  href: string;
};

export const pilots: Pilot[] = [];

export const communityLinks: CommunityLink[] = [];
