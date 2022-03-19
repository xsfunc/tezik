import { Grid, Stack } from '@mui/material'
import { DonutChartCard } from 'components/charts/DonutChartCard'
import { ProfileAbout } from './ProfileAbout'
import { ProfileSocial } from './ProfileSocial'
import { SummaryWidget } from 'components/widgets/SummaryWidget'
import { ProfileAssets } from 'features/profile/ProfileAssets'
import { ProfileDeligate } from './ProfileDelegate'
import { ProfileRewards } from './ProfileRewards'

export function ProfilePortfolio() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            <DonutChartCard
              title="Assets allocation"
              series={[10, 12, 2, 44]}
              labels={['xtz', 'kusd', 'quipu', 'ctez']}
              total={434}
            />

            <ProfileAbout />
            <ProfileDeligate />
            <ProfileSocial />
          </Stack>
        </Grid>

        <Grid item xs={12} md={8}>
          <Stack spacing={3}>
            <SummaryWidget title="Total balance" icon={'entypo:wallet'} />
            <ProfileAssets />
            <ProfileRewards />
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}
