import React from 'react';
// import { Route } from 'react-router';
import { HashRouter, Route } from 'react-router-dom'
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
      <HashRouter>
        <div>
          <Route exact path="/" component={AppContainer} />
          <Route path='/home' component={GameMasterView} />
          <Route path='/login' component={Login} />
        </div>
      </HashRouter>
    )
  }
}

export default Routes;


