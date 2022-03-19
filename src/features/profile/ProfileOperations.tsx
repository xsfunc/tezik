import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Pagination,
  Skeleton,
  Stack,
} from '@mui/material'
import { useProfileOperations } from './hooks/useProfileOperations'
import { ProfileTransaction } from './ProfileTransaction'

import FilterIcon from '@mui/icons-material/FilterListRounded'
import { useAppDispatch } from 'app/hooks'
import { snackbarAdded } from 'features/snackbar/snackbarSlice'
import { ListSkeleton } from 'components/ListSekelton'

export function ProfileOperations() {
  const { operations, page, pageCount, isLoading, isFetching, changePage } =
    useProfileOperations()
  const dispatch = useAppDispatch()

  const comingSoon = () => {
    dispatch(snackbarAdded({ message: 'Filters coming soon :)' }))
  }

  return (
    <Card>
      <CardHeader
        title="Operations"
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
            sx={{ mb: 1, borderRadius: 1, height: 90 }}
          />
        ) : (
          operations?.map((operation) => (
            <ProfileTransaction key={operation.id} {...operation} />
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
