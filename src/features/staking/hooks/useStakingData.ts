import { useGetHomeQuery } from 'services/tzkt-api'

interface StakingData {
  avgRoi: number
  bakers: number
  inflation: number
  stakingPercentage: number
  totalStaking: number
}

export function useStakingData() {
  const { data } = useGetHomeQuery()
  const stakingData: StakingData = data?.stakingData

  return { stakingData }
}
