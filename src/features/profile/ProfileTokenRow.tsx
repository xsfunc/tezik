import TokenIcon from '@mui/icons-material/Token'
import {
  Avatar,
  Box,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material'
import { formatNumber } from 'utils'
import { ConvertedValue } from 'features/quotes/ConvertedValue'
import { priceDelta, selectAssetByAddress } from 'features/profile/profileSlice'
import { useAppSelector } from 'app/hooks'
import { useRouter } from 'next/router'

import type { Asset } from 'features/profile/profileSlice'

type Props = {
  address: string
}

type AssetCellProps = {
  asset: Asset
}

export function ProfileTokenRow({ address }: Props) {
  const asset = useAppSelector((state) => selectAssetByAddress(state, address))
  const { push } = useRouter()

  return (
    <TableRow>
      <TableCell>
        <Stack direction="row" alignItems="center">
          <Avatar
            onClick={() => push(`/tokens/${asset?.tokenAddress}`)}
            sx={{ cursor: 'pointer' }}
            alt={asset.symbol}
            src={asset.icon}
          >
            <TokenIcon />
          </Avatar>

          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2">{asset.symbol}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {asset.name}
            </Typography>
          </Box>
        </Stack>
      </TableCell>

      <AssetBalance asset={asset} />
      <AssetPrice asset={asset} />
    </TableRow>
  )
}

function AssetBalance({ asset }: AssetCellProps) {
  const amount = asset.balance / 10 ** asset.decimals

  return (
    <TableCell>
      <Box>
        <Typography variant="subtitle2">{formatNumber(amount)}</Typography>

        {asset.lastPrice ? (
          <ConvertedValue
            value={asset.lastPrice * amount}
            sx={{ color: 'text.secondary' }}
            decimal={0}
            hideXTZ={false}
          />
        ) : (
          ''
        )}
      </Box>
    </TableCell>
  )
}

function AssetPrice({ asset }: AssetCellProps) {
  if (!asset.lastPrice) return null

  const delta = priceDelta(
    asset.lastPrice,
    asset.historyPrice || asset.lastPrice
  )

  const isdeltaPlus = delta > 0

  return (
    <TableCell>
      <ConvertedValue
        value={asset?.lastPrice}
        hideXTZ={false}
        loading={false}
        decimal={0}
      />

      <Typography variant="body2" color={isdeltaPlus ? 'primary' : 'error'}>
        {isdeltaPlus && '+'}
        {formatNumber(delta, { style: 'percent', maximumFractionDigits: 2 })}
      </Typography>
    </TableCell>
  )
}
