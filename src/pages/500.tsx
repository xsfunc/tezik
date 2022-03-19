import { Box, Button, Typography } from '@mui/material'
import { Link } from 'components/Link'
import { DashboardLayout } from 'layouts/dashboard'
import { PageLayout } from 'layouts/PageLayout'
import type { ReactElement } from 'react'

export default function Page() {
  return (
    <PageLayout title="500 - Server-side error occurred" sx={{ height: 1 }}>
      <Box sx={{ maxWidth: 480, margin: 'auto', mt: 5, textAlign: 'center' }}>
        <Typography variant="h5" paragraph>
          500 - Server-side error occurred
        </Typography>

        <Button
          component={Link}
          href="/profile"
          size="large"
          variant="contained"
        >
          Go to Home
        </Button>
      </Box>
    </PageLayout>
  )
}

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
)
