import { Skeleton } from '@mui/material'
import type { SkeletonProps } from '@mui/material'

interface Props extends SkeletonProps {
  size?: number
}

export function ListSkeleton({ size = 20, ...other }: Props) {
  const items = [...Array(size)].map((_, index) => (
    <Skeleton key={index} {...other} />
  ))

  return <>{items}</>
}
