import { useState } from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { useAppDispatch } from 'app/hooks'
import { contactRemoved } from './addressBookSlice'
import MoreVertIcon from '@mui/icons-material/MoreVert'

type Props = {
  address: string
}

export function ContactMenu({ address }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const dispatch = useAppDispatch()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  const remove = () => {
    handleClose()
    dispatch(contactRemoved(address))
  }

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="contact-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'menu-button',
        }}
      >
        <MenuItem onClick={remove}>Remove</MenuItem>
      </Menu>
    </>
  )
}
