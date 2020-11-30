import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logInAction } from 'actions/onboarding'
import { useTranslation } from 'react-i18next'

export default function OnboardingLogOut(props) {
  const { t } = useTranslation()
  const [redirect, setRedirect] = useState(false)

  const dispatch = useDispatch()
  const history = useHistory()

  const onLogOut = () => {
    dispatch(logInAction.failure())
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    setRedirect(true)
  }

  useEffect(() => {
    if (redirect) {
      history.push('/')
    }
  }, [redirect, history])

  return (
    <span className="logout" onClick={onLogOut}>
      {t('login.logout')}
    </span>
  )
}
