import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/store'
import { defaultRpc } from './constants'

import type { PayloadAction } from '@reduxjs/toolkit'

export type Currency = 'xtz' | 'usd' | 'btc' | 'eur' | 'eth'

type SettingsState = {
  rpc: string
  currency: Currency
  locale: string
}

const initialState = {
  rpc: defaultRpc,
  currency: 'usd',
  locale: 'en',
} as SettingsState

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    settingsUpdated: (state, action) => ({ ...state, ...action.payload }),
    currencyChanged: (state, action: PayloadAction<Currency>) => {
      state.currency = action.payload
    },
  },
})

export default settingsSlice.reducer
export const { settingsUpdated, currencyChanged } = settingsSlice.actions
export const selectSettings = (state: RootState) => state.settings

export const selectSettingsRpc = (state: RootState) => state.settings.rpc
export const selectSettingsLocale = (state: RootState) => state.settings.locale
export const selectSettingsCurrency = (state: RootState) =>
  state.settings.currency
