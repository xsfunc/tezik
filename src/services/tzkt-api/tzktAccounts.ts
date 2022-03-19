import { tzktApi as api } from './baseApi'
import { Components, operations } from './types'
import { convert } from 'dotize'

export type Contract = Components['schemas']['RelatedContract']
type GetAccountContractsParams =
  operations['Accounts_GetContracts']['parameters']

export type User = Components['schemas']['User']
type GetAccountByAddressParams =
  operations['Accounts_GetByAddress']['parameters']

type GetAccountBalanceParams = operations['Accounts_GetBalance']['parameters']

export type HistoricalBalance = Components['schemas']['HistoricalBalance']
type GetAccountBalanceHistoryParams =
  operations['Accounts_GetBalanceHistory']['parameters']

export type Operation = Components['schemas']['Operation']
type GetAccountOperatoinsParams =
  operations['Accounts_GetOperations']['parameters']

export const tzktAccountsApi = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getAccountContracts: query<Contract[], GetAccountContractsParams>({
      query: ({ path, query }) => ({
        url: `/v1/accounts/${convert(path.address)}/contracts`,
        params: convert(query),
      }),
    }),

    getAccountByAddress: query<User, GetAccountByAddressParams>({
      query: ({ path, query }) => ({
        url: `/v1/accounts/${path.address}`,
        params: convert(query),
      }),
    }),

    getAccountBalance: query<number, GetAccountBalanceParams>({
      query: ({ path }) => ({
        url: `/v1/accounts/${path.address}/balance`,
      }),
    }),

    getAccountBalanceHistory: query<
      HistoricalBalance[],
      GetAccountBalanceHistoryParams
    >({
      query: ({ path, query }) => ({
        url: `/v1/accounts/${path.address}/balance_history`,
        params: convert(query),
      }),

      transformResponse: (response: HistoricalBalance[]): HistoricalBalance[] =>
        response.reverse(),
    }),

    getAccountOperations: query<Operation[], GetAccountOperatoinsParams>({
      query: ({ path, query }) => ({
        url: `/v1/accounts/${path.address}/operations`,
        params: convert(query),
      }),
    }),
  }),

  overrideExisting: false,
})

export const {
  useGetAccountContractsQuery,
  useGetAccountByAddressQuery,
  useGetAccountBalanceQuery,
  useLazyGetAccountBalanceQuery,
  useGetAccountBalanceHistoryQuery,
  useGetAccountOperationsQuery,
} = tzktAccountsApi
