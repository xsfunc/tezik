import {
  AccountInfo,
  ColorMode,
  NetworkType,
  DAppClientOptions,
} from '@airgap/beacon-sdk'
import type { BeaconWallet } from '@taquito/beacon-wallet'

export function dappClient() {
  let instance: BeaconWallet | undefined

  async function init() {
    const { BeaconWallet } = await import('@taquito/beacon-wallet')
    const dAppInfo: DAppClientOptions = {
      name: 'Tezik',
      preferredNetwork: process.env.NEXT_PUBLIC_NETWORK as NetworkType,
      iconUrl: 'https://avatars.githubusercontent.com/u/91132595?v=4',
      colorMode: ColorMode.DARK,
    }

    return new BeaconWallet(dAppInfo)
  }
  async function loadWallet() {
    if (!instance) instance = await init()
    return instance
  }

  async function getDAppClient() {
    const wallet = await loadWallet()
    return wallet.client
  }

  async function connectAccount() {
    const client = await getDAppClient()

    await client.clearActiveAccount()
    return client.requestPermissions({
      network: {
        type: process.env.NEXT_PUBLIC_NETWORK as NetworkType,
      },
    })
  }

  async function swapAccount(account: AccountInfo) {
    const client = await getDAppClient()

    await client.clearActiveAccount()
    await client.setActiveAccount(account)
    return account
  }

  return {
    loadWallet,
    getDAppClient,
    connectAccount,
    swapAccount,
  }
}
