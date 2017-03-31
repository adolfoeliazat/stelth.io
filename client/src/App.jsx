import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import GameMasterView from './containers/GameMasterView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
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


