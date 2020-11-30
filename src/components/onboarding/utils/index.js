import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { REACT_APP_EMAIL } from 'const/api'

export function OnboardingNeedHelp(props) {
  const { t } = useTranslation()
  return <a href={REACT_APP_EMAIL}>{t('onboarding.help')}</a>
}

export function OnboardingMember(props) {
  const { t } = useTranslation()
  return (
    <>
      {t('onboarding.link.member')}{' '}
      <Link to="/onboarding/login">{t('onboarding.link.click')}</Link>
    </>
  )
}

export function ForgotPassword(props) {
  const { t } = useTranslation()
  return (
    <Link to="/onboarding/login/reset-password">
      {t('login.forgotPassword')}
    </Link>
  )
}

export function PreLoader(props) {
  return (
    <div className="custom-preloader">
      <p>{props.text}</p>
      <i className="preloader" />
    </div>
  )
}

export function getIdFromPath(pattern) {
  return window.location.pathname.replace(pattern, '')
}
