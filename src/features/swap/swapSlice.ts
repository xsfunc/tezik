import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

export interface TokenState {
  name: string
  symbol: string
  logoURI: string
  decimals: number
  value: number

  contractAddress?: string
  standard?: string
  balance?: number
  price?: number
  id: number
}

export type SlippageVariants = 0.003 | 0.005 | 0.01
export type SwapTokenType = 'input' | 'output'

type SwapSettings = {
  slippage: SlippageVariants
}

interface SelectedToken extends TokenState {
  type: SwapTokenType
}

export type SwapState = {
  input: TokenState | Record<string, never>
  output: TokenState | Record<string, never>
  settings: SwapSettings
}

interface TokenUpdatedPaylaod {
  type: SwapTokenType
  balance: number
}

const initialState: SwapState = {
  input: {},
  output: {},
  settings: {
    slippage: 0.005,
  },
}

const swapSlice = createSlice({
  name: 'swap',
  initialState,
  reducers: {
    settingsUpdated: (state, { payload }: PayloadAction<SwapSettings>) => {
      state.settings = { ...state.settings, ...payload }
    },

    tokensSelected: (state, { payload }: PayloadAction<SelectedToken[]>) => {
      payload.forEach(({ type, ...other }) => {
        state[type] = other
      })
    },

    tokenUpdated: (state, { payload }: PayloadAction<TokenUpdatedPaylaod>) => {
      const { balance, type } = payload
      state[type].balance = balance
    },

    tokenTypeSwapped: (state) => {
      const inputCache = state.input
      state.input = state.output
      state.output = inputCache
    },
  },
})

export default swapSlice.reducer
export const {
  settingsUpdated,
  tokensSelected,
  tokenTypeSwapped,
  tokenUpdated,
} = swapSlice.actions

export const selectSwap = (state: RootState) => state.swap
export const selectSettings = (state: RootState) => state.swap.settings
export const selectSlippage = (state: RootState) => state.swap.settings.slippage
export const selectToken = (state: RootState, type: SwapTokenType) =>
  state.swap[type]
