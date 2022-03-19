import { createContext, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { useAppSelector } from 'app/hooks'
import { selectActiveAccount } from 'features/accounts/accountsSlice'
import { useGetAccountByAddressQuery } from 'services/tzkt-api'

import { ProfileConnect } from '../ProfileConnect'
import { ProfileNotFound } from '../ProfileNotFound'
import type { User } from 'services/tzkt-api'

interface UserWithAddress extends User {
  address: string
}

export interface ProfileContextState {
  account: UserWithAddress
  isLoading: boolean
}

const initialState: ProfileContextState = {
  account: {},
  isLoading: true,
}

export const ProfileContext = createContext<ProfileContextState>(initialState)

type Props = {
  children: ReactNode
}

export function ProfileProvider({ children }: Props) {
  const active = useAppSelector(selectActiveAccount)
  const { isReady, query } = useRouter()

  const activeAddress = active?.address
  const queryAddress = query.address?.[0]
  const address = queryAddress || activeAddress

  const {
    data: account,
    isLoading,
    isError,
    ...other
  } = useGetAccountByAddressQuery(
    {
      path: { address },
      query: { metadata: true },
    },
    { skip: !address }
  )

  if (isError) return <ProfileNotFound />

  if (!isReady || isLoading) return null
  if (!address) return <ProfileConnect />
  if (account?.type !== 'user') return <ProfileNotFound />

  return (
    <ProfileContext.Provider
      value={{
        account,
        isLoading,
        ...other,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
