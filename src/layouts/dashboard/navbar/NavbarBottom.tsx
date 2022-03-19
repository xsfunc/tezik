import dynamic from 'next/dynamic'
import { Box } from '@mui/material'
import { ThemeToggleButton } from './ThemeToggleButton'
import { useCollapseDrawer } from '../hooks/useCollapseDrawer'
import { useGetLastQuotesQuery } from 'services/tzkt-api'

const CurrencyMenu = dynamic(() => import('./CurrencyMenu'))

export function NavbarBottom() {
  const { isCollapsed } = useCollapseDrawer()
  useGetLastQuotesQuery(undefined, { pollingInterval: 6000 * 3 })

  if (isCollapsed) return null
  return (
    <Box
      sx={{
        p: 2,
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItem: 'center',
        overflow: 'hidden',
      }}
    >
      <CurrencyMenu />
      <ThemeToggleButton />
    </Box>
  )
}
