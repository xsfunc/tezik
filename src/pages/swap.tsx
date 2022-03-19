import { ReactElement } from 'react'
import { PageLayout } from 'layouts/PageLayout'
import { DashboardLayout } from 'layouts/dashboard'
import { Swap } from 'features/swap'

export default function Page() {
  return (
    <PageLayout sx={{ pb: 15 }} title="Swap">
      <Swap />
    </PageLayout>
  )
}

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
)
