import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { REACT_APP_FACEBOOK_APP_ID } from 'const/api'
import { logInAction } from 'actions/onboarding'
import SocialButton from './button'

export default function OnboardingSocial(props) {
  const [success, setSuccess] = useState(false)
  const dispatch = useDispatch()

  const handleSocialLogin = (user) => {
    dispatch(logInAction.success({ user }))
    setSuccess(true)
  }

  const handleSocialLoginFailure = (err) => {
    console.error('LOGIN ERROR', err)
  }

  if (success) {
    return <Redirect push to="/model/dashboard" />
  }

  return (
    <div className="onboarding-social">
      <SocialButton
        provider="facebook"
        appId={REACT_APP_FACEBOOK_APP_ID}
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
        className="onboarding-social__facebook"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </SocialButton>
    </div>
  )
}
