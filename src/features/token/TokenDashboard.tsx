import { TokenChart } from './TokenChart'
import { TokenInfo } from './TokenInfo'
import { TokenTransfers } from './TokenTransfers'

export function Token() {
  return (
    <>
      <TokenInfo />
      <TokenChart />
      <TokenTransfers />
    </>
  )
}
