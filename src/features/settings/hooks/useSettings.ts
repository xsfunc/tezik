import { useAppDispatch, useAppSelector } from 'app/hooks'
import { currencyChanged, selectSettingsCurrency } from '../settingsSlice'

import type { Currency } from '../settingsSlice'

export function useSettings() {
  const currency = useAppSelector(selectSettingsCurrency)
  const dispatch = useAppDispatch()

  const changeCurrency = (currency: Currency) =>
    dispatch(currencyChanged(currency))

  return {
    currency,
    changeCurrency,
  }
}
