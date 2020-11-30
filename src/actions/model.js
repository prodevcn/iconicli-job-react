import * as types from 'const/requests'
import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import action from 'actions/action'

export const modelImageUpload = {
  request: (payload) => action(types.MODEL_IMAGE_UPLOAD[REQUEST], { payload }),
  success: (payload) => action(types.MODEL_IMAGE_UPLOAD[SUCCESS], { payload }),
  failure: (error) => action(types.MODEL_IMAGE_UPLOAD[FAILURE], error),
}

export const modelImageUpdate = (payload) => ({
  type: types.MODEL_IMAGE_UPDATE,
  payload,
})

export const modelBookingUpdate = {
  request: (payload) =>
    action(types.MODEL_BOOKING_UPDATE[REQUEST], { payload }),
  success: (payload) =>
    action(types.MODEL_BOOKING_UPDATE[SUCCESS], { payload }),
  failure: (error) => action(types.MODEL_BOOKING_UPDATE[FAILURE], error),
}

export const modelBookingInfo = (payload) => ({
  type: types.MODEL_BOOKING_INFO,
  payload,
})
