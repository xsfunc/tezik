import SearchIcon from '@mui/icons-material/SearchRounded'
import { useState } from 'react'
import { cssStyles } from 'utils/cssStyles'
import { IconButtonAnimate } from 'components/animate/IconButtonAnimate'
import { desktopHeight, mobileHeight } from './headerConfig'
import {
  Box,
  Input,
  Slide,
  Button,
  InputAdornment,
  ClickAwayListener,
} from '@mui/material'

import type { Theme } from '@mui/material'
import type { ChangeEvent } from 'react'
import { useRouter } from 'next/router'

const searchStyle = (theme: Theme) => ({
  ...cssStyles(theme).bgBlur(),
  position: 'absolute',
  top: 0,
  left: 0,
  height: mobileHeight,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 3),
  // boxShadow: theme.customShadows.z8,
  [theme.breakpoints.up('md')]: {
    height: desktopHeight,
    padding: theme.spacing(0, 5),
  },
})

type SearchboxProps = {
  open: boolean
  handleClose: () => void
}

function Searchbox({ open, handleClose }: SearchboxProps) {
  const { push } = useRouter()
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value)

  const search = () => {
    setSearchValue('')
    push(`/profile/${searchValue}`)
    handleClose()
  }

  return (
    <Slide direction="down" in={open} mountOnEnter unmountOnExit>
      <Box sx={searchStyle}>
        <Input
          value={searchValue}
          onChange={handleChange}
          autoFocus
          fullWidth
          disableUnderline
          placeholder="Enter user address"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon
                sx={{ color: 'text.disabled', width: 20, height: 20 }}
              />
            </InputAdornment>
          }
          sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
        />
        <Button variant="contained" onClick={search}>
          Search
        </Button>
      </Box>
    </Slide>
  )
}

export function Searchbar() {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen((state) => !state)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Searchbox open={open} handleClose={handleClose} />

      <ClickAwayListener onClickAway={handleClose}>
        <IconButtonAnimate onClick={handleOpen}>
          <SearchIcon />
        </IconButtonAnimate>
      </ClickAwayListener>
    </>
  )
}
