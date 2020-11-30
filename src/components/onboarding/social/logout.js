import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import sdk from 'react-social-login/src/sdk'
import { logInAction } from 'actions/onboarding'
import { Link } from 'react-router-dom'

export default function OnboardingSocialLogout() {
  const { user, data } = useSelector((state) => state.onboarding)
  const dispatch = useDispatch()

  useEffect(() => {}, [user, data])

  function logOut() {
    sdk[user.provider].logout()
    dispatch(logInAction.failure({ user: null }))
  }

  return (
    <div>
      <Link to="/onboarding/model">Onboarding</Link>
      <button onClick={logOut}>logout</button>
    </div>
  )
}
