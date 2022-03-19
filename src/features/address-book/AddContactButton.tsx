import { Button } from '@mui/material'
import { Iconify } from 'components/Iconify'
import { useDialog } from 'features/dialog/useDialog'
import type { DialogState } from 'features/dialog/dialogSlice'

const dialog: DialogState = {
  dialogType: 'AddContact',
  dialogProps: {},
}

export function AddContactButton() {
  const { open } = useDialog(dialog)

  return (
    <Button
      onClick={open}
      variant="contained"
      startIcon={<Iconify icon={'eva:plus-fill'} />}
    >
      Add contact
    </Button>
  )
}
