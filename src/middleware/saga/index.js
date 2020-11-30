import { all } from 'redux-saga/effects'
import {
  onboardingCommonRequest,
  loginCommonRequest,
  resetPasswordRequest,
  changePasswordRequest,
} from 'middleware/saga/onboarding'
import {
  onImageUploadRequest,
  onBookingUpdateRequest,
} from 'middleware/saga/model'

export default function* rootSaga() {
  yield all([
    onboardingCommonRequest(),
    loginCommonRequest(),
    resetPasswordRequest(),
    changePasswordRequest(),
    onImageUploadRequest(),
    onBookingUpdateRequest(),
  ])
}
