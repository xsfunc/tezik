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
import { DelegatorRewardListItem } from './DelegatorRewardsListItem'
import { useRewards } from './hooks/useRewards'

export function DelegatorRewardsList() {
  const {
    rewards,
    profileRewards,
    isLoading,
    isFetching,
    page,
    pageCount,
    changePage,
  } = useRewards()

  return (
    <>
      <Card sx={{ mb: 3 }}>
        <CardHeader
          title="Rewards"
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
            rewards?.map((reward: Delegate, index: number) => (
              <DelegatorRewardListItem
                key={reward.cycle}
                {...reward}
                profileRewards={profileRewards[index]}
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
    </>
  )
}
