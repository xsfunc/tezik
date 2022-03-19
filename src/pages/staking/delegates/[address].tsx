import { ReactElement } from 'react'
import { PageLayout } from 'layouts/PageLayout'
import { DashboardLayout } from 'layouts/dashboard'
import { Profile } from 'features/profile'

export default function Page() {
  return (
    <PageLayout sx={{ pb: 15 }} title="Delagates">
      <Profile />
    </PageLayout>
  )
}

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
)
