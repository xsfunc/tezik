import { tzktApi as api } from './baseApi'

export const tzktHome = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getHome: query<any, void>({
      query: () => ({
        url: `/v1/home`,
      }),
    }),
  }),

  overrideExisting: false,
})

export const { useGetHomeQuery } = tzktHome
