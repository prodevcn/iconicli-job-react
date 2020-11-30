import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'

const modelBooking = (state = {}, action) => {
  switch (action.type) {
    case types.MODEL_BOOKING_UPDATE[REQUEST]:
      return Object.assign({}, state, {
        booking: state.booking,
      })
    case types.MODEL_BOOKING_UPDATE[SUCCESS]:
      return Object.assign({}, state, {
        booking: { ...state.booking, ...action.payload },
      })
    case types.MODEL_BOOKING_UPDATE[FAILURE]:
      return Object.assign({}, state, {
        booking: null,
      })

    case types.MODEL_BOOKING_INFO:
      return Object.assign({}, state, {
        bookingInfo: { ...state.bookingInfo, ...action.payload },
      })

    default:
      return Object.assign({}, state)
  }
}

export default modelBooking
