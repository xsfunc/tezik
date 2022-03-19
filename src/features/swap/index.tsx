import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded'
import { Paper, IconButton, Typography, Stack, Grid } from '@mui/material'
import { SwapToken } from './SwapToken'
import { SwapButton } from './SwapButton'
import { SwapTypeButton } from './SwapTypeButton'
import { snackbarAdded } from 'features/snackbar/snackbarSlice'
import { useAppDispatch } from 'app/hooks'
// import { ChartArea } from 'components/charts/ChartArea'
import { useSwapTokens } from './hooks/useSwapTokens'
import { estimateSwap } from './swapThunks'

export function Swap() {
  const dispatch = useAppDispatch()
  const reloadData = () => dispatch(snackbarAdded({ message: 'Data reloaded' }))

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={5}>
        <Paper elevation={8} sx={{ px: 2, pb: 2, pt: 1, mt: 2 }}>
          <Stack
            sx={{ mb: 2 }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Swap</Typography>

            <Stack direction="row" alignItems="center">
              <IconButton onClick={reloadData} aria-label="reload">
                <ReplayRoundedIcon />
              </IconButton>

              <IconButton aria-label="settings">
                <SettingsRoundedIcon />
              </IconButton>
            </Stack>
          </Stack>

          <SwapToken type="input" />
          <SwapTypeButton />
          <SwapToken type="output" />

          <SwapButton />
        </Paper>
      </Grid>

      {/* <Grid item xs={12} md={7}>
        <ChartArea />
      </Grid> */}
    </Grid>
  )
}
