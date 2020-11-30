import React from 'react'
import { Container } from 'react-bootstrap'
import OnboardingMainAbout from 'components/main/about'
import OnboardingMainHowItWorks from 'components/main/how-it-works'
import OnboardingMainCustomers from 'components/main/customers'

export default function OnboardingMainContent(props) {
  return (
    <div className="main-page__content">
      <i className="bg bg-1" />
      <i className="bg bg-2" />
      <i className="bg bg-3" />

      <Container>
        <OnboardingMainAbout />
        <OnboardingMainHowItWorks />
        <OnboardingMainCustomers />
      </Container>
    </div>
  )
}
