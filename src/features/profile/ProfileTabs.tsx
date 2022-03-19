import { Box, Tab, Tabs } from '@mui/material'
import { BaseIcon } from 'components/Iconify'

const profileTabs = [
  {
    value: 'portfolio',
    label: 'Portfolio',
    icon: 'ic:round-account-box',
    component: null,
  },
  {
    value: 'nft',
    label: 'NFTs',
    icon: 'bi:images',
    component: null,
  },
  {
    value: 'history',
    label: 'History',
    icon: 'ant-design:unordered-list-outlined',
    component: null,
  },
]

export function ProfileTabs({ tab, setTab }) {
  const handleChange = (_, value: string) => setTab(value)

  return (
    <Box
      sx={{
        pr: { md: 3 },
        zIndex: 9,
        bottom: 0,
        width: '100%',
        display: 'flex',
        position: 'absolute',
        backgroundColor: 'background.paper',
        justifyContent: {
          sm: 'center',
          md: 'flex-end',
        },
      }}
    >
      <Tabs
        value={tab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChange}
      >
        {profileTabs.map((tab) => (
          <Tab
            icon={<BaseIcon icon={tab.icon} />}
            value={tab.value}
            label={tab.label}
            key={tab.value}
            disableRipple
          />
        ))}
      </Tabs>
    </Box>
  )
}
