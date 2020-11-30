import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { REACT_APP_EMAIL } from 'const/api'
import ReactScroll from 'react-scroll'

export function OnboardingNeedHelp(props) {
  const { t } = useTranslation()
  return <a href={REACT_APP_EMAIL}>{t('onboarding.help')}</a>
}

export function OnboardingMember(props) {
  const { t } = useTranslation()
  return (
    <>
      {t('onboarding.link.member')}{' '}
      <Link to="/">{t('onboarding.link.click')}</Link>
    </>
  )
}

export function ForgotPassword(props) {
  const { t } = useTranslation()
  return (
    <Link to="/onboarding/login/new-password">{t('login.forgotPassword')}</Link>
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

export function ScrollTo(props) {
  const { to, offset } = props
  return (
    <ReactScroll.Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      className="bounceOutLeft"
      offset={offset || -65}
    >
      {props.children}
    </ReactScroll.Link>
  )
}
