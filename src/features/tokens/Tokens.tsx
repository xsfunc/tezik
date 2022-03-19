import { HeaderBreadcrumbs } from 'components/HeaderBreadcrumbs'
import { paths } from 'routes'

export function Tokens() {
  return (
    <>
      <HeaderBreadcrumbs
        heading="Tokens list"
        links={[{ name: 'Prices from Quipuswap', href: paths.tokens }]}
      />
    </>
  )
}
