import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/Actions.js';
import { Navbar, NavbarHeader, Nav, ButtonToolbar, Button } from 'react-bootstrap';
import AuthService from '../utils/AuthService.js';


@connect((state) => ({
    isAuthenticated: state.isAuthenticated,
    auth: state.auth
  }), {
    onLoginClick: actions.onLoginClick,
    onLogoutClick: actions.onLogoutClick
  }
)

export class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="navbar">
        <Navbar>
          <Navbar.Header> 
          </Navbar.Header>
          <Nav>
            { !isAuthenticated ?
              <Button bsStyle="primary" onClick={onLoginClick}>Login</Button> :
              <Button bsStyle="primary" onClick={onLogoutClick}>Login</Button> }
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;



