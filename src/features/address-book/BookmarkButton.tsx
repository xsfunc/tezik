import { IconButton } from '@mui/material'
import { useAddressBook } from './hooks/useAddressBook'

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import type { IconButtonProps } from '@mui/material'

interface Props extends IconButtonProps {
  address: string
  name?: string
  alias?: string
}

export function BookmarkButton({ address, alias, ...other }: Props) {
  const { hasContact, addContact, removeContact } = useAddressBook(address)

  const handleClick = () =>
    hasContact ? removeContact(address) : addContact({ address, alias })

  return (
    <IconButton {...other} onClick={handleClick}>
      {hasContact ? (
        <BookmarkIcon fontSize="small" />
      ) : (
        <BookmarkBorderIcon fontSize="small" />
      )}
    </IconButton>
  )
}
