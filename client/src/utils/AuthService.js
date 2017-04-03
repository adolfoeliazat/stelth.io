import Auth0Lock from 'auth0-lock';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '../../../config';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain)

      auth: {
        redirectUrl: 'http://localhost:8080';
        responseType: 'token'
      }

    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult) {
    // Saves the user token
    this.setToken(authResult.idToken)
    // navigate to the home route
    hashHistory.replace('/home')
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show()
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken()
  }

  setToken(idToken) {
    // Saves user token to local storage
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    // Retrieves the user token from local storage
    return localStorage.getItem('id_token')
  }

  logout() {
    // Clear user token and profile data from local storage
    localStorage.removeItem('id_token');
  }
}

// const auth = new AuthService(AUTH0_CLIENT_ID, AUTH0_DOMAIN);
export default AuthService;
