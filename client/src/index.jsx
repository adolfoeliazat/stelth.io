import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import Routes from './router/Routes.jsx';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'

import store from './redux/CreateStore'

const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    {/*<Router history={history} >*/}
      <Routes />
    {/*</Router>*/}
  </Provider>
  , document.getElementById('root')
)

