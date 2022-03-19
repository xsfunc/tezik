import TimeAgo from 'timeago-react'
import { Card, Typography, CardHeader, Stack, Tooltip } from '@mui/material'
import { BaseIcon } from 'components/Iconify'
import { formatDatetime, formatNumber } from 'utils'
import { useProfile } from './hooks/useProfile'

interface Account {
  lastActivityTime: string
  firstActivityTime: string
  numTransactions: number
}

export function ProfileAbout() {
  const { account } = useProfile()
  if (!account) return null

  const { lastActivityTime, firstActivityTime, numTransactions } =
    account as Account

  return (
    <Card>
      <CardHeader title="About" />

      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack direction="row" alignItems="center">
          <BaseIcon icon={'heroicons-outline:status-online'} />
          <Tooltip
            placement="right-start"
            title={formatDatetime(lastActivityTime)}
          >
            <Typography variant="body2">
              Last activity <TimeAgo datetime={lastActivityTime} />
            </Typography>
          </Tooltip>
        </Stack>

        <Stack direction="row" alignItems="center">
          <BaseIcon icon={'majesticons:door-enter'} />
          <Tooltip
            placement="right-start"
            title={formatDatetime(firstActivityTime)}
          >
            <Typography variant="body2">
              First activity <TimeAgo datetime={firstActivityTime} />
            </Typography>
          </Tooltip>
        </Stack>

        <Stack direction="row" alignItems="center">
          <BaseIcon icon={'ant-design:swap-outlined'} />
          <Typography variant="body2">
            Transactions — {formatNumber(numTransactions)}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  )
}
