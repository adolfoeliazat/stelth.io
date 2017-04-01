import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import GameMasterView from '../containers/GameMasterView.jsx';

// const auth = new AuthService(process.env.AUTH0_CLIENT_ID, process.env.AUTH_DOMAIN)

// // onEnter callback to validate authentication in private routes
// const requireAuth = (nextState, replace) => {
//   if (!auth.loggedIn()) {
//     replace({ pathname: '/login' })
//   }
// }

class App extends React.Component {
  render() {
    return(
      <div>
        <Route exact path="/" component={GameMasterView} />
        <Route path='/home' component={GameMasterView} />
      </div>
    )
  }
}

export default App;


