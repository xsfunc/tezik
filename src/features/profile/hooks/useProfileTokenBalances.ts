import { useGetProfileTokensPricesQuery } from 'services/dipdup-api'
import { useGetTokensBalancesQuery } from 'services/tzkt-api'
import { useProfile } from './useProfile'

const yesterday = new Date(Date.now() - 86400000)

export function useProfileTokenBalances(limit = 1000) {
  const { account } = useProfile()
  const { data: tokens, ...other } = useGetTokensBalancesQuery(
    {
      limit,
      account: { eq: account.address },

      balance: { ne: '0' },
      select: 'balance,token',
      'token.contract.ne': 'KT1GBZmSxmnKJXGMdMLbugPfLyUPmuLSMwKS', // hide domain
      'token.metadata.null': false,
      'token.metadata.artifactUri.null': true,
    },
    {
      skip: !account,
    }
  )

  const tokenAdresses = tokens?.map(
    (token) => `${token.address}_${token.tokenId}`
  )

  const { data: prices } = useGetProfileTokensPricesQuery(
    {
      tokenAdresses: tokenAdresses as string[],
      date: yesterday.toISOString(),
    },
    { skip: !tokenAdresses }
  )

  return {
    tokens,
    prices,
    ...other,
  }
}
