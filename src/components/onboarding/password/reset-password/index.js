import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { resetPasswordAction } from 'actions/onboarding'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import OnboardingContent from 'components/onboarding/content'
import OnboardingForm from 'components/onboarding/form'
import { PreLoader } from 'components/onboarding/utils'
import { isEmailValid } from 'utils/validator'
import { ENTITY_NOT_FOUND } from 'const/requests'

export default function OnboardingResetPassword(props) {
  const { t } = useTranslation()
  const [userExists, setUserExists] = useState(true)
  const [resetPassword, setResetPassword] = useState(false)
  const [disable, setDisable] = useState(true)
  const [username, setUsername] = useState({ valid: null, value: null })

  const { user } = useSelector((state) => state.password)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (user && user.serviceErrorGroup === ENTITY_NOT_FOUND && username.valid) {
      dispatch(resetPasswordAction.failure())
      history.push('/onboarding/login/error', {
        text: t('login.userNotExists'),
      })
    }

    if (user && Object.keys(user).length === 0) {
      history.push('/onboarding/confirm/email')
    }
  }, [user, history, username.valid, dispatch, t])

  const isValid = () => {
    if (username.valid) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  const onReset = () => {
    setResetPassword(true)
    dispatch(
      resetPasswordAction.request({
        username: username.value,
      }),
    )
  }

  return (
    <OnboardingContent>
      {!resetPassword ? (
        <OnboardingForm>
          <h2>{t('login.resetPassword')}</h2>
          {!userExists && (
            <p className="onboarding-login__subtitle">
              {t('login.userNotExists')}
            </p>
          )}
          <Form onKeyUp={isValid}>
            <Form.Group onChange={(e) => isEmailValid(e, setUsername)}>
              <Form.Control
                size="lg"
                type="email"
                placeholder={t('login.email')}
              />
              {username.valid === false && (
                <div className="error">{t('error.email')}</div>
              )}
            </Form.Group>
            <Form.Group className={`${disable ? 'disabled' : ''}`}>
              <Button onClick={onReset} variant="primary">
                {t('login.resetPassword')}
              </Button>
            </Form.Group>
          </Form>
        </OnboardingForm>
      ) : (
        <OnboardingForm>
          <PreLoader text={t('login.createAccount')} />
        </OnboardingForm>
      )}
    </OnboardingContent>
  )
}
