import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/Actions.js';
import {ButtonToolbar, Button} from 'react-bootstrap';
import auth from '../utils/AuthService.js';

export class Login extends React.Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(auth)
  }

  render() {
    // const { auth } = this.props
    console.log("what is this? ", auth)
    return (
      <div className="holmes">
        <h2>Login</h2>
        {/*<ButtonToolbar className={styles.toolbar}>*/}
          <ButtonToolbar>
          <Button bsStyle="primary" onClick={() => auth.login()}>Login</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Login;



