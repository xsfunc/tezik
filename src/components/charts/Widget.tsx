import dynamic from 'next/dynamic'
import ArrowUpIcon from '@mui/icons-material/ArrowUpwardRounded'
import ArrowDownIcon from '@mui/icons-material/ArrowDownwardRounded'
import { alpha, useTheme } from '@mui/material/styles'
import { Box, Card, Typography, Stack, CustomTheme } from '@mui/material'
import { formatNumber } from 'utils'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

type Props = {
  chartColor: string
  chartData: number[]
  percent: number
  title: string
  total: number
}

export default function Widget({
  title,
  percent,
  total,
  chartColor,
  chartData,
}: Props) {
  const theme = useTheme<CustomTheme>()

  const chartOptions = {
    colors: [chartColor],
    chart: { sparkline: { enabled: true } },
    plotOptions: { bar: { columnWidth: '68%', borderRadius: 2 } },
    tooltip: {
      x: { show: false },
      y: {
        formatter: (seriesName) => formatNumber(seriesName),
        title: {
          formatter: () => '',
        },
      },
      marker: { show: false },
    },
  }

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2">{title}</Typography>

        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ mt: 2, mb: 1 }}
        >
          <Box
            sx={{
              width: 24,
              height: 24,
              display: 'flex',
              borderRadius: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              color: (theme) => theme.palette.success.main,

              backgroundColor: (theme) =>
                alpha(theme.palette.success.main, 0.16),

              ...(percent < 0 && {
                color: 'error.main',
                bgcolor: alpha(theme.palette.error.main, 0.16),
              }),
            }}
          >
            {percent >= 0 ? (
              <ArrowUpIcon width={16} height={16} />
            ) : (
              <ArrowDownIcon width={16} height={16} />
            )}
          </Box>
          <Typography component="span" variant="subtitle2">
            {percent > 0 && '+'}
            {percent}
          </Typography>
        </Stack>

        <Typography variant="h3">{formatNumber(total)}</Typography>
      </Box>

      <ReactApexChart
        type="bar"
        series={[{ data: chartData }]}
        options={chartOptions}
        width={60}
        height={36}
      />
    </Card>
  )
}
