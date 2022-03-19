import {
  Card,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  CardHeader,
  TableContainer,
  Typography,
  CardContent,
} from '@mui/material'
import { ProfileTokenRow } from './ProfileTokenRow'
import { useProfileAssets } from './hooks/useProfileAssets'

export function TokenList() {
  const addresses = useProfileAssets()

  return (
    <Card>
      <CardHeader title="Assets" sx={{ mb: 3 }} />
      {addresses?.length ? (
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Token</TableCell>
                <TableCell>Balance</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {addresses.map((address) => (
                <ProfileTokenRow key={address} address={address} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <CardContent>
          <Typography>No tokens.</Typography>
        </CardContent>
      )}
    </Card>
  )
}
