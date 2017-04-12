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
    onLogoutClick: actions.onLogoutClick,
    checkLogin: actions.checkLogin
  }
)

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <Navbar>
          <Nav pullLeft>
            <Button className="stelth-logo" bsStyle="primary" onClick={this.props.onLoginClick}>STELTH.io</Button>
          </Nav>
          <Nav pullRight>
            {!this.props.auth.isAuthenticated ?
              <Button className="login" bsStyle="primary" onClick={this.props.onLoginClick}>Login</Button> :
              <Button className="logout" bsStyle="primary" onClick={this.props.onLogoutClick}>Logout</Button>}
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;

