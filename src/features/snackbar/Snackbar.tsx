import type { SnackbarCloseReason } from '@mui/material'
import type { EntityId } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { MessageSnackbar } from './MessageSnackbar'
import {
  selectSnackbarById,
  selectSnackbarTotal,
  snackbarRemoved,
} from './snackbarSlice'

type Props = {
  id: EntityId
}

export default function Snackbar({ id }: Props) {
  const dispatch = useAppDispatch()
  const total = useAppSelector(selectSnackbarTotal)
  const data = useAppSelector((state) => selectSnackbarById(state, id))

  if (!data) return null

  const handleClose = (
    _: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') return
    dispatch(snackbarRemoved(id))
  }

  return <MessageSnackbar {...data} total={total} handleClose={handleClose} />
}
