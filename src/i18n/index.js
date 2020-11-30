import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import {
  onboarding,
  login,
  footer,
  congratulation,
  confirmEamil,
  resetPassword,
} from './onboarding.en'
import { error } from './form-validation.en'
import { dashboard } from './dashboard.en'
import { profile } from './model.en'

export default i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        onboarding,
        congratulation,
        confirmEamil,
        resetPassword,
        login,
        footer,
        error,
        dashboard,
        profile,
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
})
