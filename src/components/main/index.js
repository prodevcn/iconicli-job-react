import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Logo from 'components/logo'
import OnboardingMainPattern from 'components/main/pattern'
import StickyNav from 'components/sticky-nav'
import OnboardingContent from 'components/onboarding/content'
import OnboardingMainContent from 'components/main/content'
import OnboardingForm from 'components/onboarding/form'
import OnboardingMainFooter from 'components/main/footer'
import { ForgotPassword, OnboardingNeedHelp } from 'components/onboarding/utils'
import ScrollTop from 'components/scroll-top'

export default function OnboardingMain(props) {
  const { t } = useTranslation()

  return (
    <>
      <ScrollTop />
      <OnboardingMainPattern />
      <StickyNav>
        <Link to="/onboarding/model">
          <Button variant="primary">{t('onboarding.registerModel')}</Button>
        </Link>
        <Link to="/onboarding/company">
          <Button variant="primary">{t('onboarding.registerCompany')}</Button>
        </Link>
        <Link to="/onboarding/login">
          <Button variant="primary">{t('login.title')}</Button>
        </Link>
      </StickyNav>
      <OnboardingContent className="main-page">
        <OnboardingForm>
          <Logo />
          <Form>
            <Form.Group>
              <Link to="/onboarding/login">
                <Button variant="primary">{t('login.title')}</Button>
              </Link>
            </Form.Group>
            <Form.Group className="text-sm main-page__forgot-password">
              <ForgotPassword />
            </Form.Group>
            <Form.Group>
              <Link to="/onboarding/model">
                <Button variant="primary">
                  {t('onboarding.registerModel')}
                </Button>
              </Link>
            </Form.Group>
            <Form.Group>
              <Link to="/onboarding/company">
                <Button variant="primary">
                  {t('onboarding.registerCompany')}
                </Button>
              </Link>
            </Form.Group>
            <Form.Group className="text-sm">
              <OnboardingNeedHelp />
            </Form.Group>
          </Form>
        </OnboardingForm>
      </OnboardingContent>
      <OnboardingMainContent />
      <OnboardingMainFooter />
    </>
  )
}
