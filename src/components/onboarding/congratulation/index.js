import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Congratulation from 'components/congratulation'
import DoubleText from 'components/double-text'

export default function OnboardingConfirmEmail(props) {
  const { t } = useTranslation()

  return (
    <Congratulation className="confirm">
      <h2 className="title-lg">
        <DoubleText text={t('congratulation.title')} />
      </h2>
      <p className="confirm__subtitle-extra">{t('congratulation.message1')}</p>
      <p className="confirm__text">{t('congratulation.message2')}</p>
      <p className="confirm__text">{t('congratulation.message3')}</p>
      <p className="confirm__text">{t('congratulation.message4')}</p>
      <p className="confirm__text">{t('congratulation.message5')}</p>
      <Form>
        <Form.Group className="confirm__button">
          <Button size="lg" variant="primary">
            {t('congratulation.button')}{' '}
          </Button>
        </Form.Group>
      </Form>
    </Congratulation>
  )
}
