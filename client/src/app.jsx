import React, { Component } from 'react';
import { render } from 'react-dom';
import GameMasterView from './containers/GameMasterView.jsx';
import { Router, Route, Link, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import createRoutes from './routes.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div>
        herroooooo
        {this.props.children}
      </div>
    )
  }
}

export default App;


