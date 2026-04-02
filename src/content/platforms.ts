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
    key: 'onecFirstbit',
    logoSrc: '/fb.png',
    logoAlt: 'Firstbit',
    secondaryLogoSrc: '/1s-logo.svg',
    secondaryLogoAlt: '1C',
    secondaryLogoClass: 'h-8 w-auto max-w-[4.5rem] shrink-0 object-contain object-left sm:h-9 sm:max-w-[5rem]',
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
    key: 'bitrix24',
    logoSrc: '/bitrix24.png',
    logoAlt: 'Bitrix24',
  },
]
