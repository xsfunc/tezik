import { useAppSelector } from 'app/hooks'
import { selectContactsAddresses } from './addressBookSlice'
import { Contact } from './Contact'

export function ContactList() {
  const addresses = useAppSelector(selectContactsAddresses)

  const content = addresses.length
    ? addresses.map((address) => (
        <Contact key={address} address={address as string} />
      ))
    : 'Have no conacts.'

  return <>{content}</>
}
