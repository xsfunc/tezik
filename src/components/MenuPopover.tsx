import { Popover, Box } from '@mui/material'
import type { PopoverProps, Theme } from '@mui/material'

type Arrow =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'left-top'
  | 'left-center'
  | 'left-bottom'
  | 'right-top'
  | 'right-center'
  | 'right-bottom'

const arrowStyle = (arrow: Arrow) => (theme: Theme) => {
  const size = 12
  const position = -(size / 2)
  const borderStyle = `solid 0px ${theme.palette.grey[500]}`

  const topStyle = {
    borderRadius: '0 0 3px 0',
    top: position,
    borderBottom: borderStyle,
    borderRight: borderStyle,
  }
  const bottomStyle = {
    borderRadius: '3px 0 0 0',
    bottom: position,
    borderTop: borderStyle,
    borderLeft: borderStyle,
  }
  const leftStyle = {
    borderRadius: '0 3px 0 0',
    left: position,
    borderTop: borderStyle,
    borderRight: borderStyle,
  }
  const rightStyle = {
    borderRadius: '0 0 0 3px',
    right: position,
    borderBottom: borderStyle,
    borderLeft: borderStyle,
  }

  return {
    [theme.breakpoints.up('sm')]: {
      zIndex: 1,
      width: size,
      height: size,
      content: "''",
      position: 'absolute',

      transform: 'rotate(-135deg)',
      background: theme.palette.background.paper,
    },

    // Top
    ...(arrow === 'top-left' && { ...topStyle, left: 20 }),
    ...(arrow === 'top-center' && {
      ...topStyle,
      left: 0,
      right: 0,
      margin: 'auto',
    }),
    ...(arrow === 'top-right' && { ...topStyle, right: 20 }),
    // Bottom
    ...(arrow === 'bottom-left' && { ...bottomStyle, left: 20 }),
    ...(arrow === 'bottom-center' && {
      ...bottomStyle,
      left: 0,
      right: 0,
      margin: 'auto',
    }),
    ...(arrow === 'bottom-right' && { ...bottomStyle, right: 20 }),

    // Left
    ...(arrow === 'left-top' && { ...leftStyle, top: 20 }),
    ...(arrow === 'left-center' && {
      ...leftStyle,
      top: 0,
      bottom: 0,
      margin: 'auto',
    }),
    ...(arrow === 'left-bottom' && { ...leftStyle, bottom: 20 }),

    // Right
    ...(arrow === 'right-top' && { ...rightStyle, top: 20 }),
    ...(arrow === 'right-center' && {
      ...rightStyle,
      top: 0,
      bottom: 0,
      margin: 'auto',
    }),
    ...(arrow === 'right-bottom' && { ...rightStyle, bottom: 20 }),
  }
}

type Props = {
  disabledArrow?: boolean
  arrow?: Arrow
} & PopoverProps

export default function MenuPopover({
  arrow = 'top-right',
  disabledArrow = false,
  children,
  sx,
  ...other
}: Props) {
  return (
    <Popover
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{
        sx: {
          p: 1,
          width: 200,
          overflow: 'inherit',
          ...sx,
        },
      }}
      {...other}
    >
      {!disabledArrow && <Box component="span" sx={arrowStyle(arrow)} />}
      {children}
    </Popover>
  )
}
