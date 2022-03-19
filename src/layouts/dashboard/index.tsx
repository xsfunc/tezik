import { ReactNode, useState } from 'react'
import { Box } from '@mui/material'
import { CollapseDrawerProvider } from './context/CollapseDrawerContext'
import { NavbarContent } from './navbar/NavbarContent'
import { NavbarDesktop } from './navbar/NavbarDesktop'
import { NavbarMobile } from './navbar/NavbarMobile'
import { useResponsive } from 'hooks/useResponsive'
import { DashboardHeader } from './header'
import { Main } from './main'

type Props = {
  children: ReactNode
}

export function DashboardLayout({ children }: Props) {
  const isDesktop = useResponsive('up', 'lg', 'sm')

  const [mobileOpen, setMobileOpen] = useState<boolean>(false)
  const openSidebar = () => setMobileOpen(true)
  const closeSidebar = () => setMobileOpen(false)

  return (
    <CollapseDrawerProvider>
      <Box
        sx={{
          display: { lg: 'flex' },
          minHeight: { lg: 1 },
        }}
      >
        <DashboardHeader openSidebar={openSidebar} />

        {isDesktop ? (
          <NavbarDesktop>
            <NavbarContent />
          </NavbarDesktop>
        ) : (
          <NavbarMobile open={mobileOpen} onClose={closeSidebar}>
            <NavbarContent />
          </NavbarMobile>
        )}

        <Main>{children}</Main>
      </Box>
    </CollapseDrawerProvider>
  )
}
