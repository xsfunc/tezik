import { useState } from 'react'
import {
  useGetTokenTransfersCountQuery,
  useGetTokenTransfersQuery,
  useGetTransactionsQuery,
} from 'services/tzkt-api'
import { useToken } from './useToken'

const transactionId = (t) => t.transactionId

export function useTokenTransfers(limit = 20) {
  const [page, setPage] = useState(1)
  const { contract, isReady } = useToken()

  const changePage = (_, value: number) => setPage(value)

  const { data: transfers, ...other } = useGetTokenTransfersQuery(
    {
      'token.contract': { eq: contract?.split('_')[0] },
      from: { null: false },
      to: { null: false },
      sort: { desc: 'id' },
      offset: { pg: page - 1 },
      limit: 20,
    },
    { skip: !isReady || !contract }
  )

  const { data: count } = useGetTokenTransfersCountQuery(
    {
      'token.contract': { eq: contract },
      from: { null: false },
      to: { null: false },
      sort: { desc: 'id' },
      limit,
    },
    { skip: !isReady || !contract }
  )

  const { data: transfersFee } = useGetTransactionsQuery(
    {
      id: { in: transfers?.map(transactionId).join(',') },
      select: 'bakerFee',
      sort: { desc: 'id' },
    },
    {
      skip: !transfers,
    }
  )

  return {
    transfers,
    ...other,
    transfersFee,
    page,
    changePage,
    pageCount: count && Math.ceil(count / limit),
  }
}
