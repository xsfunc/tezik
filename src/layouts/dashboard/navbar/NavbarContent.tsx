import { Box, Stack, Typography } from '@mui/material'
import { Logo } from 'components/Logo'
import { useCollapseDrawer } from '../hooks/useCollapseDrawer'
import { useResponsive } from 'hooks/useResponsive'
import { CollapseButton } from './CollapseButton'
import { NavbarBottom } from './NavbarBottom'
import { NavbarMenu } from './NavbarMenu'
import { NavbarAccount } from './NavbarAccount'

export function NavbarContent() {
  const isDesktop = useResponsive('up', 'lg', 'lg')
  const { isCollapsed, onToggleCollapse, collapseClick } = useCollapseDrawer()

  return (
    <Stack height={1} direction="column" justifyContent="space-between">
      <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 2,
          px: 2.5,
          flexShrink: 0,
          ...(isCollapsed && { alignItems: 'center' }),
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center">
            <Logo />
            {!isCollapsed && (
              <Typography sx={{ ml: 2 }} variant="h5">
                Tezik
              </Typography>
            )}
          </Stack>

          {isDesktop && !isCollapsed && (
            <CollapseButton
              onToggleCollapse={onToggleCollapse}
              collapseClick={collapseClick}
            />
          )}
        </Stack>
      </Stack>

      <NavbarAccount />
      <NavbarMenu />
      <Box sx={{ flexGrow: 1 }} />
      <NavbarBottom />
    </Stack>
  )
}
