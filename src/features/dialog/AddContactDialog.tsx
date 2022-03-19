import React, { ChangeEvent, useState } from 'react'
import { addContact } from 'features/address-book/addressBookThunks'
import { useDialog } from './useDialog'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material'

export default function AddContactDialog() {
  const { close, dispatch } = useDialog()
  const [address, setAddress] = useState('')

  const handleClick = () => {
    dispatch(addContact(address))
    close()
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAddress(e.target.value)

  return (
    <Dialog fullWidth maxWidth="md" onClose={close} open>
      <DialogTitle>Add contact</DialogTitle>
      <DialogContent>
        <TextField
          sx={{ mt: 3 }}
          value={address}
          onChange={handleChange}
          label="Address"
          fullWidth
        />
      </DialogContent>

      <DialogActions>
        <Button variant="contained" onClick={handleClick}>
          Add
        </Button>

        <Button onClick={close}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}
