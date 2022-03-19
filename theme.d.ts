import type { CustomShadows } from 'features/theme/shadows'
import type { Theme, ThemeOptions } from '@mui/material/styles'
import type {
  TypeBackground,
  PaletteOptions,
  Palette,
  PaletteColor,
} from '@mui/material/styles/createPalette'

declare module '@mui/material/styles' {
  type ChartColors = {
    violet: string[]
    blue: string[]
    green: string[]
    yellow: string[]
    red: string[]
  }

  interface CustomPaletteColor extends PaletteColor {
    lighter: string
    darker: string
  }

  interface CustomTypeBackground extends TypeBackground {
    neutral: string
  }

  interface CustomPalette extends Palette {
    primary: CustomPaletteColor
    secondary: CustomPaletteColor
    info: CustomPaletteColor
    success: CustomPaletteColor
    warning: CustomPaletteColor
    error: CustomPaletteColor
    chart: ChartColors
    background: Required<CustomTypeBackground>
  }

  interface CustomPaletteOptions extends PaletteOptions {
    chart?: ChartColors
    background?: Partial<CustomTypeBackground>
  }

  interface CustomTheme extends Theme {
    customShadows: CustomShadows
    palette: CustomPalette
  }

  interface CustomThemeOptions extends ThemeOptions {
    customShadows: CustomShadows
    palette: CustomPaletteOptions
  }

  export function createTheme(options?: CustomThemeOptions): CustomTheme
}
