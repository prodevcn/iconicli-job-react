import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logInAction } from 'actions/onboarding'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import OnboardingContent from 'components/onboarding/content'
import OnboardingForm from 'components/onboarding/form'
import { OnboardingNeedHelp, PreLoader } from 'components/onboarding/utils'
import { isEmailValid, isPassword } from 'utils/validator'
import OnboardingRedirect from 'components/onboarding/redirect'

export default function OnboardingLogin(props) {
  const { t } = useTranslation()
  const [isLogging, setIsLogging] = useState(false)
  const [disable, setDisable] = useState(true)
  const [email, setImail] = useState({ valid: null, value: null })
  const [password, setPassword] = useState({ valid: null, value: null })
  const [redirect, setRedirect] = useState(false)

  const { user } = useSelector((state) => state.login)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    if (user && user.status > 399) {
      setIsLogging(false)
      dispatch(logInAction.failure())
      history.push('/onboarding/login/error', { text: t('login.errorMessage') })
    }

    if (localStorage.getItem('token') && localStorage.getItem('role')) {
      setIsLogging(false)
      setRedirect(true)
    }
  }, [user, history, dispatch, t])

  const isValid = () => {
    if (email && password.valid) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  const onLogin = () => {
    setIsLogging(true)
    dispatch(
      logInAction.request({
        username: email.value,
        password: password.value,
      }),
    )
  }

  if (redirect) {
    return <OnboardingRedirect />
  }

  return (
    <OnboardingContent>
      {!isLogging ? (
        <OnboardingForm onKeyUp={isValid}>
          <h2>{t('login.title')}</h2>
          <Form>
            <Form.Group onChange={(e) => isEmailValid(e, setImail)}>
              <Form.Control
                size="lg"
                type="email"
                placeholder={t('onboarding.model.email')}
              />
              {email.valid === false && (
                <div className="error">{t('error.email')}</div>
              )}
            </Form.Group>
            <Form.Group onChange={(e) => isPassword(e, 6, setPassword)}>
              <Form.Control
                size="lg"
                type="password"
                placeholder={t('onboarding.model.password')}
              />
              {password.valid === false && (
                <div className="error">{t('error.password')} 6</div>
              )}
            </Form.Group>
            <Form.Group className={`${disable ? 'disabled' : ''}`}>
              <Button onClick={onLogin} variant="primary">
                {t('login.title')}
              </Button>
            </Form.Group>
            <Form.Group className="text-sm">
              <OnboardingNeedHelp />
            </Form.Group>
          </Form>
        </OnboardingForm>
      ) : (
        <OnboardingForm>
          <PreLoader text={t('login.logging')} />
        </OnboardingForm>
      )}
    </OnboardingContent>
  )
}
