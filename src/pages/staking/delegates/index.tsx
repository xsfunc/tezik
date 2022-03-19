import { ReactElement } from 'react'
import { PageLayout } from 'layouts/PageLayout'
import { DashboardLayout } from 'layouts/dashboard'
import { DelegateList } from 'features/staking'

export default function Page() {
  return (
    <PageLayout sx={{ pb: 15 }} title="Delagates">
      <DelegateList />
    </PageLayout>
  )
}

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
)
