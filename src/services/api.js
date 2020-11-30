import { REACT_APP_API_URL } from 'const/api'

const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

function callApi(endpoint, headers) {
  return fetch(`${REACT_APP_API_URL}${endpoint}`, headers)
    .then((response) => {
      return response.clone().json()
    })
    .then((response) => response)
    .catch((error) => error)
}

export const onboarding = (body) =>
  callApi('/onboarding/register', {
    method: 'post',
    headers: jsonHeaders,
    body: JSON.stringify(body),
  })

export const login = (body) =>
  callApi('/auth/token', {
    method: 'post',
    headers: jsonHeaders,
    body: JSON.stringify(body),
  })

export const resetPassword = (body) =>
  callApi('/user/password/reset', {
    method: 'post',
    headers: jsonHeaders,
    body: JSON.stringify(body),
  })

export const changePassword = (body) => {
  callApi('/user/password/change', {
    method: 'post',
    headers: jsonHeaders,
    body: JSON.stringify(body),
  })
}
