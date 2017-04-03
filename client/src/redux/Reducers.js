import { combineReducers } from 'redux'
import * as types from './Actions'
import auth from '../utils/AuthService'

console.log('auth service in reducers is: ', auth)

// ------------------- Reducers ------------------- //

const greetingReducer = (state='', action) => {
  switch (action.type) {
    case types.SAY_HELLO: return 'Hello '
    case types.SAY_GOODBYE: return 'Goodbye'
  }
  return state
}

const nameReducer = (state='Regina', action) => {
  switch(action.type) {
    case types.CHANGE_NAME: return 'Alex'
  }
  return state
}

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
  greeting: greetingReducer,
  name: nameReducer,
  auth: authReducer
})

export default rootReducer
