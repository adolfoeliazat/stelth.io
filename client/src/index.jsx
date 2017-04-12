import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import Routes from './router/Routes.jsx';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'

import store from './redux/CreateStore'
import createRoutes from './router/Routes.jsx'

const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={createRoutes()} />
  </Provider>
  , document.getElementById('root')
)

