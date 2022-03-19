import FilterIcon from '@mui/icons-material/FilterListRounded'
import {
  Stack,
  Pagination,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Skeleton,
} from '@mui/material'
import { useAppDispatch } from 'app/hooks'
import { ListSkeleton } from 'components/ListSekelton'
import { snackbarAdded } from 'features/snackbar/snackbarSlice'
import { useTokenTransfers } from './hooks/useTokenTransactions'
import { TokenTransfer } from './TokenTransfer'

export function TokenTransfers() {
  const dispatch = useAppDispatch()

  const {
    transfers,
    transfersFee,
    page,
    pageCount,
    changePage,
    isLoading,
    isFetching,
  } = useTokenTransfers()

  const comingSoon = () => {
    dispatch(snackbarAdded({ message: 'Filters coming soon :)' }))
  }

  return (
    <Card>
      <CardHeader
        title="Transfers"
        subheader="Type: transactions"
        action={
          <IconButton onClick={comingSoon} aria-label="filter">
            <FilterIcon />
          </IconButton>
        }
      />

      <CardContent>
        {isLoading || isFetching ? (
          <ListSkeleton
            variant="rectangular"
            sx={{ mb: 1, borderRadius: 1, height: 96 }}
          />
        ) : (
          transfers?.map((transfer, index) => (
            <TokenTransfer
              key={transfer.id}
              fee={transfersFee?.[index]}
              {...transfer}
            />
          ))
        )}

        <Stack sx={{ mt: 3 }} spacing={2}>
          {pageCount ? (
            <Pagination count={pageCount} page={page} onChange={changePage} />
          ) : (
            <Skeleton height={32} />
          )}
        </Stack>
      </CardContent>
    </Card>
  )
}
