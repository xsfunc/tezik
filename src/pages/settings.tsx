import { ReactElement } from 'react'
import { PageLayout } from 'layouts/PageLayout'
import { DashboardLayout } from 'layouts/dashboard'
import { Settings } from 'features/settings'

export default function Page() {
  return (
    <PageLayout sx={{ pb: 15 }} title="Settings">
      <Settings />
    </PageLayout>
  )
}

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
)
