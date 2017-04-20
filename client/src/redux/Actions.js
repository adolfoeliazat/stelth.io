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

export const FETCHING_DATA = 'FETCHING_DATA'
export const STORE_MARKERS = 'STORE_MARKERS'
export const ADD_MARKER = 'ADD_MARKER'
export const DELETE_MARKER = 'DELETE_MARKER'

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

export function fetchData2(authID) {
  return (dispatch) => {
    //let authID = this.state.auth.profile.user_id.split('|')[1]
    axios
      .get(`http://localhost:3000/deadDrops?ownerID=${authID}`)
      .then((result) => {
        console.log("DISPATCHING FETCHDATA2 STORE DATA")
        dispatch(storeMarkers(result.data))
      })
      .catch((err) => { console.log(err) })
  }
}


export function checkLogin() {
  return (dispatch) => {
    // Add callback for lock's `authenticated` event
    authService.lock.on('authenticated', (authResult) => {
      authService.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) return dispatch(loginError(error))
        let userID = profile.identities[0].user_id
        let newUser = {
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
          publicKey: '09876653',
          authID: userID,
          picture: profile.picture
        }
        axios
          .get(`http://localhost:3000/users?authID=${userID}`)
          .then((response) => {
            if (!response.data.length) {
              axios.post('http://localhost:3000/users', newUser)
                .then(() => {
                  console.log('new user has been added')
                })
            }
            AuthService.setProfile(profile) // static method
            AuthService.setToken(authResult.idToken) // static method
            dispatch(loginSuccess(profile))
            hashHistory.push('/home')
          })
      })
    })
    // Add callback for lock's `authorization_error` event
    authService.lock.on('authorization_error', (error) => dispatch(loginError(error)))
  }
}

export function fetchData(authID) {
  return (dispatch) => {
    //dispatch(fetchDataRequest())
    axios
      .get(`http://localhost:3000/deadDrops?ownerID=${authID}`)
      .then((result) => {
        // localStorage.setItem('markers', JSON.stringify(result.data))
        dispatch(storeMarkers(result.data))
      })
      .catch((err) => { console.log(err) })
  }
}

export function fetchDataRequest() {
  return {
    type: FETCHING_DATA
  }
}

export function loginRequest() {
  authService.login()
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccess(profile) {
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

// export function storeMarkers(markers, profile) {
//   return (dispatch) => {
//     let promise = new Promise((resolve, reject) => {
//       resolve(dispatch(storeMarkerSuccess(markers)))
//     })
    
//     promise.then(() => {
//       dispatch(loginSuccess(profile))
//       hashHistory.push('/home')
//     })
//   }
// }

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
