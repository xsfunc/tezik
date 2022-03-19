import type { BeaconWallet } from '@taquito/beacon-wallet'
import type { TezosToolkit } from '@taquito/taquito'

export function tezosToolkit() {
  let tezosInstance: TezosToolkit
  let rpcUrlInstance: string

  async function initTezos(wallet: BeaconWallet) {
    const { TezosToolkit } = await import('@taquito/taquito')
    const Tezos = new TezosToolkit(rpcUrlInstance)

    if (wallet) Tezos.setWalletProvider(wallet)
    return Tezos
  }

  return {
    loadTezos: async (rpcUrl: string, wallet: BeaconWallet) => {
      if (!tezosInstance || rpcUrlInstance != rpcUrl) {
        rpcUrlInstance = rpcUrl
        tezosInstance = await initTezos(wallet)
      }

      return tezosInstance
    },
  }
}
