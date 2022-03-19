import { useGetFileQuery } from 'services/ipfs'
import { useAppDispatch } from 'app/hooks'
import { useEffect } from 'react'
import { tokensSelected } from '../swapSlice'
import { tokenListIpfs } from 'services/quipuswap'

interface Metadata {
  decimals: number
  symbol: string
  name: string
  thumbnailUri: string
}

interface Token {
  contractAddress: string
  metadata: Metadata
  type: 'FA12' | 'FA2'
}

export function useSwapTokens() {
  const dispatch = useAppDispatch()
  const { data } = useGetFileQuery(tokenListIpfs)

  useEffect(() => {
    if (!data) return

    const { tokens } = data
    const payload = tokens.slice(0, 2).map((token, index) => ({
      type: index === 0 ? 'input' : 'output',
      contractAddress: token.contractAddress,
      symbol: token.metadata.symbol,
      name: token.metadata.name,
      logoURI: token.metadata.thumbnailUri,
      decimals: token.metadata.decimals,
      standard: token.type,
      tokenId: token.fa2TokenId || 0,
    }))

    dispatch(tokensSelected(payload))
  }, [data, dispatch])

  return { tokens: data?.tokens }
}
