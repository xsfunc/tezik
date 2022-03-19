import { Card } from '@mui/material'
import { ProfileCover } from './ProfileCover'
import { ProfileTabs } from './ProfileTabs'
import { ProfileOperations } from './ProfileOperations'
import { ProfilePortfolio } from './ProfilePortfolio'
import { useState } from 'react'
import { ProfileNFTs } from './ProfileNFTs'
import { ProfileProvider } from './context/ProfileContext'

export function Profile() {
  const [tab, setTab] = useState('portfolio')

  return (
    <ProfileProvider>
      <Card
        sx={{
          mb: 3,
          height: 200,
          position: 'relative',
        }}
      >
        <ProfileCover />
        <ProfileTabs {...{ tab, setTab }} />
      </Card>

      {tab === 'portfolio' && <ProfilePortfolio />}
      {tab === 'history' && <ProfileOperations />}
      {tab === 'nft' && <ProfileNFTs />}
    </ProfileProvider>
  )
}
