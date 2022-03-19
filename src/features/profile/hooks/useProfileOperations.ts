import { useState } from 'react'
import { useGetTransactionsQuery } from 'services/tzkt-api'
import { useProfile } from './useProfile'

export function useProfileOperations(limit = 20) {
  const { account } = useProfile()
  const count = account.numTransactions
  const [page, setPage] = useState(1)

  const changePage = (_, value: number) => setPage(value)

  const { data: operations, ...other } = useGetTransactionsQuery(
    {
      limit,
      sort: { desc: 'id' },
      offset: { pg: page - 1 },
      'anyof.sender.target': account.address,
    },
    {
      skip: !account,
    }
  )

  return {
    page,
    setPage,
    changePage,
    operations,
    ...other,
    pageCount: count && Math.ceil(count / limit),
  }
}
