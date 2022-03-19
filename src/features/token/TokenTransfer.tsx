import {
  Typography,
  Badge,
  Paper,
  Stack,
  IconButton,
  Tooltip,
} from '@mui/material'
import { JdenticonAvatar } from 'components/JdenticonAvatar'
import { tzktAvatar } from 'services/tzkt-api/constants'
import { Label } from 'components/Label'
import {
  addressOrAlias,
  formatDatetime,
  formatNumber,
  shortAddress,
} from 'utils'
import { ConvertedValue } from 'features/quotes/ConvertedValue'
import { CopyButton } from 'components/CopyButton'

import TimeAgo from 'timeago-react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardRounded'
import InfoIcon from '@mui/icons-material/InfoRounded'

import type { TDate } from 'timeago-react'

const openTzkt = (href: string) => () =>
  window.open(`https://tzkt.io/${href}`, '_blank')
const badgeIconStyle = (backgroundColor: string) => ({
  border: (theme) => `3px solid ${theme.palette.background.paper}`,
  color: 'primary.contrastText',
  transform: `rotate(-45deg)`,
  borderRadius: '50%',
  backgroundColor,
})

type AccountData = { address: string; alias?: string }
type Props = {
  transactionId: number
  amount: string
  timestamp: string
  from: AccountData
  to: AccountData
  fee?: string
}

export function TokenTransfer({
  transactionId,
  amount,
  timestamp,
  to,
  from,
  fee,
}: Props) {
  return (
    <Paper
      variant="outlined"
      sx={{
        mb: 1,
        p: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Stack direction="row">
        <Stack sx={{ mr: 4 }} direction="row" alignItems={'center'} spacing={1}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <ArrowForwardIcon
                fontSize="small"
                sx={badgeIconStyle('info.main')}
              />
            }
          >
            <JdenticonAvatar
              src={from?.alias ? tzktAvatar(from.address) : undefined}
              value={from.address}
            />
          </Badge>

          <Stack>
            <Typography variant={'body2'} color="text.secondary">
              From: {shortAddress(from.address)}
            </Typography>

            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Tooltip title={from.address}>
                <Typography>{addressOrAlias(from)}</Typography>
              </Tooltip>
              <CopyButton content={from.address} size="small" />
            </Stack>
          </Stack>
        </Stack>

        <Stack direction="row" alignItems={'center'} spacing={1}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            badgeContent={
              <ArrowForwardIcon
                fontSize="small"
                sx={badgeIconStyle('primary.main')}
              />
            }
          >
            <JdenticonAvatar
              src={to?.alias ? tzktAvatar(to.address) : undefined}
              value={to?.address}
            />
          </Badge>

          <Stack>
            <Typography variant={'body2'} color="text.secondary">
              To: {shortAddress(to.address)}
            </Typography>

            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Tooltip title={to.address}>
                <Typography>{addressOrAlias(to)}</Typography>
              </Tooltip>
              <CopyButton content={to.address} size="small" />
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack alignItems="end">
        <Stack sx={{ mr: 1 }} direction="row" alignItems="center" spacing={1}>
          <Tooltip
            placement="left"
            title={formatDatetime(timestamp, {
              day: '2-digit',
              month: 'short',
              hour: '2-digit',
              minute: '2-digit',
            })}
          >
            <Typography variant="body2">
              <TimeAgo
                datetime={timestamp as TDate}
                opts={{ minInterval: 30 }}
              />
            </Typography>
          </Tooltip>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={0.5}>
          {fee !== undefined && (
            <Typography variant="body2" color="text.secondary">
              fee: {formatNumber(fee / 1e6)} xtz
            </Typography>
          )}
          <IconButton onClick={openTzkt(`transactions/${transactionId}`)}>
            <InfoIcon />
          </IconButton>
        </Stack>
      </Stack>

      <Stack alignItems="end">{formatNumber(amount / 1e18)}</Stack>
    </Paper>
  )
}
