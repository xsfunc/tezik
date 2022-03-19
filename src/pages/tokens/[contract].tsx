import { ReactElement } from 'react'
import { PageLayout } from 'layouts/PageLayout'
import { DashboardLayout } from 'layouts/dashboard'
import { Token } from 'features/token'

export default function Page() {
  return (
    <PageLayout sx={{ pb: 15 }} title="Token">
      <Token />
    </PageLayout>
  )
}

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
)
