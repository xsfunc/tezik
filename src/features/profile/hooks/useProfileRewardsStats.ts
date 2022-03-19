import { useState } from 'react'
import { useProfile } from './useProfile'
import { useGetDelegatorRewardsQuery } from 'services/tzkt-api'

//11 cycls = 31 days
//32 cycle = 3 months
//65 cycle = 6 months

interface Stats {
  balance: number
  rewards: number
  bakerFee: number
}

const statsInitial = {
  balance: 0,
  rewards: 0,
  bakerFee: 0,
} as Stats

function sumRewardsStats(prev, {}) {
  return prev
}

export function useProfileRewardsStats() {
  const [limit, setLimit] = useState(11)
  const { account } = useProfile()

  const { data: rewards, ...other } = useGetDelegatorRewardsQuery(
    {
      path: account,
      query: {
        // select: {fields: 'balance,'}
        limit,
      },
    },
    {
      skip: true,
    }
  )

  const stats: Stats = rewards?.reduce(sumRewardsStats, statsInitial)

  return {
    rewards,
    limit,
    setLimit,
    stats,
    ...other,
  }
}
