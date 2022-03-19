import { ReactElement } from 'react'
import { PageLayout } from 'layouts/PageLayout'
import { DashboardLayout } from 'layouts/dashboard'
import { Tokens } from 'features/tokens'

export default function Page() {
  return (
    <PageLayout sx={{ pb: 15 }} title="Swap">
      <Tokens />
    </PageLayout>
  )
}

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
)
