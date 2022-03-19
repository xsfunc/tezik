import { createContext, useState, useEffect, ReactNode } from 'react'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

interface ICollapseContext {
  isCollapsed: boolean
  collapseClick: boolean
  collapseHover: boolean
  onToggleCollapse: () => void
  onHoverEnter?: () => void
  onHoverLeave?: () => void
  isMobile: boolean
}

const initialState = {
  collapseClick: false,
  collapseHover: false,
} as ICollapseContext

export const CollapseDrawerContext =
  createContext<ICollapseContext>(initialState)

type Props = {
  children: ReactNode
}

export function CollapseDrawerProvider({ children }: Props) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'))

  const [collapse, setCollapse] = useState({
    click: false,
    hover: false,
  })

  useEffect(() => {
    if (isMobile) {
      setCollapse({
        click: false,
        hover: false,
      })
    }
  }, [isMobile])

  const onToggleCollapse = () =>
    setCollapse({ ...collapse, click: !collapse.click })

  const onHoverEnter = () =>
    collapse.click && setCollapse({ ...collapse, hover: true })

  const onHoverLeave = () => setCollapse({ ...collapse, hover: false })

  return (
    <CollapseDrawerContext.Provider
      value={{
        isCollapsed: collapse.click && !collapse.hover,
        collapseClick: collapse.click,
        collapseHover: collapse.hover,
        onToggleCollapse,
        onHoverEnter,
        onHoverLeave,
        isMobile,
      }}
    >
      {children}
    </CollapseDrawerContext.Provider>
  )
}
