import { useRouter } from 'next/router'
import { useGetTokensQuery } from 'services/tzkt-api'

export function useToken() {
  const { isReady, query } = useRouter()
  const contract = query.contract as string | undefined

  const [address, tokenId] = query?.contract?.split('_')

  const { data: tokens } = useGetTokensQuery(
    {
      tokenId,
      contract: { eq: address },
      select: { fields: 'metadata' },
    },

    { skip: !address }
  )

  return { contract, isReady, metadata: tokens?.[0] }
}
