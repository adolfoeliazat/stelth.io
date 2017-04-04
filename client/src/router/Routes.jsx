import React from 'react';
import { Route } from 'react-router';
import AuthService from '../utils/AuthService';
import AppContainer from '../containers/AppContainer.jsx'
import GameMasterView from '../containers/GameMasterView.jsx';
import Login from '../containers/Login.jsx';

const requireAuth = (nextState, replace) => {
  if (!AuthService.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={GameMasterView} />
        <Route path='/home' component={GameMasterView} />
        <Route path='/login' component={Login} />
      </div>
    )
  }
}

export default Routes;


