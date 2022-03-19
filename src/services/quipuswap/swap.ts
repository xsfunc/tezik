import { swap, batchify } from '@quipuswap/sdk'
import { factories } from '.'

import type { Asset } from '@quipuswap/sdk'
import type { TezosToolkit } from '@taquito/taquito'

export interface SwapOptions {
  inputValue: number
  fromAsset: Asset
  toAsset: Asset
  slippageTolerance: number
}

export async function swapTokens(
  tezos: TezosToolkit,
  { fromAsset, toAsset, inputValue, slippageTolerance }: SwapOptions
) {
  try {
    console.log(tezos)
    const swapParams = await swap(
      tezos,
      factories,
      fromAsset,
      toAsset,
      inputValue,
      slippageTolerance
    )

    const op = await batchify(tezos.wallet.batch([]), swapParams).send()

    console.info(op.hash)
    await op.confirmation()
    console.info('Complete')
  } catch (err) {
    console.error(err)
  }
}
