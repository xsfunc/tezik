import { Box, Button, Typography } from '@mui/material'
import { Link } from './Link'

type Props = {
  title?: string
}

export function NotFound({ title = 'Sorry, page not found!' }: Props) {
  return (
    <Box sx={{ maxWidth: 480, margin: 'auto', mt: 5, textAlign: 'center' }}>
      <Typography variant="h5" paragraph>
        {title}
      </Typography>

      <Button component={Link} href="/profile" size="large" variant="contained">
        Go Home
      </Button>
    </Box>
  )
}
