import React from 'react';
import { Route, Switch } from 'react-router';
// import { HashRouter, Route } from 'react-router-dom'
import AuthService from '../utils/AuthService';
import AppContainer from '../containers/AppContainer.jsx'
import LandingContainer from '../containers/LandingContainer.jsx'
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
      <AppContainer>
        {/*<Route path="/" component={AppContainer} >*/}
        {/*<Switch>*/}
          <Route exact path="/" component={LandingContainer} />
          <Route path='/home' component={GameMasterView} onEnter={requireAuth}/>
          <Route path='/login' component={Login} />
        {/*</Switch>*/}
        {/*</Route>*/}
      </AppContainer>
    )
  }
}

export default Routes;


