import { Drawer } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { dashboardWidth } from './navbarConfig'

type Props = {
  open: boolean
  children: React.ReactNode
  onClose: () => void
}

export function NavbarMobile({ open, onClose, children }: Props) {
  const { pathname } = useRouter()

  useEffect(() => {
    if (open) onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <Drawer
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: dashboardWidth } }}
    >
      {children}
    </Drawer>
  )
}
