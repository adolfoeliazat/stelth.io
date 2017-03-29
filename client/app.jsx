import React, { Component } from 'react';
import { render } from 'react-dom';
import MapContainer from './containers/mapContainer.jsx';

class App extends Component {
  render() {
    return(
      <div>
        <div>
          <MapContainer />
          {console.log('HELLO WORLD')}
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
