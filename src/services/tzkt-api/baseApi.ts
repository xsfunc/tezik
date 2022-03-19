import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { tzktApiUrl as baseUrl } from './constants'

export const tzktApi = createApi({
  reducerPath: 'tzktApi',
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({}),
})
