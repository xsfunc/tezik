import { Avatar, IconButton, MenuItem, Stack } from '@mui/material'
import { MouseEvent, useState } from 'react'
import { removeAccount } from 'features/accounts/accountsThunks'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { selectActiveAccount } from 'features/accounts/accountsSlice'

import Jdenticon from 'react-jdenticon'
import MenuPopover from 'components/MenuPopover'
import NotificationsIcon from '@mui/icons-material/NotificationsNoneRounded'

import type { AccountInfo } from '@airgap/beacon-sdk'

export default function AccountMenu() {
  const [anchor, setAnchor] = useState<HTMLDivElement | null>(null)
  const active = useAppSelector(selectActiveAccount)

  const dispatch = useAppDispatch()
  const disconnect = () =>
    dispatch(removeAccount((active as AccountInfo).accountIdentifier))

  const handleClose = () => setAnchor(null)
  const handleOpen = (e: MouseEvent<HTMLDivElement>) =>
    setAnchor(e.currentTarget)

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <Avatar
          sx={{
            backgroundColor: (theme) => theme.palette.background.paper,
            boxShadow: (theme) => theme.shadows[2],
            cursor: 'pointer',
            height: 48,
            width: 48,
          }}
          onClick={handleOpen}
        >
          <Jdenticon size="40" value={active?.address} />
        </Avatar>
      </Stack>

      <MenuPopover
        open={Boolean(anchor)}
        onClose={handleClose}
        anchorEl={anchor}
        sx={{
          py: 1.5,
          mt: 1.5,
          width: 150,
          '& .MuiMenuItem-root': {
            px: 1,
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Stack spacing={0.75}>
          <MenuItem onClick={disconnect}>Disconnect</MenuItem>
        </Stack>
      </MenuPopover>
    </>
  )
}
