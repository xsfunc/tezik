import { paths } from 'routes'

export const menu = [
  {
    subheader: 'General',
    items: [
      {
        title: 'Profile',
        path: paths.profile,
        icon: 'profile',
        active: '/profile',
      },
      {
        title: 'Staking',
        path: paths.stake,
        icon: 'pool',
        active: '/staking',
      },
      {
        title: 'Tokens',
        path: paths.tokens,
        icon: 'tokens',
        active: '/tokens',
      },
      { title: 'Swap', path: paths.swap, icon: 'swap', active: '/swap' },
    ],
  },
  {
    subheader: 'Other',
    items: [
      {
        title: 'Address book',
        path: paths.addressBook,
        icon: 'addressBook',
        active: paths.addressBook,
      },
      {
        title: 'Settings',
        path: paths.settings,
        active: paths.settings,
        icon: 'settings',
      },
    ],
  },
]

export const width = 260
export const dashboardWidth = 280
export const dashboardCollapsedWidth = 88
export const dashboarItemHeight = 48
export const dashboarItemSubHeight = 40
export const dashboarItemHorizontalHeight = 32
export const navbarIconSize = 22
