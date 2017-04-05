import AuthService from '../utils/AuthService'
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '../../../config'
import { hashHistory } from 'react-router'
import axios from 'axios'

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
    // Add callback for lock's `authenticated` event
    authService.lock.on('authenticated', (authResult) => {
      authService.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) return dispatch(loginError(error))
        let userID = profile.user_id.split('|')[1]
        console.log(userID)
        let newUser = {
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
          publicKey: '09876653',
          authID: userID,
        }

        console.log('new user', newUser)

        axios
          .get(`http://localhost:3000/users?id=${userID}`)
          .then((response) => {
            console.log('sucessful get', response)
            if (!response.data.length) {
              axios.post('http://localhost:3000/users', newUser)
                .then(() => {
                  console.log('new user has been added')
                })
            }
            AuthService.setToken(authResult.idToken) // static method
            AuthService.setProfile(profile) // static method
            return dispatch(loginSuccess(profile))
          })
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
  return {
    type: LOGOUT_SUCCESS
  }
}
