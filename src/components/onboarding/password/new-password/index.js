import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { changePasswordAction } from 'actions/onboarding'
import { Form, Button } from 'react-bootstrap'
import OnboardingContent from 'components/onboarding/content'
import OnboardingForm from 'components/onboarding/form'
import { PreLoader } from 'components/onboarding/utils'
import { isPassword, isConfirm } from 'utils/validator'
import { getIdFromPath } from 'components/onboarding/utils'

export default function OnboardingNewPassword(props) {
  const { t } = useTranslation()
  const [isChanging, setIsChanging] = useState(false)
  const [disable, setDisable] = useState(true)
  const [password, setPassword] = useState({ valid: null, value: null })
  const [confirm, setConfirm] = useState({ value: null })
  const [requestId, setRequestId] = useState('')

  const { user } = useSelector((state) => state.password)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    setRequestId(getIdFromPath('/user/password/change/'))
  }, [])

  useEffect(() => {
    if (user && user.success) {
      setIsChanging(false)
      history.push('/onboarding/reset-passwprd/congratulations')
    }
  }, [user, history])

  const isValid = () => {
    if (password.valid && password.value === confirm.value) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  const onSendPassword = () => {
    setIsChanging(true)
    dispatch(
      changePasswordAction.request({
        requestId,
        newPassword: password.value,
      }),
    )
  }

  return (
    <OnboardingContent>
      <OnboardingForm>
        {!isChanging ? (
          <>
            <h2>{t('login.newPasswordTitle')}</h2>
            <Form onKeyUp={isValid}>
              <Form.Group onChange={(e) => isPassword(e, 6, setPassword)}>
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder={t('login.newPlaceholder')}
                />
                {password.valid === false && (
                  <div className="error">{t('error.password')} 6</div>
                )}
              </Form.Group>

              <Form.Group onChange={(e) => isConfirm(e, setConfirm)}>
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder={t('login.confirmPassword')}
                />
                {confirm.value && confirm.value !== password.value && (
                  <div className="error">{t('error.confirm')}</div>
                )}
              </Form.Group>
              <Form.Group className={`${disable ? 'disabled' : ''}`}>
                <Button onClick={onSendPassword} variant="primary">
                  {t('login.changePassword')}
                </Button>
              </Form.Group>
            </Form>
          </>
        ) : (
          <PreLoader text={t('login.changingPassword')} />
        )}
      </OnboardingForm>
    </OnboardingContent>
  )
}
