import { tzktApi as api } from './baseApi'
import { operations, Components } from './types'
import { convert } from 'dotize'

type GetTransactionsQuery =
  operations['Operations_GetTransactions']['parameters']['query']
type TransactionOperation = Components['schemas']['TransactionOperation']

type GetTransactionsCountQuery =
  operations['Operations_GetTransactionsCount']['parameters']['query']

const tzktOperations = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getTransactions: query<TransactionOperation[], GetTransactionsQuery>({
      query: (args) => ({
        url: '/v1/operations/transactions',
        params: convert(args),
      }),
    }),

    getTransactionsCount: query<number, GetTransactionsCountQuery>({
      query: (args) => ({
        url: '/v1/operations/transactions/count',
        params: convert(args),
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetTransactionsQuery, useGetTransactionsCountQuery } =
  tzktOperations
