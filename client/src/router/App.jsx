import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import AuthService from '../utils/AuthService';
import GameMasterView from '../containers/GameMasterView.jsx';
import Login from '../containers/Login.jsx';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '../../../config';

// const requireAuth = (nextState, replace) => {
//   if (!auth.loggedIn()) {
//     replace({ pathname: '/' })
//   }
// }

class App extends React.Component {
  render() {
    // const {auth} = this.props
    return(
      <div>
        <Route exact path="/" component={Login} />
        <Route path='/home' component={GameMasterView} />
        <Route path='/login' component={Login} />
      </div>
    )
  }
}

export default App;


