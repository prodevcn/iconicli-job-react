import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { ForgotPassword, OnboardingNeedHelp } from 'components/onboarding/utils'
import OnboardingContent from 'components/onboarding/content'
import OnboardingForm from 'components/onboarding/form'

export default function OnboardingResetPasswordCongratulation(props) {
  const { t } = useTranslation()
  const history = useHistory()

  const goBack = () => history.goBack()

  return (
    <OnboardingContent>
      <OnboardingForm>
        <h2>{t('login.error')}</h2>
        <p className="onboarding-login__subtitle">
          {history.location &&
            history.location.state &&
            history.location.state.text}
        </p>
        <Form>
          <Form.Group>
            <Button onClick={goBack} variant="primary">
              {t('login.tryAgain')}
            </Button>
          </Form.Group>
          <Form.Group className="text-sm">
            <ForgotPassword />
          </Form.Group>
          <Form.Group className="text-sm">
            <OnboardingNeedHelp />
          </Form.Group>
        </Form>
      </OnboardingForm>
    </OnboardingContent>
  )
}
