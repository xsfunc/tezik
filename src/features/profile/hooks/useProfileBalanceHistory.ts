import { useAppSelector } from 'app/hooks'
import { selectSettingsCurrency } from 'features/settings/settingsSlice'
import { useGetAccountBalanceHistoryQuery } from 'services/tzkt-api'
import { useProfile } from './useProfile'

import type { Currency } from 'features/settings/settingsSlice'

const precentDelta = (a: number, b: number) => (b - a) / a
const convertBalance =
  (currency: Currency) =>
  ({ balance, quote }) =>
    (quote ? quote[currency] * balance : balance) / 1e6

export function useProfileBalanceHistory() {
  const { account } = useProfile()

  const currency = useAppSelector(selectSettingsCurrency)
  const convertByCurrency = convertBalance(currency)

  const { data: balanceHistory, ...other } = useGetAccountBalanceHistoryQuery(
    {
      path: { address: account?.address },
      query: {
        quote: currency === 'xtz' ? 'none' : currency,
        select: { fields: ['timestamp', 'balance', 'quote'] },
        sort: { desc: 'level' },
        step: 2880,
        limit: 14,
      },
    },
    {
      skip: !account,
    }
  )

  if (!balanceHistory || balanceHistory.length < 7) return {}

  const quoteBalanceNow = convertByCurrency(balanceHistory.at(-1))
  const quoteBalanceWeekAgo = convertByCurrency(balanceHistory.at(6))
  const weekDelta = precentDelta(quoteBalanceWeekAgo, quoteBalanceNow)

  return {
    currency,
    balance: account?.balance,
    balanceHistory: balanceHistory.map(convertByCurrency),
    balanceHistoryTimstamps: balanceHistory?.map(({ timestamp }) => timestamp),
    weekDelta,
    other,
  }
}
