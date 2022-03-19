import { Box, Stack, Typography } from '@mui/material'

type Props = {
  balance: number
  stakingBalance: number
}

export function DelegatorRewardListItem({
  cycle,
  balance,
  stakingBalance,
  profileRewards,
}: Props) {
  return (
    <Stack direction="row" spacing={1}>
      <Typography>{cycle}</Typography>
      <Typography>{balance / 1e6}</Typography>
      <Typography>{profileRewards / 1e6}</Typography>
      <Typography></Typography>
    </Stack>
  )
}
