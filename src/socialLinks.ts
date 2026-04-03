export const parseLedgerSiteUrl = 'https://parseledger.ae/'

export const socialLinkDefs = [
  {
    network: 'youtube' as const,
    href: 'https://www.youtube.com/@parseledger',
    labelKey: 'social.youtubeLabel',
    nameKey: 'social.youtubeName',
  },
  {
    network: 'instagram' as const,
    href: 'https://www.instagram.com/parseledger.ae/',
    labelKey: 'social.instagramLabel',
    nameKey: 'social.instagramName',
  },
] as const
