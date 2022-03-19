import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { GraphQLClient } from 'graphql-request'
import { createApi } from '@reduxjs/toolkit/query/react'

const url = process.env.NEXT_PUBLIC_DOMAINS_HOST as string
export const client = new GraphQLClient(url)

export const api = createApi({
  reducerPath: 'domainsApi',
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({}),
})
