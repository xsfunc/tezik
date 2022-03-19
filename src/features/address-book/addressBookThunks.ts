import { createAsyncThunk } from '@reduxjs/toolkit'
import { tzktAccountsApi } from 'services/tzkt-api'
import { contactAdded } from './addressBookSlice'

import type { Contact } from './addressBookSlice'
import type { IThunkApi } from 'app/store'

export const addContact = createAsyncThunk<void, string, IThunkApi>(
  'accounts/getActiveAccount',
  async (address, thunkApi) => {
    const { dispatch } = thunkApi

    const { data } = await dispatch(
      tzktAccountsApi.endpoints.getAccountByAddress.initiate({
        path: { address },
        query: { metadata: true },
      })
    )

    dispatch(contactAdded(data as Contact))
  }
)
