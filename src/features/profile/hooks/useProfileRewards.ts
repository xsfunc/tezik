import { useState } from 'react'
import {
  useGetTransactionsCountQuery,
  useGetTransactionsQuery,
} from 'services/tzkt-api'
import { useProfile } from './useProfile'

export function useProfileRewards(limit = 5) {
  const { account } = useProfile()
  const count = 20
  const delegateAddress = account?.delegate.address
  const [page, setPage] = useState(1)

  const changePage = (_, value: number) => setPage(value)
  const { data: payouts } = useGetTransactionsQuery(
    {
      amount: { gt: 50_000_000 },
      limit: 50,
      sort: { desc: 'id' },
      select: { values: 'target' },
      sender: delegateAddress,
    },
    { skip: !delegateAddress }
  )

  const payoutAddesses = [...new Set(payouts?.map(({ address }) => address))]

  const { data: rewards, ...other } = useGetTransactionsQuery(
    {
      limit,
      sort: { desc: 'id' },
      offset: { pg: page - 1 },
      sender: { in: payoutAddesses?.join(',') },
      target: account.address,
    },
    { skip: !payoutAddesses }
  )

  return {
    rewards,
    ...other,
    page,
    setPage,
    changePage,
    pageCount: count && Math.ceil(count / limit),
  }
}
