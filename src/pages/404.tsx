import { NotFound } from 'components/NotFound'
import { DashboardLayout } from 'layouts/dashboard'
import { PageLayout } from 'layouts/PageLayout'
import type { ReactElement } from 'react'

export default function Page() {
  return (
    <PageLayout title="404 Page Not Found" sx={{ height: 1 }}>
      <NotFound />
    </PageLayout>
  )
}

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
)
