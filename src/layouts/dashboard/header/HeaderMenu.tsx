import { IconButton, Stack } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/NotificationsNoneRounded'

export function HeaderMenu() {
  return (
    <Stack direction="row" alignItems="center" spacing={1.5}>
      <IconButton>
        <NotificationsIcon />
      </IconButton>
    </Stack>
  )
}
