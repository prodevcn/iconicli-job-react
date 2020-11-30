import * as types from 'const/requests'
import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import action from 'actions/action'

export const onboardingCommonAction = {
  request: (payload) => action(types.ONBOARDING_COMMON[REQUEST], { payload }),
  success: (payload) => action(types.ONBOARDING_COMMON[SUCCESS], { payload }),
  failure: (error) => action(types.ONBOARDING_COMMON[FAILURE], error),
}

export const logInAction = {
  request: (payload) => action(types.LOGIN_COMMON[REQUEST], { payload }),
  success: (payload) => action(types.LOGIN_COMMON[SUCCESS], { payload }),
  failure: (error) => action(types.LOGIN_COMMON[FAILURE], error),
}

export const logOutAction = {
  request: () => action(types.LOGOUT_COMMON[REQUEST]),
  success: (payload) => action(types.LOGOUT_COMMON[SUCCESS], { payload }),
  failure: (error) => action(types.LOGOUT_COMMON[FAILURE], error),
}

export const resetPasswordAction = {
  request: (payload) => action(types.RESET_PASSWORD[REQUEST], { payload }),
  success: (payload) => action(types.RESET_PASSWORD[SUCCESS], { payload }),
  failure: (error) => action(types.RESET_PASSWORD[FAILURE], error),
}

export const changePasswordAction = {
  request: (payload) => action(types.CHANGE_PASSWORD[REQUEST], { payload }),
  success: (payload) => action(types.CHANGE_PASSWORD[SUCCESS], { payload }),
  failure: (error) => action(types.CHANGE_PASSWORD[FAILURE], error),
}
