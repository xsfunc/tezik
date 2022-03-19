import dynamic from 'next/dynamic'
import { useBaseOptionChart } from '.'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

export function ChartArea({ height = 380, series, categories }) {
  const baseOptions = useBaseOptionChart()
  const chartOptions = {
    ...baseOptions,
    tooltip: { x: { format: 'dd/MM/yy HH:mm' } },
    stroke: {
      curve: 'stepline',
      width: 2,
    },
    xaxis: {
      type: 'datetime',
      categories,
    },
  }

  return (
    <ReactApexChart
      type="area"
      series={series}
      options={chartOptions}
      height={height}
    />
  )
}
