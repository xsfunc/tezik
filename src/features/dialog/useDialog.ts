import { useAppDispatch } from 'app/hooks'
import { dialogClosed, dialogOpened } from './dialogSlice'
import { DialogState } from './dialogSlice'

export function useDialog(dialog?: DialogState) {
  const dispatch = useAppDispatch()

  const close = () => dispatch(dialogClosed())
  if (!dialog) return { close, dispatch }

  const open = () => dispatch(dialogOpened(dialog))
  return { open, close, dispatch }
}
