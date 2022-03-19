import { ReactElement } from 'react'
import { PageLayout } from 'layouts/PageLayout'
import { DashboardLayout } from 'layouts/dashboard'
import { AddressBook } from 'features/address-book'

export default function Page() {
  return (
    <PageLayout sx={{ pb: 15 }} title="Address book">
      <AddressBook />
    </PageLayout>
  )
}

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
)
