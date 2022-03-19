import NextLink from 'next/link'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { MenuItem, IconButton } from '@mui/material'

import MoreIcon from '@mui/icons-material/MoreVertRounded'
import DeleteIcon from '@mui/icons-material/DeleteRounded'

const MenuPopover = dynamic(() => import('components/MenuPopover'))

type Props = {
  onDelete: () => void
  name: string
}

export function MoreMenu({ onDelete }: Props) {
  const [open, setOpen] = useState(null)

  const handleOpen = (event) => {
    setOpen(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(null)
  }

  const iconStyle = {
    mr: 2,
    width: 20,
    height: 20,
  }

  return (
    <>
      <IconButton onClick={handleOpen}>
        <MoreIcon />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        arrow="right-top"
        sx={{
          mt: -1,
          width: 160,
          '& .MuiMenuItem-root': {
            px: 1,
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <MenuItem onClick={onDelete} sx={{ color: 'error.main' }}>
          <DeleteIcon sx={iconStyle} />
          Delete
        </MenuItem>

        <NextLink href="/edit">
          <MenuItem>
            <DeleteIcon sx={iconStyle} />
            Edit
          </MenuItem>
        </NextLink>
      </MenuPopover>
    </>
  )
}
