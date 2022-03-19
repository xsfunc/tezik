import React from 'react'
import { useDialog } from './useDialog'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'

export type BaseDialogProps = {
  title?: string
  content?: string
}

export default function BaseDialog({ title, content }: BaseDialogProps) {
  const { close } = useDialog()

  return (
    <Dialog fullWidth maxWidth="md" onClose={close} open>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>

      <DialogActions>
        <Button onClick={close}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}
