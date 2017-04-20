import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/Actions.js';
import { Navbar, NavbarHeader, Nav, ButtonToolbar, Button, Image } from 'react-bootstrap';
import AuthService from '../utils/AuthService.js';
import { Link } from 'react-router';

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
            <Link to='/home'>
              <Image className="stelth-logo-icon" src='./images/stelthLogoWhite.png' />
            </Link>
          </Nav>
          <Nav pullRight>
            { !this.props.auth.isAuthenticated ?
              <Button className="login nav-auth" bsStyle="primary" onClick={this.props.onLoginClick}>LOGIN</Button> :
              <Button className="logout nav-auth" bsStyle="primary" onClick={this.props.onLogoutClick}>LOGOUT</Button>}
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;

