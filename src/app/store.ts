import { configureStore, combineReducers } from '@reduxjs/toolkit'

import theme from 'features/theme/themeSlice'
import dialog from 'features/dialog/dialogSlice'
import snackbar from 'features/snackbar/snackbarSlice'
import i18n from 'features/i18n/i18nSlice'
import accounts from 'features/accounts/accountsSlice'
import settings from 'features/settings/settingsSlice'
import swap from 'features/swap/swapSlice'
import quotes from 'features/quotes/quotesSlice'
import addressBook from 'features/address-book/addressBookSlice'
import profile from 'features/profile/profileSlice'

import { domainsApi } from 'services/domains-api'
import { teztoolsApi } from 'services/teztools'
import { tzktApi } from 'services/tzkt-api'
import { dipdupApi } from 'services/dipdup-api'
import { ipfsApi } from 'services/ipfs'
import { dappClient } from 'services/dappClient'
import { tezosToolkit } from 'services/tezosToolkit'

import storage from 'redux-persist/lib/storage'
import stateReconciler from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import type { BeaconWallet } from '@taquito/beacon-wallet'
import type { TezosToolkit } from '@taquito/taquito'
import type {
  DAppClient,
  AccountInfo,
  PermissionResponseOutput,
} from '@airgap/beacon-sdk'

const devTools = process.env.NODE_ENV === 'development'
const ignoredActions = [REHYDRATE, FLUSH, PAUSE, PERSIST, PURGE, REGISTER]
const persistConfig = {
  storage,
  key: 'tezik',
  version: 1,
  whitelist: ['theme', 'settings', 'accounts', 'addressBook'],
  stateReconciler,
}

const rootReducer = combineReducers({
  accounts,
  theme,
  dialog,
  snackbar,
  i18n,
  settings,
  swap,
  quotes,
  addressBook,
  profile,

  [domainsApi.reducerPath]: domainsApi.reducer,
  [tzktApi.reducerPath]: tzktApi.reducer,
  [teztoolsApi.reducerPath]: teztoolsApi.reducer,
  [dipdupApi.reducerPath]: dipdupApi.reducer,
  [ipfsApi.reducerPath]: ipfsApi.reducer,
})

const reducer = persistReducer<RootState>(persistConfig, rootReducer)

export const store = configureStore({
  reducer,
  devTools,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          ...dappClient(),
          ...tezosToolkit(),
        },
      },
      serializableCheck: {
        ignoredActions,
      },
    })
      .concat(domainsApi.middleware)
      .concat(ipfsApi.middleware)
      .concat(tzktApi.middleware)
      .concat(teztoolsApi.middleware)
      .concat(dipdupApi.middleware),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export interface IThunkExtraArg {
  loadWallet: () => Promise<BeaconWallet>
  getDAppClient: () => Promise<DAppClient>
  swapAccount: (Account: AccountInfo) => Promise<AccountInfo>
  connectAccount: () => Promise<PermissionResponseOutput>
  loadTezos: (rpc: string, wallet: BeaconWallet) => Promise<TezosToolkit>
}

export interface IThunkApi {
  state: RootState
  extra: IThunkExtraArg
  rejectWithValue?: () => string
}
