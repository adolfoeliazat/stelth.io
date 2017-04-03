import AuthService from '../utils/AuthService'
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '../../../config';

console.log('authservice', AuthService);

// ------------------ Action Names ----------------- //

export const CHANGE_NAME = 'CHANGE_NAME'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'


// -------------- Action Creators ------------ //
// export const actions = {
//   changeName: () => { return { type: types.CHANGE_NAME }},
// }

const authService = new AuthService(AUTH0_CLIENT_ID, AUTH0_DOMAIN)

export function changeName() {
  return {
    type: CHANGE_NAME
  }
}

export function checkLogin() {
  return (dispatch) => {
    // Add callback for lock's `authenticated` event
    authService.lock.on('authenticated', (authResult) => {
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
  authService.login()
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccess(profile) {
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
  return {
    type: LOGOUT_SUCCESS
  }
}
