import { ReactElement, useEffect } from 'react'
import { PageLayout } from 'layouts/PageLayout'
import { DashboardLayout } from 'layouts/dashboard'
import { ProfileAssets } from 'features/profile/ProfileAssets'
import { useRouter } from 'next/router'

export default function Page() {
  const { push } = useRouter()

  useEffect(() => {
    push('/profile')
  }, [push])

  return null

  return (
    <PageLayout sx={{ pt: 11, pb: 15 }} title="Profile">
      <ProfileAssets />
    </PageLayout>
  )
}

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
)
