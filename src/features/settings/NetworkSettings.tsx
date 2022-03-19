import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  TextField,
} from '@mui/material'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { snackbarAdded } from 'features/snackbar/snackbarSlice'
import { useState } from 'react'
import { selectSettingsRpc, settingsUpdated } from './settingsSlice'

export function NetworkSettings() {
  const settingsRpc = useAppSelector(selectSettingsRpc)
  const [rpc, setRpc] = useState(settingsRpc)

  const dispatch = useAppDispatch()
  const save = () => {
    dispatch(settingsUpdated({ rpc }))
    dispatch(snackbarAdded({ message: 'RPC URL saved.' }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRpc(e.target.value)

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Network" />
      <CardContent>
        <Stack alignItems="start" spacing={2}>
          <TextField
            value={rpc}
            onChange={handleChange}
            label="RPC URL"
            size="small"
            fullWidth
          />

          <Button onClick={save} variant="contained">
            Save
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
