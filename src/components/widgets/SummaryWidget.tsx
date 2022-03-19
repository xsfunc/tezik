import dynamic from 'next/dynamic'
import { Card, Typography, Stack, Box, CustomTheme } from '@mui/material'
import { BaseIcon, Iconify } from 'components/Iconify'
import { useBaseOptionChart } from 'components/charts'
import { useTheme } from '@emotion/react'
import { ConvertedValue } from 'features/quotes/ConvertedValue'
import { formatCurrency, formatDatetime, formatNumber } from 'utils'
import { useProfileBalanceHistory } from 'features/profile/hooks/useProfileBalanceHistory'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

type Color = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'
type Props = {
  chartData: number[]
  color: Color
  icon: string
  percent: number
  title: string
  total: number
}

type IconProps = { color: Color; icon: string }
const Icon = ({ color, icon }: IconProps) => (
  <Box
    sx={{
      width: 48,
      height: 48,
      display: 'flex',
      borderRadius: '50%',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      color: (theme: CustomTheme) => theme.palette[color].lighter,
      bgcolor: (theme) => theme.palette[color].dark,
      right: (theme) => theme.spacing(3),
      top: (theme) => theme.spacing(3),
    }}
  >
    <Iconify sx={{ width: 24, height: 24 }} icon={icon} />
  </Box>
)

export function SummaryWidget({ color = 'primary', icon }: Props) {
  const {
    balanceHistory,
    balanceHistoryTimstamps,
    balance,
    weekDelta,
    currency,
  } = useProfileBalanceHistory()

  const baseOptions = useBaseOptionChart()
  const theme = useTheme()

  const percentIcon =
    weekDelta >= 0 ? 'eva:trending-up-fill' : 'eva:trending-down-fill'

  const chartOptions = {
    ...baseOptions,
    colors: [theme.palette[color].main],
    chart: { sparkline: { enabled: true } },
    xaxis: { labels: { show: false } },
    yaxis: { labels: { show: false } },
    stroke: { width: 4 },
    legend: { show: false },
    grid: { show: false },
    fill: { gradient: { opacityFrom: 0.56, opacityTo: 0.56 } },
    tooltip: {
      marker: { show: false },
      x: {
        formatter: (index: number) =>
          formatDatetime(balanceHistoryTimstamps[index - 1]),
      },
      y: {
        formatter: (value: number) => formatCurrency(value, { currency }),
        title: {
          formatter: () => 'Balance: ',
        },
      },
    },
  }

  return (
    <Card
      sx={{
        width: '100%',
        boxShadow: 'none',
        position: 'relative',
        color: (theme: CustomTheme) => theme.palette[color].darker,
        bgcolor: (theme: CustomTheme) => theme.palette[color].lighter,
      }}
    >
      <Icon color={color} icon={icon} />

      <Stack spacing={1} sx={{ p: 3 }}>
        <Typography sx={{ typography: 'subtitle2' }}>
          XTZ balance history
        </Typography>

        <ConvertedValue
          hideXTZ={false}
          value={balance}
          sx={{ typography: 'h3' }}
        />

        <Stack direction="row" alignItems="center" flexWrap="wrap" spacing={1}>
          <BaseIcon sx={{ mr: 0 }} icon={percentIcon} />

          <Typography variant="subtitle2" component="span">
            {formatNumber(weekDelta, {
              style: 'percent',
              maximumFractionDigits: 2,
            })}
          </Typography>

          <Typography variant="body2" component="span" sx={{ opacity: 0.72 }}>
            than week ago
          </Typography>
        </Stack>
      </Stack>

      {balanceHistory && (
        <ReactApexChart
          type="area"
          options={chartOptions}
          height={120}
          series={[
            {
              data: balanceHistory,
            },
          ]}
        />
      )}
    </Card>
  )
}
