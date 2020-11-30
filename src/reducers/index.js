import { combineReducers } from 'redux'
import onboarding from './onboarding'
import login from './login'
import password from './password'
import modelImageUpload from './model/image-upload'
import modelBooking from './model/booking'

const reducers = combineReducers({
  onboarding,
  login,
  password,
  modelImageUpload,
  modelBooking,
})

export default reducers
