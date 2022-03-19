import { Box } from '@mui/material'
import { useCollapseDrawer } from '../hooks/useCollapseDrawer'
import { dashboardCollapsedWidth, dashboardWidth } from '../navbar/navbarConfig'
import { desktopHeight, mobileHeight } from '../header/headerConfig'
import type { Theme } from '@mui/material/styles'
import type { SystemStyleObject } from '@mui/system'
import type { ReactNode } from 'react'

type Style = (theme: Theme) => SystemStyleObject<Theme>

const mainStyles =
  (collapseClick: boolean): Style =>
  (theme: Theme) => ({
    flexGrow: 1,
    py: `${mobileHeight}px`,

    [theme.breakpoints.up('lg')]: {
      px: 2,
      py: `${desktopHeight}px`,
      width: `calc(100% - ${dashboardWidth}px)`,

      transition: theme.transitions.create('margin-left', {
        duration: theme.transitions.duration.shorter,
      }),

      ...(collapseClick && {
        ml: `${dashboardCollapsedWidth}px`,
      }),
    },
  })

type Props = {
  children: ReactNode
}

export function Main({ children }: Props) {
  const { collapseClick } = useCollapseDrawer()

  return (
    <Box component="main" sx={mainStyles(collapseClick)}>
      {children}
    </Box>
  )
}
