import { Button } from '@mui/material'
import { useAppDispatch } from 'app/hooks'
import { connectAccount } from 'features/accounts/accountsThunks'

import type { ButtonProps } from '@mui/material'

export function ConnectAccountButton(props: ButtonProps) {
  const dispatch = useAppDispatch()
  const addAccount = () => dispatch(connectAccount())

  return (
    <Button fullWidth onClick={addAccount} variant="outlined" {...props}>
      Connect wallet
    </Button>
  )
}
