import React from 'react';
import { Route, IndexRoute, hashHistory } from 'react-router';
import AuthService from '../utils/AuthService';
import AppContainer from '../containers/AppContainer.jsx'
import LandingContainer from '../components/LandingContainer.jsx'
import GameMasterView from '../containers/GameMasterView.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx'
import AboutPage from '../components/AboutPage.jsx'
import NavBar from '../containers/NavBar.jsx';
import { syncHistoryWithStore } from 'react-router-redux'

const requireAuth = (nextState, replace) => {
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
      <Route path='/about' component={AboutPage} />      
      <Route path='*' component={NotFoundPage} />
    </Route>
  )
}
