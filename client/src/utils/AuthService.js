import Auth0Lock from 'auth0-lock';
import jwtDecode from 'jwt-decode'
// import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '../../../config';
// import { hashHistory } from 'react-router';
// import { connect } from 'react-redux';

class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain)

    auth: {
      redirectUrl: 'http://localhost:8080';
      responseType: 'token'
    }

    // Add callback for lock `authenticated` event
    // this.lock.on('authenticated', this._doAuthentication.bind(this))
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }

  // _doAuthentication(authResult) {
  //   // Saves the user token
  //   this.setToken(authResult.idToken)
  //   // navigate to the home route
  //   hashHistory.replace('/home')
  // }

  login() {
    // Call the show method to display the widget.
    this.lock.show()
  }

  logout() {
    // Clear user token and profile data from local storage
    localStorage.removeItem('id_token');
  }

  static loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken()
  }

  static setToken(idToken) {
    // Saves user token to local storage
    localStorage.setItem('id_token', idToken)
  }

  static getToken() {
    // Retrieves the user token from local storage
    return localStorage.getItem('id_token')
  }

  static getProfile() {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  static setProfile(profile) {
    // Saves profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile))
    // Triggers profile_updated event to update the UI
  }

  static getTokenExpirationDate() {
    const token = AuthService.getToken()
    const decoded = jwtDecode(token)
    if(!decoded.exp) {
      return null
    }

    const date = new Date(0) // The 0 here is the key, which sets the date to the epoch
    date.setUTCSeconds(decoded.exp)
    return date
  }

  static isTokenExpired() {
    const token = AuthService.getToken()
    if (!token) return true
    const date = AuthService.getTokenExpirationDate(token)
    const offsetSeconds = 0
    if (date === null) {
      return false
    }
    return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)))
  }
}

// const auth = new AuthService(AUTH0_CLIENT_ID, AUTH0_DOMAIN);
export default AuthService;
