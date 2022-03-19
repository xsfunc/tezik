import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit'
import { RootState } from 'app/store'
import { enhancedApi } from 'services/dipdup-api'
import { tzktTokensApi } from 'services/tzkt-api'

export interface Asset {
  name: string
  symbol: string
  decimals: string
  address?: string
  tokenId?: string
  tokenAddress?: string
  icon?: string
  balance: string
  value?: string
  lastPrice?: number
  historyPrice?: number
  priceChange?: number
}

export const balance = ({ balance, lastPrice, decimals }: Asset) => {
  if (!balance || !decimals || !lastPrice) return 0
  return Number(BigInt(balance) / BigInt(10 ** Number(decimals))) * lastPrice
}

export const priceDelta = (first: number, second: number) =>
  (first - second) / second

export const assetAdapter = createEntityAdapter<Asset>({
  sortComparer: (a, b) => balance(b) - balance(a),
  selectId: ({ address, tokenId, tokenAddress }) =>
    tokenAddress || `${address}_${tokenId}`,
})

const initialState = {
  assets: assetAdapter.getInitialState(),
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addMatcher(
        tzktTokensApi.endpoints.getTokensBalances.matchPending,
        (state) => {
          state.assets = assetAdapter.getInitialState()
        }
      )

      .addMatcher(
        tzktTokensApi.endpoints.getTokensBalances.matchFulfilled,
        (state, action) => {
          assetAdapter.addMany(state.assets, action.payload)
        }
      )

      .addMatcher(
        enhancedApi.endpoints.GetProfileTokensPrices.matchFulfilled,
        (state, { payload }) => {
          const { lastPrices, historyPrices } = payload

          assetAdapter.upsertMany(state.assets, lastPrices)
          assetAdapter.upsertMany(state.assets, historyPrices)
        }
      )
  },
})

export default profileSlice.reducer

export const selectProfileAssets = (state: RootState) => state.profile.assets

export const {
  selectAll: selectAllAssetes,
  selectById: selectAssetByAddress,
  selectEntities: selectAssets,
  selectIds: selectAssetsAdresses,
} = assetAdapter.getSelectors((state: RootState) => state.profile.assets)

export const selectAssetsWithBalance = createSelector(
  selectAllAssetes,
  (assets) => assets.filter((asset) => balance(asset) > 0)
)
