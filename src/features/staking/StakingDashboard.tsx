import { Grid, Paper, Skeleton, Typography } from '@mui/material'
import { HeaderBreadcrumbs } from 'components/HeaderBreadcrumbs'
import { paths } from 'routes'
import { DelegateList, DelegatorRewardsList } from '.'
import { useStakingData } from './hooks/useStakingData'

export function StakingDashboard() {
  const { stakingData } = useStakingData()

  return (
    <>
      <HeaderBreadcrumbs
        heading="Staking"
        links={[{ name: 'Dashboard', href: paths.addressBook }]}
      />

      <Grid sx={{ mb: 3 }} spacing={3} container>
        <InfoCard
          title={'APY'}
          content={stakingData && `${stakingData.avgRoi}%`}
        />

        <InfoCard
          title="Inflation"
          content={stakingData && `${stakingData.inflation}%`}
        />

        <InfoCard title="Bakers" content={stakingData?.bakers} />

        <InfoCard
          title="Staked"
          content={stakingData && `${stakingData.stakingPercentage}%`}
        />
      </Grid>

      <DelegateList />
    </>
  )
}

type InfoCardProps = { title: string; content?: string | number }
function InfoCard({ title, content }: InfoCardProps) {
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Paper
        elevation={1}
        sx={{
          p: 3,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography color="text.secondary" variant="h5">
          {title}
        </Typography>

        <Typography variant="h4">
          {content ? content : <Skeleton variant="text" />}
        </Typography>
      </Paper>
    </Grid>
  )
}
