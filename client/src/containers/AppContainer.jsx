import React, { Component } from 'react'
import Login from './Login.jsx'
import { connect } from 'react-redux'
import * as actions from '../redux/Actions.js'

@connect((state) => ({}), {
    checkLogin: actions.checkLogin
  }
)

class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.props.checkLogin() // check is Auth0 lock is authenticating after login callback
  }

  render() {
    return(
      <div>
        <Login />
        {this.props.children}
      </div>
    )
  }
}

export default AppContainer
