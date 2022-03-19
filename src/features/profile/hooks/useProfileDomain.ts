import { useGetDomainByAddressQuery } from 'services/domains-api'
import { useProfile } from './useProfile'

export function useProfileDomain() {
  const { account } = useProfile()

  const { data: domain, ...other } = useGetDomainByAddressQuery(
    { where: { owner: { _eq: account.address } } },
    { skip: !account }
  )

  return { domain, ...other }
}
