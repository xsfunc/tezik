import FilterIcon from '@mui/icons-material/FilterListRounded'
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Pagination,
  Skeleton,
  Stack,
} from '@mui/material'
import { ListSkeleton } from 'components/ListSekelton'
import { Delegate } from 'services/tzkt-api/tzktDelegates'
import { DelegateListItem } from '.'
import { useDelegates } from './hooks/useDelegates'

export function DelegateList() {
  const { delegates, isLoading, isFetching, page, pageCount, changePage } =
    useDelegates()

  return (
    <>
      <Card>
        <CardHeader
          title="Delegates"
          action={
            <IconButton aria-label="filter">
              <FilterIcon />
            </IconButton>
          }
        />

        <CardContent>
          {isLoading || isFetching ? (
            <ListSkeleton
              variant="rectangular"
              sx={{ mb: 1, borderRadius: 1, height: 88 }}
            />
          ) : (
            delegates?.map((delegate: Delegate) => (
              <DelegateListItem key={delegate.address} {...delegate} />
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
    </>
  )
}
