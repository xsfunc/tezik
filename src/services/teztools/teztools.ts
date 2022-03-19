import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from './constants'

export const teztoolsApi = createApi({
  reducerPath: 'teztoolsApi',
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({}),
})
