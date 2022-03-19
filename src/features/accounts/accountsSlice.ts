import { RootState } from 'app/store'
import {
  createEntityAdapter,
  createSlice,
  createSelector,
} from '@reduxjs/toolkit'
import type { AccountInfo } from '@airgap/beacon-sdk'

import {
  connectAccount,
  getAccounts,
  getActiveAccount,
  removeAccount,
  removeAllAccounts,
  setActiveAccount,
} from './accountsThunks'

export type IAccount = AccountInfo | null

const accountAdapter = createEntityAdapter<AccountInfo>({
  selectId: (account) => account.accountIdentifier,
})

type AccountsInitialState = {
  active?: IAccount
  isLoaded: boolean
}

const accountsSlice = createSlice({
  name: 'accounts',

  initialState: accountAdapter.getInitialState<AccountsInitialState>({
    active: null,
    isLoaded: false,
  }),

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAccounts.fulfilled, accountAdapter.addMany)

      .addCase(connectAccount.fulfilled, (state, { payload }) => {
        accountAdapter.addOne(state, payload)
        state.active = payload
      })

      .addCase(getActiveAccount.fulfilled, (state, { payload }) => {
        state.active = payload
        state.isLoaded = true
      })

      .addCase(setActiveAccount.fulfilled, (state, { payload }) => {
        state.active = payload
      })

      .addCase(removeAllAccounts.fulfilled, (state) => {
        accountAdapter.removeAll(state)
        state.active = null
      })

      .addCase(removeAccount.fulfilled, (state, action) => {
        const activeId = state.active?.accountIdentifier
        const { arg: id } = action.meta

        if (activeId === id) {
          const newActiveId = state.ids.find((elem) => elem != id)
          if (newActiveId) state.active = state.entities[newActiveId]
          else state.active = null
        }

        accountAdapter.removeOne(state, id)
      })
  },
})

const selectAccounts = (state: RootState) => state.accounts

export default accountsSlice.reducer
export const selectActiveAddress = createSelector(
  selectAccounts,
  ({ active, isLoaded }) => ({ address: active?.address, isLoaded })
)

export const selectActiveAccount = (state: RootState) => state.accounts.active
export const selectAccountIsLoaded = (state: RootState) =>
  state.accounts.isLoaded

export const { selectIds: selectAccountIds, selectById: selectAccountById } =
  accountAdapter.getSelectors(selectAccounts)
