import { api } from './generated/graphql'

export const enhancedApi = api.enhanceEndpoints({
  endpoints: {
    GetDomainByAddress: {
      transformResponse: (data) => data?.domain?.[0]?.id,
    },
  },
})

export const { useGetDomainByAddressQuery } = enhancedApi
