import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/Actions.js';
import { ButtonToolbar, Button } from 'react-bootstrap';
import AuthService from '../utils/AuthService.js';

// console.log('auth service in login: ', AuthService)

@connect((state) => ({
    greeting: state.greeting,
    name: state.name,
    auth: state.auth
  }), {
    changeName: actions.changeName,
    onLoginClick: actions.onLoginClick
  }
)

export class Login extends React.Component {
  constructor(props) {
    super(props)
  }
  // static propTypes = {
  //   location: T.object,
  //   auth: T.instanceOf(auth)
  // }

  render() {
    // console.log('auth service in login pt2:', AuthService)
    // console.log("what is this? ", AuthService.login)
    console.log('check loginnnnn', this.props.onLoginClick)
    return (
      <div className="login">
        <h2>Login</h2>
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={() => this.props.onLoginClick()}>Login</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Login;



