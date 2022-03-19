import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://cloudflare-ipfs.com/ipfs/'

export const ipfsApi = createApi({
  reducerPath: 'ipfs',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({}),
})

const ipfsDefault = ipfsApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getFile: query({
      query: (uri) => uri,
    }),
  }),

  overrideExisting: false,
})

export const { useGetFileQuery } = ipfsDefault

export const ipfsToHttps = (uri?: string) =>
  uri?.startsWith('ipfs://')
    ? uri.replace('ipfs://', 'https://cloudflare-ipfs.com/ipfs/')
    : uri
