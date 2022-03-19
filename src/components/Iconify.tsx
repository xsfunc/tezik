import { Icon } from '@iconify/react'
import { Box } from '@mui/material'
import type { SxProps } from '@mui/material'

type Props = {
  icon: string
  sx?: SxProps
  color?: string
}

export const BaseIcon = (props: Props) => (
  <Iconify
    sx={{
      width: 20,
      height: 20,
      flexShrink: 0,
      mr: 2,
    }}
    {...props}
  />
)

export function Iconify({ icon, sx, ...other }: Props) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />
}
