import { Button } from '@mui/material'
import { useAppDispatch } from 'app/hooks'
import { connectAccount } from 'features/accounts/accountsThunks'
import { useAccount } from 'features/accounts/hooks/useAccount'
import { swapTokens } from './swapThunks'

export function SwapButton() {
  const account = useAccount()
  const dispatch = useAppDispatch()

  const handleClick = () =>
    account ? dispatch(swapTokens()) : dispatch(connectAccount())

  return (
    <Button
      sx={{ mt: 2 }}
      onClick={handleClick}
      variant="contained"
      size="large"
      fullWidth
    >
      {account ? 'Swap' : 'Connect'}
    </Button>
  )
}
