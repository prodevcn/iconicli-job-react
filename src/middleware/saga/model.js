import { put, takeEvery } from 'redux-saga/effects'
import { REQUEST, SUCCESS } from 'const/actions'
import * as types from 'const/requests'

function* onBookingUpdateSuccess(data) {
  const { payload } = data
  yield put({
    type: types.MODEL_BOOKING_UPDATE[SUCCESS],
    payload,
  })
}

export function* onBookingUpdateRequest() {
  yield takeEvery(types.MODEL_BOOKING_UPDATE[REQUEST], onBookingUpdateSuccess)
}

function* onImageUploadSuccess(data) {
  const { payload } = data
  yield put({
    type: types.MODEL_IMAGE_UPLOAD[SUCCESS],
    payload,
  })
}

export function* onImageUploadRequest() {
  yield takeEvery(types.MODEL_IMAGE_UPLOAD[REQUEST], onImageUploadSuccess)
}
