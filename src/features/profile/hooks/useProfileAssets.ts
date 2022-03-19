import { useAppSelector } from 'app/hooks'
import { selectAssetsAdresses } from '../profileSlice'
import { useProfileTokenBalances } from './useProfileTokenBalances'

export function useProfileAssets() {
  useProfileTokenBalances()
  return useAppSelector(selectAssetsAdresses)
}
