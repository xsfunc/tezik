import { useGetTokensBalancesQuery } from 'services/tzkt-api'
import { useProfile } from './useProfile'

export function useProfileNFTs() {
  const { account } = useProfile()
  const { data: tokens, ...other } = useGetTokensBalancesQuery(
    {
      account: { eq: account?.address },
      balance: { ne: '0' },
      'token.standard': { eq: 'fa2' },
      'token.metadata.null': false,
      'token.metadata.artifactUri.null': false,
    },
    {
      skip: !account,
    }
  )

  return { tokens, other }
}
