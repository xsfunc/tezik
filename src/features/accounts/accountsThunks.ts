import { createAsyncThunk } from '@reduxjs/toolkit'

import type { AccountInfo } from '@airgap/beacon-sdk'
import type { IThunkApi } from 'app/store'

export const getActiveAccount = createAsyncThunk<
  AccountInfo | undefined,
  undefined,
  IThunkApi
>('accounts/getActiveAccount', async (_, thunkApi) => {
  const { getDAppClient } = thunkApi.extra

  return getDAppClient()
    .then((client) => client.getActiveAccount())
    .catch((error) => thunkApi.rejectWithValue(error.message))
})

export const setActiveAccount = createAsyncThunk<
  AccountInfo,
  AccountInfo,
  IThunkApi
>('accounts/setActiveAccount', async (account, thunkApi) => {
  const { swapAccount } = thunkApi.extra

  return swapAccount(account).catch((error) =>
    thunkApi.rejectWithValue(error.message)
  )
})

export const getAccounts = createAsyncThunk<
  AccountInfo[],
  undefined,
  IThunkApi
>('accounts/getAccounts', async (_, thunkApi) => {
  const { getDAppClient } = thunkApi.extra

  return getDAppClient()
    .then((client) => client.getAccounts())
    .catch((error) => thunkApi.rejectWithValue(error.message))
})

export const connectAccount = createAsyncThunk<
  AccountInfo,
  undefined,
  IThunkApi
>('accounts/connectAccount', async (_, thunkApi) => {
  const { connectAccount } = thunkApi.extra

  return connectAccount()
    .then((result) => result.accountInfo)
    .catch((error) => thunkApi.rejectWithValue(error.message))
})

export const removeAccount = createAsyncThunk<void, string, IThunkApi>(
  'accounts/removeAccount',
  async (id, thunkApi) => {
    const { getDAppClient } = thunkApi.extra

    return getDAppClient()
      .then((client) => client.removeAccount(id))
      .catch((error) => thunkApi.rejectWithValue(error.message))
  }
)

export const removeAllAccounts = createAsyncThunk<void, undefined, IThunkApi>(
  'accounts/removeAllAccounts',
  async (_, thunkApi) => {
    const { getDAppClient } = thunkApi.extra

    return getDAppClient()
      .then((client) => client.removeAllAccounts())
      .catch((error) => thunkApi.rejectWithValue(error.message))
  }
)

export const delegate = createAsyncThunk<void, string, IThunkApi>(
  'accounts/delegate',
  async (delegate, thunkApi) => {
    const { loadWallet, loadTezos } = thunkApi.extra
    const { getState } = thunkApi
    const { rpc } = getState().settings

    const wallet = await loadWallet()
    const Tezos = await loadTezos(rpc, wallet)

    await Tezos.wallet.setDelegate({ delegate }).send()
  }
)
