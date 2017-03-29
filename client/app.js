import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return(
      <div>
        <div>
          {console.log('HELLO WORLD')}
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))