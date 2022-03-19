import { useContext } from 'react'
import { ProfileContext } from '../context/ProfileContext'
import type { ProfileContextState } from '../context/ProfileContext'

export const useProfile = () => useContext<ProfileContextState>(ProfileContext)
