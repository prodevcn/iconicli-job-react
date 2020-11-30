import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'

const onboarding = (state = {}, action) => {
  switch (action.type) {
    case types.ONBOARDING_SOCIAL[REQUEST]:
      return Object.assign({}, state, {
        user: null,
      })
    case types.ONBOARDING_SOCIAL[SUCCESS]:
      return Object.assign({}, state, {
        user: action.payload,
      })
    case types.ONBOARDING_SOCIAL[FAILURE]:
      return Object.assign({}, state, {
        user: null,
      })

    case types.ONBOARDING_COMMON[REQUEST]:
      return Object.assign({}, state, {
        user: null,
      })
    case types.ONBOARDING_COMMON[SUCCESS]:
      return Object.assign({}, state, {
        user: action.payload,
      })
    case types.ONBOARDING_COMMON[FAILURE]:
      return Object.assign({}, state, {
        user: null,
      })

    default:
      return Object.assign({}, state)
  }
}

export default onboarding
