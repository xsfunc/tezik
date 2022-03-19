import { m } from 'framer-motion'
import { forwardRef } from 'react'
import { Box, IconButton } from '@mui/material'

import type { SxProps } from '@mui/material'
import type { ReactNode, MouseEventHandler } from 'react'

const varSmall = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
}

const varMedium = {
  hover: { scale: 1.09 },
  tap: { scale: 0.97 },
}

const varLarge = {
  hover: { scale: 1.08 },
  tap: { scale: 0.99 },
}

type Size = 'small' | 'medium' | 'large'
type AnimateWrapProps = {
  children: ReactNode
  size: Size
}

function AnimateWrap({ size, children }: AnimateWrapProps) {
  const isSmall = size === 'small'
  const isLarge = size === 'large'

  return (
    <Box
      component={m.div}
      whileTap="tap"
      whileHover="hover"
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      sx={{
        display: 'inline-flex',
      }}
    >
      {children}
    </Box>
  )
}

type Props = {
  children: ReactNode
  size?: Size
  onClick: MouseEventHandler<HTMLButtonElement>
  sx?: SxProps
  color?:
    | 'inherit'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
}

export const IconButtonAnimate = forwardRef<any, Props>(
  ({ children, size = 'medium', ...other }, ref) => (
    <AnimateWrap size={size}>
      <IconButton size={size} ref={ref} {...other}>
        {children}
      </IconButton>
    </AnimateWrap>
  )
)

IconButtonAnimate.displayName = 'IconButtonAnimate'
