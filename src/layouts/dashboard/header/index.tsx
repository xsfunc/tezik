import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { cssStyles } from 'utils/cssStyles'
import { Searchbar } from './Searchbar'

import {
  dashboardWidth,
  dashboardCollapsedWidth,
} from 'layouts/dashboard/navbar/navbarConfig'
import { desktopHeight, mobileHeight } from './headerConfig'

import { Box, AppBar, Toolbar, IconButton, Theme } from '@mui/material'
import { useCollapseDrawer } from '../hooks/useCollapseDrawer'

const appBarStyle = (isCollapsed?: boolean) => (theme: Theme) => ({
  ...cssStyles(theme).bgBlur(),
  boxShadow: 'none',
  height: mobileHeight,
  zIndex: theme.zIndex.appBar + 1,
  justifyContent: 'center',
  alighItems: 'center',

  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),

  [theme.breakpoints.up('lg')]: {
    height: desktopHeight,

    width: `calc(100% - ${dashboardWidth + 1}px)`,
    ...(isCollapsed && {
      width: `calc(100% - ${dashboardCollapsedWidth}px)`,
    }),
  },
})

type Props = {
  openSidebar: () => void
}

export function DashboardHeader({ openSidebar }: Props) {
  const { isCollapsed } = useCollapseDrawer()

  return (
    <AppBar sx={appBarStyle(isCollapsed)}>
      <Toolbar>
        <IconButton
          sx={{ mr: 1, display: { md: 'none' } }}
          onClick={openSidebar}
        >
          <MenuRoundedIcon sx={{ color: 'text.primary' }} />
        </IconButton>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  )
}
