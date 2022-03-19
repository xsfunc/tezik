import { createEntityAdapter } from '@reduxjs/toolkit'
import { api, Trade } from './generated/graphql'

interface PricesHistory {
  lastPrices: Trade[]
  historyPrices: Trade[]
}

const pricesAdapter = createEntityAdapter<Trade>({
  selectId: (asset) => asset.tokenAddress,
})

export const enhancedApi = api.enhanceEndpoints({
  endpoints: {
    GetTokenPriceHistory: {
      transformResponse: (data) => data.trade,
    },
    GetProfileTokensPrices: {
      // transformResponse({ lastPrices, historyPrices }: PricesHistory) {
      //   return {
      //     lastPrices: pricesAdapter.addMany(
      //       pricesAdapter.getInitialState(),
      //       lastPrices
      //     ),
      //     historyPrices: pricesAdapter.addMany(
      //       pricesAdapter.getInitialState(),
      //       historyPrices
      //     ),
      //   }
      // },
    },
  },
})

export const { useGetTokenPriceHistoryQuery, useGetProfileTokensPricesQuery } =
  enhancedApi
