import React, { Component } from 'react';
import { render } from 'react-dom';
import GameMasterView from './containers/GameMasterView.jsx';

class App extends Component {
  render() {
    return(
      <div>
        <GameMasterView />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
