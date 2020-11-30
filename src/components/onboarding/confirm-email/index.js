import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import OnboardingContent from 'components/onboarding/content'
import OnboardingForm from 'components/onboarding/form'

export default function OnboardingConfirmEmail(props) {
  const { t } = useTranslation()

  return (
    <OnboardingContent>
      <OnboardingForm>
        <h2 className="title-lg">{t('confirmEamil.title')}</h2>
        <p className="onboarding-login__subtitle-extra">
          {t('confirmEamil.message1')}
        </p>
        <p className="onboarding-login__subtitle-extra">
          {t('confirmEamil.message2')}
        </p>
        <p className="onboarding-login__subtitle-extra">
          {t('confirmEamil.message3')}
        </p>
        <Form>
          <Form.Group className="onboarding-login__congrat-button">
            <Button variant="primary">{t('confirmEamil.button')} </Button>
          </Form.Group>
        </Form>
      </OnboardingForm>
    </OnboardingContent>
  )
}
