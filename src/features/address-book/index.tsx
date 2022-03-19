import { HeaderBreadcrumbs } from 'components/HeaderBreadcrumbs'

import { paths } from 'routes'
import { AddContactButton } from './AddContactButton'
import { ContactList } from './CantactList'

export function AddressBook() {
  return (
    <>
      <HeaderBreadcrumbs
        heading="Contact list"
        links={[{ name: 'Address book', href: paths.addressBook }]}
        action={<AddContactButton />}
      />

      <ContactList />
    </>
  )
}
