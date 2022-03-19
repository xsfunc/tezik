import { useTokenTradeHistory } from './hooks/useTokenTradeHistory'
import { ChartArea } from 'components/charts/ChartArea'
import { Box } from '@mui/material'

export function TokenChart() {
  const { trades } = useTokenTradeHistory()

  const series = [{ name: 'Price', data: trades.map((trade) => trade.price) }]
  const categories = trades.map((trade) => trade.timestamp)

  return (
    <Box sx={{ mb: 3 }}>
      <ChartArea series={series} categories={categories} />
    </Box>
  )
}
