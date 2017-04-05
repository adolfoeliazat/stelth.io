import React from 'react';
import { Route, IndexRoute, hashHistory } from 'react-router';
// import { HashRouter, Route } from 'react-router-dom'
import AuthService from '../utils/AuthService';
import AppContainer from '../containers/AppContainer.jsx'
import LandingContainer from '../containers/LandingContainer.jsx'
import GameMasterView from '../containers/GameMasterView.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx'
import Login from '../containers/Login.jsx';
import { syncHistoryWithStore } from 'react-router-redux'

const requireAuth = (nextState, replace) => {
  console.log('checking auth')
  if (!AuthService.loggedIn()) {
    alert('Please log in first!')
    replace({ pathname: '/' })
  }
}

export default function createRoutes() {
  return (
    <Route path="/" component={AppContainer}>
      <IndexRoute component={LandingContainer} />
      <Route path='/home' component={GameMasterView} onEnter={requireAuth} />
      <Route path='*' component={NotFoundPage} />
    </Route>
  )
}


/*class Routes extends React.Component {
  render() {
    {console.log('getting into routes')}
    return (
      <Route path="/" component={AppContainer}>
        <IndexRoute component={LandingContainer} />
        <Route path='/home' component={GameMasterView} onEnter={requireAuth} />
        <Route path='*' component={NotFoundPage} />
      </Route>
    )
  }
}

export default Routes;*/


