import { tzktApi as api } from './baseApi'
import { operations, Components } from './types'
import { convert } from 'dotize'

import type { Asset } from 'features/profile/profileSlice'
import { ipfsToHttps } from 'services/ipfs'
import { tokensCache } from 'services/utils'

export type GetTokensQuery =
  operations['Tokens_GetTokens']['parameters']['query']
export type GetTokensBalancesQuery =
  operations['Tokens_GetTokenBalances']['parameters']['query']
export type GetTokensTransfersQuery =
  operations['Tokens_GetTokenTransfers']['parameters']['query']

export type TokenTransfer = Components['schemas']['TokenTransfer']
export type TokenBalance = Components['schemas']['TokenBalance']
export type Token = Components['schemas']['Token']

interface Metadata {
  name: string
  symbol: string
  decimals: string
}

const toAssetEntity = ({ token, balance }: TokenBalance): Asset => {
  const tokenAddress = `${token.contract.address}_${token.tokenId}`
  const icon = ipfsToHttps(
    token.metadata.icon ||
      token.metadata.thumbnailUri ||
      tokensCache[tokenAddress]?.thumbnailUri
  )

  return {
    ...(token?.metadata as Metadata),
    icon,
    tokenId: token?.tokenId as string,
    address: token?.contract?.address as string,
    balance: balance as string,
  }
}

export const tzktTokensApi = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getTokens: query<Token[], GetTokensQuery>({
      query: (args) => ({
        url: '/v1/tokens',
        params: convert(args),
      }),
    }),

    getTokensBalances: query<Asset[], GetTokensBalancesQuery>({
      query: (args) => ({
        url: '/v1/tokens/balances',
        params: convert(args),
      }),

      transformResponse: (response: TokenBalance[]) =>
        response.map(toAssetEntity),
    }),

    getTokenTransfers: query<TokenTransfer[], GetTokensTransfersQuery>({
      query: (args) => ({
        url: '/v1/tokens/transfers',
        params: convert(args),
      }),
    }),

    getTokenTransfersCount: query<number, GetTokensTransfersQuery>({
      query: (args) => ({
        url: '/v1/tokens/transfers/count',
        params: convert(args),
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetTokensQuery,
  useGetTokensBalancesQuery,
  useLazyGetTokensBalancesQuery,
  useGetTokenTransfersQuery,
  useGetTokenTransfersCountQuery,
} = tzktTokensApi
