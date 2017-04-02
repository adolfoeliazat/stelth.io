import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Routes from './router/Routes.jsx';
import GameMasterView from './containers/GameMasterView.jsx';
import { Provider } from 'react-redux';

import store from './redux/CreateStore'

const customHistory = createBrowserHistory()

render(
  <Provider store={store}>
    <Router history={customHistory} >
      <Routes />
    </Router>
  </Provider>
  , document.getElementById('root')
)

