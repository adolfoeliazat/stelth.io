import React, { Component } from 'react'
import NavBar from './NavBar.jsx'
import { connect } from 'react-redux'
import * as actions from '../redux/Actions.js'

@connect((state) => ({}), {
    checkLogin: actions.checkLogin
  }
)

class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.props.checkLogin()
  }

  render() {
    return(
      <div className="app-container">
        <NavBar />
        {this.props.children}
      </div>
    )
  }
}

export default AppContainer
