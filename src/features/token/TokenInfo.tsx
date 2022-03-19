import { Card, CardHeader } from '@mui/material'
import { JdenticonAvatar } from 'components/JdenticonAvatar'
import { useConverted } from 'features/quotes/useConverted'
import { ipfsToHttps } from 'services/ipfs'
import { useToken } from './hooks/useToken'
import { useTokenTradeHistory } from './hooks/useTokenTradeHistory'

export function TokenInfo() {
  const { contract, metadata } = useToken()
  const { trades } = useTokenTradeHistory()

  const price = trades?.[0]?.price
  const converted = useConverted(price, false, 0, { maximumFractionDigits: 5 })

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader
        sx={{ mb: 3 }}
        avatar={
          <JdenticonAvatar
            value={contract}
            src={ipfsToHttps(metadata?.icon || metadata?.thumbnailUri)}
          />
        }
        subheader={metadata?.name}
        title={`${metadata?.symbol} ${converted}`}
      />
    </Card>
  )
}
