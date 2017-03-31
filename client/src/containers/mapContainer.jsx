import React from 'react';
import axios from 'axios';
import GOOGLE_API_KEY from '../../../config.js'

// const dotenv = require('dotenv');
// dotenv.load();

class MapContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      markers: []
    }
  }

  componentDidMount() {
    window.map = new google.maps.Map(this.refs.mapCanvas, {
      zoom: 13,
      center: {
        lat: 33.9759, 
        lng: -118.3907 
      }
    })
    this.getDropLocations()
  }

  getDropLocations() {
    // axios call to db for drops then store in react state
    console.log("am i here?")
    axios
      .get('http://localhost:3000/deadDrops')
      .then((result) => {
        console.log(result)
      })
      .catch((err) => { console.log(err) })
  }

  renderDropMarkers() {
    //get lat and lng from markers array in state and render
  }

  render() {
    return(
      <div className="map" ref="mapCanvas"></div>
    )
  }
}

export default MapContainer;
