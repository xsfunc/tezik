import { Paper, Typography } from '@mui/material'

type Props = {
  searchQuery: string
}

export function SearchNotFound({ searchQuery = '', ...other }: Props) {
  return searchQuery ? (
    <Paper {...other}>
      <Typography gutterBottom align="center" variant="subtitle1">
        Not found
      </Typography>
      <Typography variant="body2" align="center">
        No results found for &nbsp;
        <strong>&quot;{searchQuery}&quot;</strong>. Try checking for typos or
        using complete words.
      </Typography>
    </Paper>
  ) : (
    <Typography variant="body2"> Please enter keywords</Typography>
  )
}
