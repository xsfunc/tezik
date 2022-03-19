import { Typography, Paper, Stack, IconButton, Tooltip } from '@mui/material'
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

import TimeAgo from 'timeago-react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardRounded'
import InfoIcon from '@mui/icons-material/InfoRounded'
import { CopyButton } from 'components/CopyButton'
import { useAppDispatch } from 'app/hooks'
import { delegate } from 'features/accounts/accountsThunks'

import type { TDate } from 'timeago-react'
import type { Delegate } from 'services/tzkt-api'

export function DelegateListItem({
  address,
  alias,
  // balance,
  stakingBalance,
}: Delegate) {
  const dispatch = useAppDispatch()

  // const openTzkt = () => window.open(`https://tzkt.io/${hash}`, '_blank')
  const handleClick = () => {
    dispatch(delegate(address))
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
        <JdenticonAvatar
          src={alias ? tzktAvatar(address) : undefined}
          value={address}
        />

        <Stack>
          <Typography>{addressOrAlias({ alias, address })}</Typography>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Tooltip title={address}>
              <Typography color="text.secondary" variant="body2">
                {shortAddress(address)}
              </Typography>
            </Tooltip>
            <CopyButton content={address} size="small" />
          </Stack>
        </Stack>
      </Stack>

      <Stack alignItems="end">
        {/* <Stack sx={{ mr: 1 }} direction="row" alignItems="center" spacing={1}>
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
        </Stack> */}

        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Label variant="filled" color={'primary'}>
            <ConvertedValue value={stakingBalance} />
          </Label>
          <IconButton onClick={handleClick}>
            <InfoIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  )
}
