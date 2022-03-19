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
import { useProfile } from './hooks/useProfile'
import { addressOrAlias, formatDatetime, formatNumber } from 'utils'
import { ConvertedValue } from 'features/quotes/ConvertedValue'

import type { Components } from 'services/tzkt-api/types'
import type { TDate } from 'timeago-react'

import TimeAgo from 'timeago-react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardRounded'
import InfoIcon from '@mui/icons-material/OpenInNewRounded'
import { CopyButton } from 'components/CopyButton'
import { openTzkt } from 'services/tzkt-api'

type TransactionOperation = Components['schemas']['TransactionOperation']

export function ProfileTransaction({
  sender,
  parameter,
  status,
  target,
  amount,
  timestamp,
  bakerFee,
  hash,
}: TransactionOperation) {
  const { account } = useProfile()
  const isProfileSender = account?.address === sender?.address

  const badgeIconStyle = {
    border: (theme) => `3px solid ${theme.palette.background.paper}`,
    color: 'primary.contrastText',
    backgroundColor: isProfileSender ? 'info.main' : 'primary.main',
    transform: `rotate(${isProfileSender ? -45 : 135}deg)`,
    borderRadius: '50%',
  }

  return (
    <Paper
      sx={{
        mb: 1,
        p: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      variant="outlined"
    >
      <Stack direction="row" alignItems={'center'} spacing={2}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <ArrowForwardIcon fontSize="small" sx={badgeIconStyle} />
          }
        >
          <JdenticonAvatar
            src={sender.alias ? tzktAvatar(sender.address) : undefined}
            value={sender.address}
          />
        </Badge>

        <Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography color="text.secondary">
              {parameter ? `Call: ${parameter.entrypoint}` : 'Transfer XTZ'}
            </Typography>

            <ConvertedValue value={amount} hideXTZ={false} />
          </Stack>

          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Tooltip title={isProfileSender ? target.address : sender.address}>
              <Typography>
                {addressOrAlias(isProfileSender ? target : sender)}
              </Typography>
            </Tooltip>
            <CopyButton
              content={isProfileSender ? target.address : sender.address}
              size="small"
            />
          </Stack>
        </Stack>
      </Stack>

      <Stack alignItems="end">
        <Stack sx={{ mr: 1 }} direction="row" alignItems="center" spacing={1}>
          {!!bakerFee && (
            <Typography variant="body2" color="text.secondary">
              fee: {formatNumber(bakerFee / 1e6)} xtz
            </Typography>
          )}

          <Tooltip
            placement="top"
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
          <Label variant="filled" color={'primary'}>
            {status}
          </Label>
          <IconButton size="small" onClick={() => openTzkt(hash)}>
            <InfoIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  )
}
