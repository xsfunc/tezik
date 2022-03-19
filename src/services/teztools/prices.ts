import { teztoolsApi as api } from '.'
import { createEntityAdapter, EntityState } from '@reduxjs/toolkit'

interface Response {
  contracts: Token[]
}

interface Token {
  name: string
  symbol: string
  tokenAddress: string
  decimals: number
  address: string
  currentPrice: number
  type: string
  usdValue: number
  tags: string
  websiteLink: string
  thumbnailUri: string
}

const tokenAdapter = createEntityAdapter<Token>({
  selectId: ({ tokenAddress }) => tokenAddress,
})

const tezToolsPrices = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getTokensPrices: query<EntityState<Token>, void>({
      query: () => ({
        url: '/token/prices',
      }),

      transformResponse: (response: Response) =>
        tokenAdapter.addMany(
          tokenAdapter.getInitialState(),
          response.contracts
        ),
    }),
  }),

  overrideExisting: false,
})

export const { useGetTokensPricesQuery } = tezToolsPrices
