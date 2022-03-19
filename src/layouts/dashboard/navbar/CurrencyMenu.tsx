import dynamic from 'next/dynamic'
import ArrowUpIcon from '@mui/icons-material/ArrowDropUpRounded'
import { useState } from 'react'
import { Button, MenuItem, Stack, Typography } from '@mui/material'
import { useSettings } from 'features/settings'
import { selectQuotes } from 'features/quotes/quotesSlice'
import { useAppSelector } from 'app/hooks'

import type { MouseEvent } from 'react'
import type { Currency } from 'features/settings/settingsSlice'
import { formatNumber } from 'utils'

const MenuPopover = dynamic(() => import('components/MenuPopover'))
const currencies: Currency[] = ['xtz', 'usd', 'eur', 'btc', 'eth']

export default function CurrencyMenu() {
  const quotes = useAppSelector(selectQuotes)
  const { currency, changeCurrency } = useSettings()
  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null)

  const handleClose = () => setAnchor(null)

  const handleOpen = (e: MouseEvent<HTMLButtonElement>) =>
    setAnchor(e.currentTarget)

  const handleClick = (currency: Currency) => {
    changeCurrency(currency)
    handleClose()
  }

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{ textTransform: 'uppercase' }}
        endIcon={<ArrowUpIcon />}
      >
        {currency}
      </Button>

      <MenuPopover
        arrow="bottom-left"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={Boolean(anchor)}
        onClose={handleClose}
        anchorEl={anchor}
        sx={{
          py: 1.5,
          mb: 2,
          width: 150,
          '& .MuiMenuItem-root': {
            px: 1,
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Stack spacing={0.75}>
          {currencies.map((option) => (
            <MenuItem
              key={option}
              selected={option === currency}
              onClick={() => handleClick(option)}
            >
              <Stack direction="row" spacing={1}>
                <Typography variant="subtitle1">
                  {option.toUpperCase()}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {formatNumber(quotes[option])}
                </Typography>
              </Stack>
            </MenuItem>
          ))}
        </Stack>
      </MenuPopover>
    </>
  )
}
