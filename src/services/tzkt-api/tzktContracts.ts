import { tzktApi as api } from './baseApi'
import { convert } from 'dotize'
import { Components } from './types'

interface GetContractsQuery {
  creator: object | string
}

type Contract = Components['schemas']['RelatedContract']

const tzktContracts = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getContracts: query<Contract[], GetContractsQuery>({
      query: (query) => ({
        url: '/v1/contracts',
        params: convert(query),
      }),
    }),
  }),

  overrideExisting: false,
})

export const { useGetContractsQuery } = tzktContracts
