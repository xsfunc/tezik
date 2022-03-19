import { Box, Button, Typography } from '@mui/material'
import { useAppDispatch } from 'app/hooks'
import { connectAccount } from 'features/accounts/accountsThunks'

export function ProfileConnect() {
  const dispatch = useAppDispatch()

  const addAccount = () => {
    dispatch(connectAccount())
  }

  return (
    <Box sx={{ maxWidth: 480, margin: 'auto', mt: 5, textAlign: 'center' }}>
      <Typography variant="h5" paragraph>
        Connect wallet first, please.
      </Typography>

      <Button size="large" variant="contained" onClick={addAccount}>
        Connect
      </Button>
    </Box>
  )
}
