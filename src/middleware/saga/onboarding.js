import { put, call, takeEvery } from 'redux-saga/effects'
import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'
import * as services from 'services/api'

const fields = {
  email: null,
  password: null,
  repeatPassword: null,
  firstName: null,
  lastName: null,
  phone: null,
  companyCompanyNumber: null,
  companyCompanyName: null,
  companyEmail: null,
  companyWebsite: null,
  companyRole: null,
  companyAddressStreet: null,
  companyAddressZipCode: null,
  companyAddressCity: null,
  authority: null,
}

function* onboardingCommonSuccess(data) {
  const payload = yield call(() =>
    services.onboarding({ ...fields, ...data.payload }),
  )

  try {
    const { token, role } = payload

    if (token && role) {
      localStorage.setItem('token', token)
      localStorage.setItem('role', role)
    }

    yield put({ type: types.ONBOARDING_COMMON[SUCCESS], payload })
  } catch (error) {
    yield put({ type: types.ONBOARDING_COMMON[FAILURE], error })
  }
}

export function* onboardingCommonRequest() {
  yield takeEvery(types.ONBOARDING_COMMON[REQUEST], onboardingCommonSuccess)
}

function* onLoginCommonSuccess(data) {
  const payload = yield call(() => services.login(data.payload))

  try {
    const { token, role } = payload
    if (token && role) {
      localStorage.setItem('token', token)
      localStorage.setItem('role', role)
    }

    yield put({ type: types.LOGIN_COMMON[SUCCESS], payload })
  } catch (error) {
    yield put({ type: types.LOGIN_COMMON[FAILURE], error })
  }
}

export function* loginCommonRequest() {
  yield takeEvery(types.LOGIN_COMMON[REQUEST], onLoginCommonSuccess)
}

function* onResetPasswordSuccess(data) {
  const payload = yield call(() => services.resetPassword(data.payload))

  try {
    yield put({ type: types.RESET_PASSWORD[SUCCESS], payload })
  } catch (error) {
    yield put({ type: types.RESET_PASSWORD[FAILURE], error })
  }
}

export function* resetPasswordRequest() {
  yield takeEvery(types.RESET_PASSWORD[REQUEST], onResetPasswordSuccess)
}

function* onChangePasswordSuccess(data) {
  yield call(() => services.changePassword(data.payload))
  try {
    yield put({
      type: types.CHANGE_PASSWORD[SUCCESS],
      payload: { success: true },
    })
  } catch (error) {
    yield put({ type: types.CHANGE_PASSWORD[FAILURE], error })
  }
}

export function* changePasswordRequest() {
  yield takeEvery(types.CHANGE_PASSWORD[REQUEST], onChangePasswordSuccess)
}
