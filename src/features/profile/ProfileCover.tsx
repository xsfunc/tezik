import Jdenticon from 'react-jdenticon'
import { styled } from '@mui/material/styles'
import { Avatar, Stack, Box, CustomTheme, Typography } from '@mui/material'
import { cssStyles } from 'utils/cssStyles'
import { Image } from 'components/Image'
import { addressOrAlias, formatCurrency, shortAddress } from 'utils'
import { ConvertedValue } from 'features/quotes/ConvertedValue'
import { CopyButton } from 'components/CopyButton'
import { useProfile } from './hooks/useProfile'

import type { SystemStyleObject } from '@mui/system'
import { BookmarkButton } from 'features/address-book/BookmarkButton'
import { LinksButtonList } from './ProfileSocial'
import { useProfileDomain } from './hooks/useProfileDomain'

type CoverSxProps = (theme: CustomTheme) => SystemStyleObject<CustomTheme>
const coverSxProps: CoverSxProps = (theme: CustomTheme) => ({
  '&:before': {
    ...cssStyles(theme).bgBlur({
      blur: 2,
      color: theme.palette.primary.darker,
    }),
    top: 0,
    zIndex: 9,
    content: "''",
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
})

const InfoStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  zIndex: 99,
  position: 'absolute',
  marginTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    alignItems: 'center',
    right: theme.spacing(2),
    left: theme.spacing(3),
    bottom: theme.spacing(3),
  },
}))

export function ProfileCover() {
  const { account } = useProfile()
  const { domain } = useProfileDomain()

  return (
    <Box sx={coverSxProps}>
      <InfoStyle>
        <Avatar
          src={
            account?.alias &&
            `https://services.tzkt.io/v1/avatars/${account.address}`
          }
          sx={{
            mx: 'auto',
            borderWidth: 3,
            borderStyle: 'solid',
            borderColor: 'common.white',
            backgroundColor: 'background.paper',
            width: { xs: 80, md: 128 },
            height: { xs: 80, md: 128 },
          }}
        >
          <Jdenticon size="80" value={account?.address} />
        </Avatar>

        <Stack
          flexGrow={1}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            sx={{
              ml: { md: 3 },
              mt: { xs: 1, md: 0 },
              color: 'common.white',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Stack direction="row" alignItems="baseline" spacing={1}>
              {account?.alias && (
                <Typography variant="h6">
                  {addressOrAlias({
                    address: account?.address,
                    alias: domain || account.alias,
                  })}
                </Typography>
              )}

              <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                {shortAddress(account?.address)}
              </Typography>

              <Box>
                <CopyButton content={account?.address} />
                <BookmarkButton
                  address={account.address}
                  alias={account?.alias}
                />
              </Box>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="h6">
                {formatCurrency(account?.balance / 1e6, {
                  currency: 'xtz',
                })}
              </Typography>

              <Typography variant="h6">
                <ConvertedValue
                  value={account?.balance}
                  sx={{ opacity: 0.72 }}
                  hideXTZ={true}
                />
              </Typography>
            </Stack>
          </Box>

          {account?.metadata && (
            <LinksButtonList metadata={account?.metadata} />
          )}
        </Stack>
      </InfoStyle>

      <Image
        alt="profile cover"
        sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      />
    </Box>
  )
}
