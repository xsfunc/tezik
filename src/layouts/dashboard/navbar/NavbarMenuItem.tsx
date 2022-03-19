import {
  alpha,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { navbarIconSize } from './navbarConfig'
import { useCollapseDrawer } from '../hooks/useCollapseDrawer'
import { useRouter } from 'next/router'

import ProfileIcon from '@mui/icons-material/FaceRounded'
import SwapIcon from '@mui/icons-material/SwapHorizRounded'
import PoolIcon from '@mui/icons-material/SavingsRounded'
import AddressBookIcon from '@mui/icons-material/BookRounded'
import SettingsIcon from '@mui/icons-material/SettingsRounded'
import TokenIcon from '@mui/icons-material/TokenRounded'

const icons = {
  profile: <ProfileIcon />,
  swap: <SwapIcon />,
  pool: <PoolIcon />,
  addressBook: <AddressBookIcon />,
  settings: <SettingsIcon />,
  tokens: <TokenIcon />,
}

type Icons = 'profile' | 'swap' | 'pool' | 'addressBook' | 'settings'
export type NavbarMenuItemProps = {
  path: string
  title: string
  icon: string
  active: string
}

export function NavbarMenuItem({
  title,
  path,
  icon,
  active,
}: NavbarMenuItemProps) {
  const { isCollapsed } = useCollapseDrawer()
  const { push, pathname } = useRouter()
  const isActive = pathname.startsWith(active)

  return (
    <ListItemButton
      onClick={() => push(path)}
      sx={(theme) => ({
        ...theme.typography.body2,

        height: 48,
        position: 'relative',
        textTransform: 'capitalize',
        pl: 2,
        pr: 1.5,
        mb: 0.5,
        borderRadius: 1,
        color: 'text.secondary',

        ...(isActive && {
          ...theme.typography.subtitle2,
          color: 'primary.main',
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        }),
      })}
    >
      <ListItemIcon
        sx={{
          width: navbarIconSize,
          height: navbarIconSize,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& svg': { width: '100%', height: '100%' },
        }}
      >
        {icons[icon as Icons]}
      </ListItemIcon>

      <ListItemText
        disableTypography
        primary={title}
        sx={{
          whiteSpace: 'nowrap',

          transition: ({ transitions }) =>
            transitions.create(['width', 'opacity'], {
              duration: transitions.duration.shorter,
            }),

          ...(isCollapsed && {
            width: 0,
            opacity: 0,
          }),
        }}
      />
    </ListItemButton>
  )
}
