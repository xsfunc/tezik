import { IconButton, MenuItem, Stack } from '@mui/material'
import { MouseEvent, useState } from 'react'
import { removeAccount } from 'features/accounts/accountsThunks'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { selectActiveAccount } from 'features/accounts/accountsSlice'

import MenuPopover from 'components/MenuPopover'
import MoreVertIcon from '@mui/icons-material/MoreVert'

import type { AccountInfo } from '@airgap/beacon-sdk'
import type { IconButtonProps } from '@mui/material'

export default function AccountMenuButon({ sx }: IconButtonProps) {
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
      <IconButton sx={sx} onClick={handleOpen}>
        <MoreVertIcon />
      </IconButton>

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
