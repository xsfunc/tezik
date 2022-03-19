import Jdenticon from 'react-jdenticon'
import { Avatar } from '@mui/material'

import type { AvatarProps } from '@mui/material'

interface Props extends AvatarProps {
  value?: string
  size?: string
}

export function JdenticonAvatar({ value = '', size = '40', ...props }: Props) {
  return (
    <Avatar
      sx={{
        backgroundColor: 'background.paper',
      }}
      {...props}
    >
      <Jdenticon size={size} value={value} />
    </Avatar>
  )
}
