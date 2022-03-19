import dynamic from 'next/dynamic'
import { selectDialog } from './dialogSlice'
import { useAppSelector } from 'app/hooks'

const BaseDialog = dynamic(() => import('features/dialog/BaseDialog'))
const AddContactDialog = dynamic(
  () => import('features/dialog/AddContactDialog')
)

const dialogs = {
  Base: BaseDialog,
  AddContact: AddContactDialog,
}

export function RootDialog() {
  const { dialogType, dialogProps } = useAppSelector(selectDialog)
  if (!dialogType) return null

  const SpecificDialog = dialogs[dialogType]
  return <SpecificDialog {...dialogProps} />
}
