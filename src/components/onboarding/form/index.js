import React from 'react'

export default function OnboardingForm(props) {
  return (
    <div className="onboarding-content__form" {...props}>
      <div className="onboarding-content__form-wrapper">{props.children}</div>
    </div>
  )
}
