export type Language = 'en' | 'ru'
export type SupportedLanguages = {
  [K in Language]: string
}

export interface Translation {
  themeMode: string
}

export const supportedLangs = {
  en: 'English',
  ru: 'Русский',
} as SupportedLanguages

export const defaultLang: Language = 'en'
export const defaultTranslation = {
  themeMode: 'Theme mode',
} as Translation
