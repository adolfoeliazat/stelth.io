import AuthService from '../utils/AuthService'
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '../../../config'
import { hashHistory } from 'react-router'
// import { browserHistory } from 'react-router'
// console.log(browserHistory)

// ------------------ Action Names ----------------- //

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'


// -------------- Action Creators ------------ //

const authService = new AuthService(AUTH0_CLIENT_ID, AUTH0_DOMAIN)

export function onLoginClick() {
  return (dispatch) => {
    return dispatch(loginRequest())
  }
}

export function onLogoutClick() {
  return (dispatch) => {
    return dispatch(logoutSuccess())
  }
}

export function checkLogin() {
  return (dispatch) => {
    console.log('in check login')
    // Add callback for lock's `authenticated` event
    authService.lock.on('authenticated', (authResult) => {
      console.log('inside auth service lock checklogin')
      authService.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error)
          return dispatch(loginError(error))
        AuthService.setToken(authResult.idToken) // static method
        AuthService.setProfile(profile) // static method
        return dispatch(loginSuccess(profile))
      })
    })
    // Add callback for lock's `authorization_error` event
    authService.lock.on('authorization_error', (error) => dispatch(loginError(error)))
  }
}

export function loginRequest() {
  console.log('login request')
  authService.login()
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccess(profile) {
  console.log('login success')
  hashHistory.push('/home')
  location.reload()
  return {
    type: LOGIN_SUCCESS,
    profile
  }
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  }
}

export function logoutSuccess() {
  authService.logout()
  hashHistory.push('/')  
  location.reload()
  return {
    type: LOGOUT_SUCCESS
  }
}
