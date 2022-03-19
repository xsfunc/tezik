import dynamic from 'next/dynamic'
import { Button } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { selectActiveAccount } from 'features/accounts/accountsSlice'
import { connectAccount } from 'features/accounts/accountsThunks'

const AccountMenu = dynamic(() => import('./AccountMenu'))

export function Account() {
  const active = useAppSelector(selectActiveAccount)
  const dispatch = useAppDispatch()

  const addAccount = () => {
    dispatch(connectAccount())
  }

  if (!active)
    return (
      <Button onClick={addAccount} variant="contained">
        Connect wallet
      </Button>
    )

  return <AccountMenu />
}
