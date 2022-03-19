import { CollapseDrawerContext } from '../context/CollapseDrawerContext'
import { useContext } from 'react'

export const useCollapseDrawer = () => useContext(CollapseDrawerContext)
