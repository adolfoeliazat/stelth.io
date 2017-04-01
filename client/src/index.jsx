import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './router/App.jsx';
import GameMasterView from './containers/GameMasterView.jsx';
import { Provider } from 'react-redux';

import stelthStore from './redux/RootReducer'
console.log('redux store', stelthStore)

const customHistory = createBrowserHistory()
console.log("this is the customHistory ", customHistory)

render(
  <Provider store={stelthStore}>
    <Router history={customHistory} >
      <Route path={'/'} component={App}>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root')
)

