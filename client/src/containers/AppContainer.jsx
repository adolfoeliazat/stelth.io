import React, { Component } from 'react'
import NavBar from './NavBar.jsx'

class AppContainer extends Component {
  constructor(props) {
    super(props)
    // this.props.checkLogin() // check is Auth0 lock is authenticating after login callback
  }

  render() {
    return(
      <div>
        <NavBar />
      </div>
    )
  }
}

export default AppContainer
