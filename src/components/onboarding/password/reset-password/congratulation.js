import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import OnboardingContent from 'components/onboarding/content'
import OnboardingForm from 'components/onboarding/form'

export default function OnboardingConfirmEmail(props) {
  const { t } = useTranslation()

  return (
    <OnboardingContent>
      <OnboardingForm>
        <h2 className="title-lg">{t('resetPassword.title')}</h2>
        <p className="onboarding-login__subtitle-extra">
          {t('resetPassword.message1')}
        </p>
        <Form>
          <Form.Group className="onboarding-login__congrat-button">
            <Link to="/onboarding/login">
              <Button variant="primary">{t('resetPassword.button')}</Button>
            </Link>
          </Form.Group>
        </Form>
      </OnboardingForm>
    </OnboardingContent>
  )
}
