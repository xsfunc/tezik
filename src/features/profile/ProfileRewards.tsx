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
import { DelegatorRewardsList } from 'features/staking/DelegatorRewardsList'
import { useProfileRewards } from './hooks/useProfileRewards'

export function ProfileRewards() {
  const { rewards, page, pageCount, isLoading, isFetching, changePage } =
    useProfileRewards()

  return (
    <Card>
      <CardHeader
        title="Rewards"
        subheader="From baker"
        action={
          <IconButton onClick={null} aria-label="filter">
            <FilterIcon />
          </IconButton>
        }
      />
      <CardContent>
        {isLoading || isFetching ? (
          <ListSkeleton
            size={5}
            variant="rectangular"
            sx={{ mb: 1, borderRadius: 1, height: 90 }}
          />
        ) : (
          rewards?.map((operation) => (
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
