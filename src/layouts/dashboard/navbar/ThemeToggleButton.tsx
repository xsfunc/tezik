import dynamic from 'next/dynamic'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { selectTheme, themeModeChanged } from 'features/theme/themeSlice'
import { IconButton, Tooltip } from '@mui/material'

const LightModeIcon = dynamic(
  () => import('@mui/icons-material/LightModeRounded')
)

const DarkModeIcon = dynamic(
  () => import('@mui/icons-material/DarkModeRounded')
)

export function ThemeToggleButton() {
  const { themeMode } = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()
  const isLight = themeMode === 'light'

  const toggleTheme = () => {
    const newMode = isLight ? 'dark' : 'light'
    dispatch(themeModeChanged(newMode))
  }

  return (
    <Tooltip title="Theme mode" placement="top">
      <IconButton onClick={toggleTheme}>
        {isLight ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  )
}
