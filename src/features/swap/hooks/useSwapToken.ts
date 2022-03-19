import { useAppSelector } from 'app/hooks'
import { useAccount } from 'features/accounts/hooks/useAccount'
import { useEffect, useState } from 'react'
import {
  useLazyGetAccountBalanceQuery,
  useLazyGetTokensBalancesQuery,
} from 'services/tzkt-api'

import { selectToken, SwapTokenType } from '../swapSlice'

export function useSwapToken(type: SwapTokenType) {
  const [balance, setBalance] = useState(0)

  const account = useAccount()
  const token = useAppSelector((state) => selectToken(state, type))

  const [getTezBalance] = useLazyGetAccountBalanceQuery()
  const [getTokenBalance] = useLazyGetTokensBalancesQuery()

  useEffect(() => {
    if (!account?.address || !token.contractAddress) return // no address -- no balance

    if (token.contractAddress === 'tez') {
      getTezBalance({ path: { address: account.address } }).then(({ data }) =>
        setBalance((data / 10 ** token.decimals) as number)
      )
    } else {
      getTokenBalance({
        'token.id': 0,
        'token.contract': token.contractAddress,
        account: account.address,
        select: { values: 'balance' },
      }).then(({ data }) => setBalance((data / 10 ** token.decimals) as number))
    }
  }, [token?.symbol, getTezBalance, getTokenBalance, account?.address])

  return { ...token, balance }
}
