import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
// import createBrowserHistory from 'history/createBrowserHistory';
// import createHashHistory from 'history/createHashHistory';
import Routes from './router/Routes.jsx';
import GameMasterView from './containers/GameMasterView.jsx';
import { Provider } from 'react-redux';

import store from './redux/CreateStore'

// const customHistory = createBrowserHistory()

const createHistory = require('history').createHashHistory;

const hashHistory = createHistory();

render(
  <Provider store={store}>
    <Router history={hashHistory} >
      <Routes />
    </Router>
  </Provider>
  , document.getElementById('root')
)

