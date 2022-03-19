import dynamic from 'next/dynamic'
import { Box, Card, CardHeader } from '@mui/material'
import { useBaseOptionChart } from '.'

import type { ApexOptions } from 'apexcharts'
import { useProfileAssets } from 'features/profile/hooks/useProfileAssets'
import { useProfile } from 'features/profile/hooks/useProfile'
import { useProfileTokenBalances } from 'features/profile/hooks/useProfileTokenBalances'
import { useAppSelector } from 'app/hooks'
import { balance, selectAssetsWithBalance } from 'features/profile/profileSlice'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

type Props = {
  title: string
  labels: string[]
  series: number[]
  total?: number
  height?: number
}

export function DonutChartCard({ title }: Props) {
  useProfileTokenBalances()
  const assets = useAppSelector(selectAssetsWithBalance)
  const { account } = useProfile()

  const series = [
    account.balance / 1e6,
    ...assets.map((asset) => balance(asset)),
  ]

  const baseOptions = useBaseOptionChart()
  const chartOptions: ApexOptions = {
    ...baseOptions,

    labels: ['XTZ', ...assets.map((a) => a.symbol)],
    stroke: { show: false },
    legend: { horizontalAlign: 'center', position: 'bottom' },
    plotOptions: { pie: { donut: { size: '90%' } } },
  }

  return (
    <Card>
      <CardHeader sx={{ mb: 5 }} title={title} />
      <Box sx={{ my: 5 }}>
        <ReactApexChart
          type="donut"
          series={series}
          height={320}
          options={chartOptions}
        />
      </Box>
    </Card>
  )
}
