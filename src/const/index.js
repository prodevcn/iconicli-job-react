import { REQUEST, SUCCESS, FAILURE } from './requests'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export const LOG_IN = createRequestTypes('LOG_IN')
