import { Paper, Stack, Typography } from '@mui/material'
import { useAppSelector } from 'app/hooks'
import { RootState } from 'app/store'
import { JdenticonAvatar } from 'components/JdenticonAvatar'
import { tzktAvatar } from 'services/tzkt-api/constants'
import { shortAddress } from 'utils'
import { selectContactById } from './addressBookSlice'

import { CopyButton } from 'components/CopyButton'
import { Link } from 'components/Link'
import { ContactMenu } from './ContactMenu'

interface Props {
  address: string
}

export function Contact({ address }: Props) {
  const contact = useAppSelector((state: RootState) =>
    selectContactById(state, address)
  )

  return (
    <Paper
      sx={{
        p: 2,
        mb: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Link href={`/profile/${address}`}>
          <JdenticonAvatar
            src={contact?.alias && tzktAvatar(address)}
            value={address}
          />
        </Link>
        <Stack>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Link href={`/profile/${address}`}>
              <Typography>{shortAddress(address)}</Typography>
            </Link>
            <CopyButton sx={{ my: 0 }} size="small" content={address} />
          </Stack>

          <Typography color="text.secondary">
            {contact?.name || contact?.alias || '—'}
          </Typography>
        </Stack>
      </Stack>

      <ContactMenu address={address} />
    </Paper>
  )
}
