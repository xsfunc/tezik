import { alpha } from '@mui/material/styles'
import { Box } from '@mui/material'
import type { Theme } from '@mui/material/styles'
import type { ReactNode } from 'react'
import type { SystemStyleObject } from '@mui/system'

type Color = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'
type Variant = 'filled' | 'outlined' | 'ghost'

const labelStyles =
  (
    color: Color | 'default',
    variant: Variant
  ): ((theme: Theme) => SystemStyleObject<Theme>) =>
  (theme: Theme) => {
    //TODO custom theme
    const isLight = theme.palette.mode === 'light'

    const styleFilled = (color: Color) => ({
      color: theme.palette[color].contrastText,
      backgroundColor: theme.palette[color].main,
    })

    const styleOutlined = (color: Color) => ({
      color: theme.palette[color].main,
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette[color].main}`,
    })

    const styleGhost = (color: Color) => ({
      color: theme.palette[color][isLight ? 'dark' : 'light'],
      backgroundColor: alpha(theme.palette[color].main, 0.16),
    })

    return {
      height: 22,
      minWidth: 22,
      lineHeight: 0,
      borderRadius: 8,
      cursor: 'default',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      justifyContent: 'center',
      padding: theme.spacing(0, 1),
      color: theme.palette.grey[800],
      fontSize: theme.typography.pxToRem(12),
      fontFamily: theme.typography.fontFamily,
      backgroundColor: theme.palette.grey[300],
      fontWeight: theme.typography.fontWeightBold,

      ...(color !== 'default'
        ? {
            ...(variant === 'filled' && { ...styleFilled(color) }),
            ...(variant === 'outlined' && { ...styleOutlined(color) }),
            ...(variant === 'ghost' && { ...styleGhost(color) }),
          }
        : {
            ...(variant === 'outlined' && {
              backgroundColor: 'transparent',
              color: theme.palette.text.primary,
              border: `1px solid ${theme.palette.grey[500]}`,
            }),
            ...(variant === 'ghost' && {
              color: isLight
                ? theme.palette.text.secondary
                : theme.palette.common.white,
              backgroundColor: theme.palette.grey[500],
            }),
          }),
    }
  }

type Props = {
  children: ReactNode
  variant: Variant
  color: Color | 'default'
}

export function Label({
  color = 'default',
  variant = 'ghost',
  children,
  ...other
}: Props) {
  return (
    <Box component="span" sx={labelStyles(color, variant)} {...other}>
      {children}
    </Box>
  )
}
