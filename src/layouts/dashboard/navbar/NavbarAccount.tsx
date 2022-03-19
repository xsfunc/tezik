import { Box, Typography } from '@mui/material'
import { useCollapseDrawer } from '../hooks/useCollapseDrawer'
import { useAccount } from 'features/accounts/hooks/useAccount'
import { JdenticonAvatar } from 'components/JdenticonAvatar'
import { ConnectAccountButton } from 'features/accounts/ConnectAccountButton'
import { shortAddress } from 'utils'

import AccountMenu from 'features/accounts/AccountMenu'

export function NavbarAccount() {
  const { isCollapsed } = useCollapseDrawer()
  const account = useAccount()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isCollapsed ? 'center' : 'start',
        alignItems: 'center',
        p: 2,
        mx: 2,

        borderRadius: 2,
        backgroundColor: (theme) => theme.palette.grey[500_12],
        transition: ({ transitions }) =>
          transitions.create('opacity', {
            duration: transitions.duration.shorter,
          }),

        ...(!account && {
          px: 0,
          bgcolor: 'transparent',
        }),

        ...(isCollapsed && {
          bgcolor: 'transparent',
        }),
      }}
    >
      {account ? (
        <>
          <JdenticonAvatar value={account?.address} />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexGrow: 1,
              ml: 2,
              transition: ({ transitions }) =>
                transitions.create('width', {
                  duration: transitions.duration.shorter,
                }),

              ...(isCollapsed && {
                ml: 0,
                width: 0,
              }),
            }}
          >
            <Typography variant="subtitle2" noWrap>
              {shortAddress(account?.address)}
            </Typography>

            <AccountMenu
              sx={{
                ...(isCollapsed && {
                  display: 'none',
                }),
              }}
            />
          </Box>
        </>
      ) : (
        <ConnectAccountButton
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            ...(isCollapsed && {
              display: 'none',
            }),
          }}
        />
      )}
    </Box>
  )
}
