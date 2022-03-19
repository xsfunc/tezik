import { quotesUpdated } from 'features/quotes/quotesSlice'
import { Components } from './types'
import { tzktApi as api } from './baseApi'

export type Quote = Components['schemas']['Quote']

export const tzktQuotes = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getLastQuotes: query<Quote, void>({
      query: () => '/v1/quotes/last',
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled
        dispatch(quotesUpdated(data))
      },
    }),
  }),
  overrideExisting: false,
})

export const { useGetLastQuotesQuery } = tzktQuotes
