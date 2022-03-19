import { useState } from 'react'
import {
  useGetDelegatesCountQuery,
  useGetDelegatesQuery,
} from 'services/tzkt-api/tzktDelegates'

export function useDelegates(limit = 20) {
  const [page, setPage] = useState(1)

  const changePage = (_, value: number) => setPage(value)

  const { data: count } = useGetDelegatesCountQuery({ active: { eq: true } })
  const { data: delegates, ...other } = useGetDelegatesQuery({
    active: { eq: true },
    sort: { desc: 'stakingBalance' },
    offset: { pg: page - 1 },
    limit,
  })

  return {
    delegates,
    ...other,
    page,
    changePage,
    pageCount: count && Math.ceil(count / limit),
  }
}
