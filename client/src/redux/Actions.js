import AuthService from '../utils/AuthService'
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '../../../config'
import { hashHistory } from 'react-router'
import axios from 'axios'
import thunk from 'redux-thunk'

// ------------------ Action Names ----------------- //

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const STORE_MARKERS = 'STORE_MARKERS'
export const ADD_MARKER = 'ADD_MARKER'
export const DELETE_MARKER = 'DELETE_MARKER'

// -------------- Action Creators ------------ //

const authService = new AuthService(AUTH0_CLIENT_ID, AUTH0_DOMAIN)

export function onLoginClick() {
  console.log('1')
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
  console.log('3')
  return (dispatch) => {
    // Add callback for lock's `authenticated` event
    authService.lock.on('authenticated', (authResult) => {
      authService.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) return dispatch(loginError(error))
        console.log('PROFILE', profile)
        let userID = profile.identities[0].user_id
        let newUser = {
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
          publicKey: '09876653',
          authID: userID,
          picture: profile.picture
        }
        console.log('user id?!?!??!?!', userID)
        axios
          .get(`http://localhost:3000/users?authID=${userID}`)
          .then((response) => {
            console.log('response', response)
            if (!response.data.length) {
              console.log('inside of axios post')
              axios.post('http://localhost:3000/users', newUser)
                .then(() => {
                  console.log('new user has been added')
                })
            } else {
              return
            }
          })
          .then(() => {
            AuthService.setProfile(profile) // static method
            AuthService.setToken(authResult.idToken) // static method
            // return dispatch(loginSuccess(profile))
            return dispatch(fetchData(profile))
          })
      })
    })
    // Add callback for lock's `authorization_error` event
    authService.lock.on('authorization_error', (error) => dispatch(loginError(error)))
  }
}

export function fetchData(profile) {
  console.log('4')
  console.log('what is the profile? ', profile)
  let authID = profile.user_id.split('|')[1]
  console.log('what is authID? ', authID)
  axios
    .get(`http://localhost:3000/deadDrops?ownerID=${authID}`)
    .then((result) => {
      console.log('what is the results? ', result)
      // this.props.action.storeMarkers(result.data)
      return (dispatch) => {
        return dispatch(storeMarkers(result.data))
      }
    })
    .catch((err) => { console.log(err) })
}

export function loginRequest() {
  console.log('2')
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

export function storeMarkers(markers) {
  return {
    type: STORE_MARKERS,
    markers
  }
}

export function addMarker(marker) {
  return {
    type: ADD_MARKER,
    marker
  }
}

export function deleteMarkerFromRedux(marker, i) {
  return {
    type: DELETE_MARKER,
    marker,
    i
  }
}
