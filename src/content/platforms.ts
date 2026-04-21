export type HomePlatformAsset = {
  key: string
  logoSrc: string
  logoAlt: string
  secondaryLogoSrc?: string
  secondaryLogoAlt?: string
  secondaryLogoClass?: string
  logoClass?: string
}

export const homePlatformAssets: HomePlatformAsset[] = [
  {
    key: 'onec',
    logoSrc: '/1s-logo.svg',
    logoAlt: '1C',
    logoClass: 'h-9 w-auto max-w-[5.5rem] shrink-0 object-contain object-left sm:h-10 sm:max-w-[6rem]',
  },
  {
    key: 'firstbit',
    logoSrc: '/fb.png',
    logoAlt: 'Firstbit',
    logoClass:
      'h-11 w-auto max-w-[11rem] shrink-0 object-contain object-left sm:h-12 sm:max-w-[13rem] md:h-[3.25rem] md:max-w-[14rem]',
  },
  {
    key: 'zoho',
    logoSrc: '/zoho.png',
    logoAlt: 'Zoho',
  },
  {
    key: 'quickbooks',
    logoSrc: '/qb.svg',
    logoAlt: 'QuickBooks',
  },
  {
    key: 'microsoftDynamics',
    logoSrc: '/Dynamics-365-logo-768x432.png',
    logoAlt: 'Microsoft Dynamics',
  },
]
