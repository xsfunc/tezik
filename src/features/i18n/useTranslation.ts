import { useAppSelector } from 'app/hooks'
import {
  selectLang,
  selectSupportedLangs,
  selectTranslation,
} from './i18nSlice'

export function useTranslation() {
  const t = useAppSelector(selectTranslation)
  const lang = useAppSelector(selectLang)
  const supportedLangs = useAppSelector(selectSupportedLangs)

  return {
    t,
    lang,
    // setLang
    supportedLangs,
  }
}
