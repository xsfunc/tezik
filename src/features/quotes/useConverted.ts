import { useAppSelector } from 'app/hooks'
import { useSettings } from 'features/settings'
import { formatCurrency } from 'utils'
import { selectCurrencyQuote } from './quotesSlice'

export function useConverted(
  amount: number,
  hideXTZ = false,
  decimal = 0,
  options = {}
) {
  const { currency } = useSettings()
  const quote = useAppSelector((state) => selectCurrencyQuote(state, currency))

  if (amount === undefined) return null
  if (hideXTZ && currency === 'xtz') return null

  return formatCurrency((amount / 10 ** decimal) * quote, {
    style: 'currency',
    currency,
    ...options,
  })
}
