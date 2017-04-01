import React from 'react';
import axios from 'axios';
import GOOGLE_API_KEY from '../../../config.js'

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

  // axios call to db for drops then store in react state
  getDropLocations() {
    // TODO: filter by users
    axios
      .get('http://localhost:3000/deadDrops')
      .then((result) => {
        this.setState({
          markers: result.data
        })
      })
      .then(() => {
        this.renderDropMarkers()
      })
      .catch((err) => { console.log(err) })
  }

  //get lat and lng from markers array in state and render
  renderDropMarkers() {
    this.state.markers.forEach((drop) => {
      let center = { 
        lat: drop.lat, 
        lng: drop.lng 
      }
      let marker = new google.maps.Marker({
        position: center,
        map: window.map
      })
    })
  }

  render() {
    return(
      <div className="map" ref="mapCanvas"></div>
    )
  }
}

export default MapContainer;
