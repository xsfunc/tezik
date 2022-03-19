import { ReactNode } from 'react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { selectTheme } from './themeSlice'
import { useAppSelector } from 'app/hooks'
import { useCreateCustomTheme } from './useCreateCustomTheme'

type Props = {
  children: ReactNode
}

export function CustomThemeProvider({ children }: Props) {
  const { themeMode } = useAppSelector(selectTheme)
  const { theme } = useCreateCustomTheme(themeMode)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
