import { combineReducers } from 'redux'
import * as types from './Actions'
import auth from '../utils/AuthService'

// ------------------- Reducers ------------------- //

const authReducer = (state = {
  isAuthenticated: !auth.isTokenExpired(),
  isFetching: false,
  profile: auth.getProfile(),
  error: null
}, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {...state, isFetching: true, error: null}
    case types.LOGIN_SUCCESS:
      return {...state, isFetching: false, isAuthenticated: true, profile: action.profile}
    case types.LOGIN_ERROR:
      return {...state, isFetching: false, isAuthenticated: false, profile: {}, error: action.error}
    case types.LOGOUT_SUCCESS:
      return {...state, isAuthenticated: false, profile: {}}
    default:
      return state
  }
}

// ----------------- Root Reducer ---------------- //

const rootReducer = combineReducers({
  auth: authReducer
})

export default rootReducer
