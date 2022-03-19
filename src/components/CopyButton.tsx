import { IconButton } from '@mui/material'
import type { IconButtonProps } from '@mui/material'

import ContentCopyIcon from '@mui/icons-material/ContentCopyRounded'

interface Props extends IconButtonProps {
  content: string
}

export function CopyButton({ content, ...other }: Props) {
  const copy = () => navigator.clipboard.writeText(content)

  return (
    <IconButton {...other} onClick={copy}>
      <ContentCopyIcon fontSize="small" />
    </IconButton>
  )
}
