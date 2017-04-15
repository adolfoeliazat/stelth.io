import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
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
      console.log('sup')
      return {...state, isFetching: false, isAuthenticated: true, profile: action.profile}
    case types.LOGIN_ERROR:
      return {...state, isFetching: false, isAuthenticated: false, profile: {}, error: action.error}
    case types.LOGOUT_SUCCESS:
      return {...state, isAuthenticated: false, profile: {}}
    default:
      return state
  }
}

const markerReducer = (state={
  markers: []
}, action) => {
  switch(action.type) {
    case types.STORE_MARKERS:
      return {...state, markers: action.markers}
    case types.ADD_MARKER:
      let markerArr = state.markers.map(item => (item))
      markerArr.push(action.marker)
      return {...state, markers: markerArr}
    case types.DELETE_MARKER:
      let arr = state.markers.map(item => (item))
      arr.splice(action.i, 1)      
      return {...state, markers: arr}
    default:
      return state
  }
}

// ----------------- Root Reducer ---------------- //

const rootReducer = combineReducers({
  routing: routing,
  auth: authReducer,
  markers: markerReducer
})

export default rootReducer
