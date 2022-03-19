import { HeaderBreadcrumbs } from 'components/HeaderBreadcrumbs'
import { LanguageSettings } from './LanguageSettings'
import { NetworkSettings } from './NetworkSettings'

export function Settings() {
  return (
    <>
      <HeaderBreadcrumbs
        heading="Settings"
        links={[{ name: 'General settings' }]}
      />

      <NetworkSettings />
      <LanguageSettings />
    </>
  )
}
