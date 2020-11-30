import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import OnboardingContent from 'components/onboarding/content'
import OnboardingForm from 'components/onboarding/form'
import { OnboardingNeedHelp } from 'components/onboarding/utils'

export default function OnboardingError(props) {
  const { t } = useTranslation()
  const history = useHistory()

  const goBack = () => history.goBack()

  return (
    <OnboardingContent>
      <OnboardingForm>
        <h2>{t('onboarding.error')}</h2>
        <Form>
          <Form.Group>
            <Button onClick={goBack} variant="primary">
              {t('onboarding.tryAgain')}
            </Button>
          </Form.Group>
          <Form.Group className="text-sm">
            <OnboardingNeedHelp />
          </Form.Group>
        </Form>
      </OnboardingForm>
    </OnboardingContent>
  )
}
