import { Link, Card, CardHeader, Stack, IconButton } from '@mui/material'
import { grey } from '@mui/material/colors'
import { BaseIcon } from 'components/Iconify'
import { useProfile } from './hooks/useProfile'

const template = {
  site: (data: string) => ({
    data: data.replace('https://', '').replace('www.', ''),
    name: 'site',
    icon: 'il:url',
    color: '#fff',
    href: data,
  }),
  twitter: (data: string) => ({
    data,
    name: 'twitter',
    icon: 'eva:twitter-fill',
    color: '#1DA1F2',
    href: `https://twitter.com/${data}`,
  }),
  instagram: (data: string) => ({
    data,
    name: 'instagram',
    icon: 'ant-design:instagram-filled',
    color: '#E1306C',
    href: `https://instagram.com/${data}`,
  }),
  facebook: (data: string) => ({
    data,
    name: 'twitter',
    icon: 'eva:facebook-fill',
    color: '#1877F2',
    href: `https://facebook.com/${data}`,
  }),
  github: (data: string) => ({
    data,
    name: 'github',
    icon: 'akar-icons:github-fill',
    color: grey[600],
    href: `https://github.com/${data}`,
  }),
}

export function ProfileSocial() {
  const { account, accountIsLoading } = useProfile()
  let content

  if (accountIsLoading) content = 'Loading...'
  if (!account) content = 'No links'
  if (account) content = <LinkList metadata={account.metadata} />

  return (
    <Card>
      <CardHeader title="Social" />
      <Stack spacing={2} sx={{ p: 3 }}>
        {content}
      </Stack>
    </Card>
  )
}

const buttonListFilter = (social) =>
  ['twitter', 'instagram'].includes(social.name)

export function LinksButtonList({ metadata }) {
  if (!metadata) return null

  const links = Object.entries(metadata)
    .map(([name, data]) => template[name]?.(data))
    .filter(Boolean)
    .filter(buttonListFilter)

  return (
    <Stack direction="row" alignItems="center">
      {links.map(({ name, icon, color, href }) => (
        <IconButton
          component={Link}
          key={name}
          href={href}
          target="_blank"
          variant="body2"
          noWrap
        >
          <BaseIcon icon={icon} color={color} sx={{ mr: 0 }} />
        </IconButton>
      ))}
    </Stack>
  )
}

function LinkList({ metadata }) {
  if (!metadata) return 'No social links.'

  const links = Object.entries(metadata)
    .map(([name, data]) => template[name]?.(data))
    .filter(Boolean)

  return (
    <>
      {links.map(({ name, icon, color, href, data }) => (
        <Stack key={name} direction="row" alignItems="center">
          <BaseIcon icon={icon} color={color} />
          <Link
            href={href}
            target="_blank"
            variant="body2"
            color="text.primary"
            noWrap
          >
            {data}
          </Link>
        </Stack>
      ))}
    </>
  )
}
