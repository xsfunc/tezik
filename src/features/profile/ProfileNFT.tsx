import NextLink from 'next/link'
import { alpha, styled } from '@mui/material/styles'
import {
  Box,
  Card,
  Avatar,
  Typography,
  CardContent,
  Link,
  Stack,
} from '@mui/material'

export function ProfileNft({ post, index }) {
  const { cover, title, view, comment, share, author, createdAt } = post

  return (
    <Card>
      <Box sx={{ position: 'relative' }}>
        <SvgIconStyle
          src="https://minimal-assets-api.vercel.app/assets/icons/shape-avatar.svg"
          sx={{
            width: 80,
            height: 36,
            zIndex: 9,
            bottom: -15,
            position: 'absolute',
            color: 'background.paper',
          }}
        />
        <Avatar
          alt={author.name}
          src={author.avatarUrl}
          sx={{
            left: 24,
            zIndex: 9,
            width: 32,
            height: 32,
            bottom: -16,
            position: 'absolute',
          }}
        />
        <Image alt="cover" src={cover} ratio="4/3" />
      </Box>

      <PostContent
        title={title}
        view={view}
        comment={comment}
        share={share}
        createdAt={createdAt}
      />
    </Card>
  )
}

// ----------------------------------------------------------------------

PostContent.propTypes = {
  comment: PropTypes.number,
  createdAt: PropTypes.string,
  index: PropTypes.number,
  share: PropTypes.number,
  title: PropTypes.string,
  view: PropTypes.number,
}

export function Content({ title, view, comment, share, createdAt, index }) {
  const isDesktop = useResponsive('up', 'md')

  const linkTo = `${PATH_DASHBOARD.blog.root}/post/${paramCase(title)}`

  const latestPostLarge = index === 0
  const latestPostSmall = index === 1 || index === 2

  const POST_INFO = [
    { number: comment, icon: 'eva:message-circle-fill' },
    { number: view, icon: 'eva:eye-fill' },
    { number: share, icon: 'eva:share-fill' },
  ]

  return (
    <CardContent
      sx={{
        pt: 4.5,
        width: 1,
        ...((latestPostLarge || latestPostSmall) && {
          pt: 0,
          zIndex: 9,
          bottom: 0,
          position: 'absolute',
          color: 'common.white',
        }),
      }}
    >
      <Typography
        gutterBottom
        variant="caption"
        component="div"
        sx={{
          color: 'text.disabled',
          ...((latestPostLarge || latestPostSmall) && {
            opacity: 0.64,
            color: 'common.white',
          }),
        }}
      >
        {fDate(createdAt)}
      </Typography>

      <NextLink href={linkTo} passHref>
        <Link color="inherit">
          <TextMaxLine
            variant={isDesktop && latestPostLarge ? 'h5' : 'subtitle2'}
            line={2}
            persistent
          >
            {title}
          </TextMaxLine>
        </Link>
      </NextLink>

      <Stack
        flexWrap="wrap"
        direction="row"
        justifyContent="flex-end"
        sx={{
          mt: 3,
          color: 'text.disabled',
          ...((latestPostLarge || latestPostSmall) && {
            opacity: 0.64,
            color: 'common.white',
          }),
        }}
      >
        {POST_INFO.map((info, index) => (
          <TextIconLabel
            key={index}
            icon={
              <Iconify
                icon={info.icon}
                sx={{ width: 16, height: 16, mr: 0.5 }}
              />
            }
            value={fShortenNumber(info.number)}
            sx={{ typography: 'caption', ml: index === 0 ? 0 : 1.5 }}
          />
        ))}
      </Stack>
    </CardContent>
  )
}
