import { useGetTokenPriceHistoryQuery } from 'services/dipdup-api'
import { useToken } from './useToken'

const yesterday = new Date(Date.now() - 86400000 * 30).toISOString()

export function useTokenTradeHistory() {
  const { contract, metadata } = useToken()
  const { data: trades, ...other } = useGetTokenPriceHistoryQuery(
    {
      tokenAddress: contract,
      startDate: yesterday,
    },
    {
      skip: !contract,
    }
  )

  return {
    trades: trades || [],
    ...other,
  }
}
