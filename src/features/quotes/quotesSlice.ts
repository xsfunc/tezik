import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

import type { Currency } from 'features/settings/settingsSlice'

type SettingsState = {
  [k in Currency]: number
}

const initialState = { xtz: 1 } as SettingsState

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    quotesUpdated: (state, action) => ({ ...state, ...action.payload }),
  },
})

export default quotesSlice.reducer
export const { quotesUpdated } = quotesSlice.actions
export const selectQuotes = (state: RootState) => state.quotes
export const selectCurrencyQuote = (state: RootState, currency: Currency) =>
  state.quotes[currency]
