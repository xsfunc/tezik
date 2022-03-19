import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material'
import { CopyButton } from 'components/CopyButton'
import { JdenticonAvatar } from 'components/JdenticonAvatar'
import { tzktAvatar } from 'services/tzkt-api/constants'
import { addressOrAlias, shortAddress } from 'utils'
import { useProfile } from './hooks/useProfile'
import { useState } from 'react'
import { useProfileRewards } from './hooks/useProfileRewardsStats'
import { ConvertedValue } from 'features/quotes/ConvertedValue'

import type { ReactNode } from 'react'

interface IDelegate {
  active: boolean
  address: string
  alias?: string
}

export function ProfileDeligate() {
  const [show, setShow] = useState(false)
  const toggleStats = () => setShow(!show)

  return (
    <Card>
      <CardHeader
        title="Delegate"
        action={
          <Button onClick={toggleStats} size="small">
            {show ? 'Hide' : 'Show'} stats
          </Button>
        }
      />

      <Delegate />
      {show && <DelegateStats />}
    </Card>
  )
}

function Delegate() {
  const { account, isLoading } = useProfile()
  const delegate = account?.delegate as IDelegate
  let content: ReactNode

  if (isLoading) content = <Skeleton variant="rectangular" height={54} />
  if (!delegate) content = <Typography>Not delegated.</Typography>
  else
    content = (
      <Stack direction="row" alignItems="center" spacing={2}>
        <JdenticonAvatar
          src={delegate.alias && tzktAvatar(delegate.address)}
          value={delegate.address}
        />

        <Stack>
          <Typography>{addressOrAlias(delegate)}</Typography>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="body2" color="text.secondary">
              {shortAddress(delegate.address)}
            </Typography>
            <CopyButton size="small" content={delegate.address} />
          </Stack>
        </Stack>
      </Stack>
    )

  return <CardContent>{content}</CardContent>
}

function DelegateStats() {
  const { stats, isLoading, isFetching } = useProfileRewards()

  return (
    <Card>
      <CardHeader
        title="Stats"
        action={
          <Button size="small" endIcon={<ArrowDownIcon />}>
            for month
          </Button>
        }
      />
      <CardContent sx={{ pt: 1 }}>
        <Stack sx={{ mb: 1 }} direction="row" justifyContent="space-between">
          <Typography color="text.secondary" variant="body2">
            Average delegated
          </Typography>

          <ConvertedValue
            loading={isLoading || isFetching}
            value={stats?.balance}
            hideXTZ={false}
          />
        </Stack>

        <Stack sx={{ mb: 1 }} direction="row" justifyContent="space-between">
          <Typography color="text.secondary" variant="body2">
            Rewards earned
          </Typography>
          <ConvertedValue
            loading={isLoading || isFetching}
            value={stats?.rewards}
            hideXTZ={false}
          />
        </Stack>

        <Stack sx={{ mb: 1 }} direction="row" justifyContent="space-between">
          <Typography color="text.secondary" variant="body2">
            Baker fee
          </Typography>

          <ConvertedValue
            loading={isLoading || isFetching}
            value={stats?.bakerFee}
            hideXTZ={false}
          />
        </Stack>
      </CardContent>
    </Card>
  )
}
