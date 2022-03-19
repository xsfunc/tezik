import { createAsyncThunk } from '@reduxjs/toolkit'
import { estimate, EstimateSwapOptions, factories } from 'services/quipuswap'
import { swap, batchify, ReadOnlySigner } from '@quipuswap/sdk'
import type { IThunkApi } from 'app/store'
import { TokenState } from './swapSlice'

export const estimateSwap = createAsyncThunk<
  void,
  EstimateSwapOptions,
  IThunkApi
>('swap/swapEstimated', async (options, thunkApi) => {
  const { loadTezos, loadWallet } = thunkApi.extra
  const { getState } = thunkApi

  const rpc = getState().settings.rpc
  const wallet = await loadWallet()
  const Tezos = await loadTezos(rpc, wallet)

  return estimate(Tezos, options)
})

const transfromToken = (token: TokenState) =>
  token.contractAddress === 'tez'
    ? 'tez'
    : {
        contract: token.contractAddress,
        id: token.id || 0,
      }

export const swapTokens = createAsyncThunk<any, undefined, IThunkApi>(
  'swap/swapStarted',
  async (_, thunkApi) => {
    const { loadTezos, loadWallet } = thunkApi.extra
    const { getState } = thunkApi

    const { input, output } = getState().swap
    const fromAsset = transfromToken(input)
    const toAsset = transfromToken(output)
    const slippageTolerance = getState().swap.settings.slippage

    const rpc = getState().settings.rpc
    const wallet = await loadWallet()
    const Tezos = await loadTezos(rpc, wallet)

    const publicKeyHash = 'tz1fVQangAfb9J1hRRMP2bSB6LvASD6KpY8A'
    const publicKey = 'edpkvWbk81uh1DEvdWKR4g1bjyTGhdu1mDvznPUFE2zDwNsLXrEb9K'
    Tezos.setSignerProvider(new ReadOnlySigner(publicKeyHash, publicKey))

    const swapParams = await swap(
      Tezos,
      factories,
      fromAsset,
      toAsset,
      12_000_000,
      slippageTolerance
    ).catch((e) => console.info(e.message))

    return batchify(Tezos.wallet.batch([]), swapParams)
      .send()
      .then((op) => op.confirmation())
      .catch((e) => console.info(e.message))
  }
)
