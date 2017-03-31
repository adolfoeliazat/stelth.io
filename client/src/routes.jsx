import React, { Component } from 'react';
import { render } from 'react-dom';
import GameMasterView from './containers/GameMasterView.jsx';
import { Router, Route, Link, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import createRoutes from './routes.jsx';
import App from './App.jsx'

const stelthHistory = createBrowserHistory()

render(
  <Router history={stelthHistory} >
    <Route>
    {/*<Route exact path={'/'} component={App}>*/}
      <Route path='/home' component={GameMasterView} />
    </Route>
    {/*</Route>*/}
  </Router>
  , document.getElementById('app')
)

