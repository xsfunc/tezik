import { operations, Components } from './types'
import { tzktApi as api } from './baseApi'
import { convert } from 'dotize'

export type DelegatorRewards = Components['schemas']['DelegatorRewards']
export type GetDelegatorRewardsParams =
  operations['Rewards_GetDelegatorRewards']['parameters']

export type GetDelegatorRewardsCountParams =
  operations['Rewards_GetDelegatorRewardsCount']['parameters']

export const tzktRewards = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getDelegatorRewards: query<DelegatorRewards[], GetDelegatorRewardsParams>({
      query: ({ path, query }) => ({
        url: `/v1/rewards/delegators/${path.address}`,
        params: convert(query),
      }),
    }),

    getDelegatorRewardsCount: query<number, GetDelegatorRewardsCountParams>({
      query: ({ path }) => ({
        url: `/v1/rewards/delegators/${path.address}/count`,
      }),
    }),
  }),

  overrideExisting: false,
})

export const { useGetDelegatorRewardsQuery, useGetDelegatorRewardsCountQuery } =
  tzktRewards
