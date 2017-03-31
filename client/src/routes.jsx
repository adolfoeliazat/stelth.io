import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App.jsx';
import GameMasterView from './containers/GameMasterView.jsx';

const customHistory = createBrowserHistory()
console.log("this is the customHistory ", customHistory)

render(
  <Router history={customHistory} >
    <Route path={'/'} component={App}>
    </Route>
  </Router>
  , document.getElementById('root')
)

