import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { ROLE_MODEL_USER, ROLE_COMPANY_USER } from 'const/requests'

export default function OnboardingRedirect(props) {
  const history = useHistory()

  useEffect(() => {
    const role = localStorage.getItem('role')

    if (role === ROLE_MODEL_USER) {
      history.push('/dashboard/model/profile')
    }
    if (role === ROLE_COMPANY_USER) {
      history.push('/dashboard/company/profile')
    }
  }, [history])

  return <></>
}
