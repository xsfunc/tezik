import { useProfile } from 'features/profile/hooks/useProfile'
import { useSettings } from 'features/settings'
import { useState } from 'react'
import {
  DelegatorRewards,
  useGetDelegatorRewardsCountQuery,
  useGetDelegatorRewardsQuery,
} from 'services/tzkt-api'

const profileRewards = ({
  balance,
  stakingBalance,

  revelationLostRewards,
  endorsementRewards,
  doubleBakingRewards,
  revelationRewards,
  ownBlockRewards,
  ownBlockFees,
  extraBlockRewards,
  extraBlockFees,
  missedEndorsementRewards,
}: DelegatorRewards) => {
  const share = balance / stakingBalance
  const bakerRewards =
    ownBlockRewards +
    ownBlockFees +
    extraBlockRewards +
    extraBlockFees +
    endorsementRewards +
    missedEndorsementRewards +
    revelationRewards +
    revelationLostRewards +
    doubleBakingRewards

  return bakerRewards * share
}

export function useRewards(limit = 10) {
  const { currency } = useSettings()
  const [page, setPage] = useState(1)
  const { account } = useProfile()

  const changePage = (_, value: number) => setPage(value)

  const { data: rewards, ...other } = useGetDelegatorRewardsQuery(
    {
      path: { address: account.address as string },
      query: {
        sort: { desc: 'cycle' },
        offset: { pg: page - 1 },
        quote: currency === 'xtz' ? undefined : currency,
      },
    },
    { skip: !account }
  )

  const { data: count } = useGetDelegatorRewardsCountQuery(
    { path: { address: account.address as string } },
    { skip: !account }
  )

  return {
    rewards,
    profileRewards: rewards?.map(profileRewards),
    ...other,
    page,
    changePage,
    pageCount: count && Math.ceil(count / limit),
  }
}
