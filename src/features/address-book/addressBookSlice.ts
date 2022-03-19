import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import type { RootState } from 'app/store'

export interface Contact {
  address: string
  alias?: string
  name?: string
}

export const addressBookAdapter = createEntityAdapter<Contact>({
  selectId: ({ address }: Contact) => address,
})

const addressBook = createSlice({
  name: 'addressBook',
  initialState: addressBookAdapter.getInitialState(),
  reducers: {
    contactAdded: addressBookAdapter.addOne,
    contactRemoved: addressBookAdapter.removeOne,
    contactUpdated: addressBookAdapter.updateOne,
    contactsImported: addressBookAdapter.addMany,
  },
})

const selectAddressBook = (state: RootState) => state.addressBook

export default addressBook.reducer

export const {
  contactAdded,
  contactRemoved,
  contactUpdated,
  contactsImported,
} = addressBook.actions

export const {
  selectTotal: selectTotalContacts,
  selectIds: selectContactsAddresses,
  selectById: selectContactById,
} = addressBookAdapter.getSelectors(selectAddressBook)
