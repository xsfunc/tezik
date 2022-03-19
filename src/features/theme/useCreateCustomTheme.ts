import { useMemo } from 'react'
import { customPalette } from './overrides/palette'
import { typography } from './overrides/typography'
import { createTheme, CustomThemeOptions } from '@mui/material/styles'
import { shadows, customShadows } from './overrides/shadows'
import componentsOverride from './overrides'

export function useCreateCustomTheme(themeMode: 'dark' | 'light') {
  const themeOptions = useMemo<CustomThemeOptions>(
    () => ({
      typography,
      shape: { borderRadius: 8 },
      palette: customPalette(themeMode),
      shadows: shadows[themeMode],
      customShadows: customShadows[themeMode],
    }),

    [themeMode]
  )

  const theme = createTheme(themeOptions)
  theme.components = componentsOverride(theme)

  return { theme }
}
