import React, { Component } from 'react';
import { render } from 'react-dom';
import GameMasterView from './containers/GameMasterView.jsx';
import { Router, Route, Link, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App'

const stelthHistory = createBrowserHistory()

render(
  // <App />
  <Router history={stelthHistory} >
    <Route exact path={'/'} component={App}>
      <Route path='/home' component={GameMasterView} />
    </Route>
  </Router>
  , document.getElementById('root')
)

