import { alpha } from '@mui/material/styles'
import type { CustomTheme, Theme } from '@mui/material'

function getDirection(value = 'bottom') {
  return {
    top: 'to top',
    right: 'to right',
    bottom: 'to bottom',
    left: 'to left',
  }[value]
}

type BgBlurProps = {
  color?: string
  blur?: number
  opacity?: number
}

type BgGradientProps = {
  direction?: string
  startColor: string
  endColor: string
}

type BgImageProps = {
  url: string
  direction: string
  startColor: string
  endColor: string
}

export function cssStyles(theme: Theme | CustomTheme) {
  return {
    bgBlur: (props?: BgBlurProps) => {
      const color =
        props?.color || theme?.palette.background.default || '#000000'

      const blur = props?.blur || 6
      const opacity = props?.opacity || 0.8

      return {
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`, // Fix on Mobile
        backgroundColor: alpha(color, opacity),
      }
    },

    bgGradient: (props: BgGradientProps) => {
      const direction = getDirection(props?.direction)
      const startColor = props?.startColor || `${alpha('#000000', 0)} 0%`
      const endColor = props?.endColor || '#000000 75%'

      return {
        background: `linear-gradient(${direction}, ${startColor}, ${endColor});`,
      }
    },

    bgImage: (props: BgImageProps) => {
      const url = props?.url || ''
      const direction = getDirection(props?.direction)
      const startColor =
        props?.startColor || alpha(theme?.palette.grey[900] || '#000000', 0.88)
      const endColor =
        props?.endColor || alpha(theme?.palette.grey[900] || '#000000', 0.88)

      return {
        background: `linear-gradient(${direction}, ${startColor}, ${endColor}), url(${url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }
    },
  }
}
