import { Box, Drawer } from '@mui/material'
import { useCollapseDrawer } from '../hooks/useCollapseDrawer'
import { dashboardCollapsedWidth, dashboardWidth } from './navbarConfig'
import { cssStyles } from 'utils/cssStyles'

import type { Theme } from '@mui/material'

type Props = {
  children: React.ReactNode
}

export function NavbarDesktop({ children }: Props) {
  const { isCollapsed, collapseHover, onHoverEnter, onHoverLeave } =
    useCollapseDrawer()

  const drawerStyles = (theme: Theme) => ({
    borderRightStyle: 'dashed',
    bgcolor: 'background.default',

    [theme.breakpoints.up('lg')]: {
      flexShrink: 0,
    },

    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.standard,
    }),

    width: dashboardWidth,
    ...(isCollapsed && {
      width: dashboardCollapsedWidth,
    }),

    ...(collapseHover && {
      ...cssStyles(theme).bgBlur(),
      boxShadow: theme.customShadows.z24,
    }),
  })

  return (
    <DrawerWrapper>
      <Drawer
        open
        variant="persistent"
        onMouseEnter={onHoverEnter}
        onMouseLeave={onHoverLeave}
        PaperProps={{
          sx: drawerStyles,
        }}
      >
        {children}
      </Drawer>
    </DrawerWrapper>
  )
}

function DrawerWrapper({ children }) {
  const { collapseClick, isCollapsed } = useCollapseDrawer()

  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.up('lg')]: {
          flexShrink: 0,
          transition: theme.transitions.create('width', {
            duration: theme.transitions.duration.shorter,
          }),
        },
        width: {
          lg: isCollapsed ? dashboardCollapsedWidth : dashboardWidth,
        },
        ...(collapseClick && {
          position: 'absolute',
        }),
      })}
    >
      {children}
    </Box>
  )
}
