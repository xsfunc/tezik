import { tzktApi as api } from './baseApi'
import { operations, Components } from './types'
import { convert } from 'dotize'

export type GetDelegatesQuery =
  operations['Delegates_Get']['parameters']['query']
export type GetDelegatesByAddressQuery =
  operations['Delegates_GetByAddress']['parameters']['path']
export type GetDelegatesCountQuery =
  operations['Delegates_GetCount']['parameters']['query']
export type Delegate = Components['schemas']['Delegate']

const tzktDelegates = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getDelegates: query<Delegate[], GetDelegatesQuery>({
      query: (args) => ({
        url: '/v1/delegates',
        params: convert(args),
      }),
    }),

    getDelegatesByAddress: query<Delegate, GetDelegatesByAddressQuery>({
      query: ({ address }) => ({
        url: `/v1/delegates/${address}`,
      }),
    }),

    getDelegatesCount: query<number, GetDelegatesCountQuery>({
      query: (query) => ({
        url: '/v1/delegates/count',
        params: query,
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetDelegatesQuery,
  useGetDelegatesByAddressQuery,
  useGetDelegatesCountQuery,
} = tzktDelegates
