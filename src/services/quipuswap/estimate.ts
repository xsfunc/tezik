import { estimateSwap } from '@quipuswap/sdk'
import { factories } from '.'

import type { Asset } from '@quipuswap/sdk'
import type { TezosToolkit } from '@taquito/taquito'

export interface EstimateSwapOptions {
  inputValue: number
  fromAsset: Asset
  toAsset: Asset
}

export async function estimate(
  tezos: TezosToolkit,
  { fromAsset, toAsset, inputValue }: EstimateSwapOptions
) {
  try {
    const estimatedOutputValue = await estimateSwap(
      tezos,
      factories,
      fromAsset,
      toAsset,
      { inputValue }
    )

    console.info({ estimatedOutputValue })

    const estimatedInputValue = await estimateSwap(
      tezos,
      factories,
      fromAsset,
      toAsset,
      { outputValue: estimatedOutputValue }
    )

    console.info({ estimatedInputValue })
  } catch (err) {
    console.error(err)
  }
}
