import React from 'react'
import OnboardingNavbarLinks from 'components/onboarding/navbar/links'
import SocialLinks from 'components/social-links'

export default function OnboardingNavbar(props) {
  return (
    <div className="onboarding-navbar">
      <OnboardingNavbarLinks isMain={props.isMain} />
      <SocialLinks />
    </div>
  )
}
