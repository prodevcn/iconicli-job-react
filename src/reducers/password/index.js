import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'

const password = (state = {}, action) => {
  switch (action.type) {
    case types.RESET_PASSWORD[REQUEST]:
      return Object.assign({}, state, {
        user: null,
      })
    case types.RESET_PASSWORD[SUCCESS]:
      return Object.assign({}, state, {
        user: action.payload,
      })
    case types.RESET_PASSWORD[FAILURE]:
      return Object.assign({}, state, {
        user: null,
      })

    case types.CHANGE_PASSWORD[REQUEST]:
      return Object.assign({}, state, {
        user: null,
      })
    case types.CHANGE_PASSWORD[SUCCESS]:
      return Object.assign({}, state, {
        user: action.payload,
      })
    case types.CHANGE_PASSWORD[FAILURE]:
      return Object.assign({}, state, {
        user: null,
      })

    default:
      return Object.assign({}, state)
  }
}

export default password
