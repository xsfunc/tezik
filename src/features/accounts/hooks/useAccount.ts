import { useAppSelector } from 'app/hooks'
import { selectActiveAccount } from '../accountsSlice'

export function useAccount() {
  return useAppSelector(selectActiveAccount)
}
