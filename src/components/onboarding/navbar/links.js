import React from 'react'
import { Link } from 'react-router-dom'
import { ScrollTo } from 'components/utils'

export default function OnboardingNavbarLinks(props) {
  const { isMain } = props
  return (
    <>
      <Link to="/">
        <span className="onboarding-navbar__logo">
          <span>i</span>
          <span>i</span>
        </span>
      </Link>
      <div className="onboarding-navbar__link">
        {isMain ? (
          <ScrollTo to="about">About</ScrollTo>
        ) : (
          <Link to="/">About</Link>
        )}
        <Link to="/faq" className="bounceOutLeft">
          Faq
        </Link>
        <Link to="/contacts" className="bounceOutLeft">
          Contact
        </Link>
        {isMain ? (
          <ScrollTo to="how-it-works">How it works</ScrollTo>
        ) : (
          <Link to="/">How it works</Link>
        )}
      </div>
    </>
  )
}
