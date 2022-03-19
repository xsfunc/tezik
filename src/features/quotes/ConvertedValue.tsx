import { Skeleton, Typography } from '@mui/material'
import { useConverted } from './useConverted'
import type { TypographyProps } from '@mui/material'

interface ValueProps {
  value: number
  decimal?: number
  hideXTZ?: boolean
}

interface Props extends ValueProps, TypographyProps {
  loading: boolean
}

export function ConvertedValue({
  loading,
  value,
  decimal = 6,
  hideXTZ = false,
  ...other
}: Props) {
  const converted = useConverted(value, hideXTZ, decimal)

  return (
    <Typography variant="subtitle2" {...other}>
      {loading ? <Skeleton variant="text" width={50} /> : converted}
    </Typography>
  )
}
