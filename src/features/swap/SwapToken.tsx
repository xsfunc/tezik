import TokenIcon from '@mui/icons-material/Token'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {
  IconButton,
  Avatar,
  Typography,
  Paper,
  Stack,
  TextField,
} from '@mui/material'
import { ipfsToHttps } from 'services/ipfs'
import { useSwapToken } from './hooks/useSwapToken'
import { formatNumber } from 'utils'

import { SwapTokenType, tokenUpdated } from './swapSlice'
import { useState } from 'react'
import { useAppDispatch } from 'app/hooks'

type Props = {
  type?: SwapTokenType
}

export function SwapToken({ type = 'input' }: Props) {
  const token = useSwapToken(type)
  const [value, setValue] = useState('')
  const dispatch = useAppDispatch()
  const label = type === 'input' ? 'You pay' : 'You recieve'

  const handleChange = (e) => {
    dispatch(tokenUpdated({ type, balance: e.target.value }))
    setValue(e.target.value)
  }

  return (
    <>
      <Stack direction="row" spacing={1} alignItems="center">
        <TextField
          label={label}
          value={value}
          onChange={handleChange}
          sx={{ flexGrow: 1 }}
          type="number"
        />

        <Paper sx={{ p: 1, width: 200 }} elevation={2}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar src={ipfsToHttps(token?.logoURI)}>
              <TokenIcon />
            </Avatar>

            <Typography sx={{ flexGrow: 1 }}>{token?.symbol}</Typography>
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton>
          </Stack>
        </Paper>
      </Stack>

      <Stack
        sx={{ p: 1 }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography color="text.secondary" variant="body2">
          ${token?.price}
        </Typography>

        <Stack direction="row" spacing={1}>
          <Typography variant="body2">Balance</Typography>
          <Typography fontWeight="bold" variant="body2">
            {formatNumber(token.balance)}
          </Typography>
        </Stack>
      </Stack>
    </>
  )
}
