import { useAppDispatch, useAppSelector } from 'app/hooks'
import {
  contactAdded,
  contactRemoved,
  selectContactById,
} from '../addressBookSlice'

import type { Contact } from '../addressBookSlice'

export function useAddressBook(address: string) {
  const dispatch = useAppDispatch()
  const contact = useAppSelector((state) => selectContactById(state, address))

  const removeContact = (address: string) => dispatch(contactRemoved(address))
  const addContact = (contact: Contact) => dispatch(contactAdded(contact))

  return {
    hasContact: !!contact,
    contact,
    removeContact,
    addContact,
  }
}
