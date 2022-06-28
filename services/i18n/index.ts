import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import i18nPL from './pl'

const resources = {
  pl: i18nPL,
}

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
