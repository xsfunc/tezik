import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Breakpoint } from '@mui/material'

type Query = 'up' | 'down' | 'only' | 'between'

export function useResponsive(
  query: Query,
  start: Breakpoint,
  end: Breakpoint
) {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints[query](start, end))
}
