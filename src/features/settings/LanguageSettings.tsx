import { Card, CardContent, CardHeader, MenuItem, Select } from '@mui/material'
import { useAppSelector } from 'app/hooks'
import { selectSettingsLocale } from './settingsSlice'

export function LanguageSettings() {
  const locale = useAppSelector(selectSettingsLocale)

  return (
    <Card>
      <CardHeader title="Language" />
      <CardContent>
        <Select value={locale} label="Language" size="small" disabled>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="ru">Русский</MenuItem>
        </Select>
      </CardContent>
    </Card>
  )
}
