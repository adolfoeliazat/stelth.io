import React from 'react';
import axios from 'axios';
import GOOGLE_API_KEY from '../../../config.js'
import { connect } from 'react-redux'

@connect((state) => ({
    auth: state.auth
  }))

class MapContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
    window.markerBounds = new google.maps.LatLngBounds();
    this.getDropLocations()
  }

  // axios call to db for drops then store in react state
  getDropLocations() {
    // TODO: filter by users
    // let authID = this.props.auth.profile.user_id.split('|')[1]
    let authID = 1
    console.log(authID)
    axios
      // .get(`http://localhost:3000/deadDrops?ownerID=${authID}`)
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
    console.log('getting into render drop markers', this.state.markers)
    this.state.markers.forEach((drop) => {
      let center = {
        lat: drop.lat,
        lng: drop.lng
      }
      let marker = new google.maps.Marker({
        position: center,
        map: window.map
      })
      console.log(marker)
      // this.rebound()
      window.markerBounds.extend(center)
      window.map.fitBounds(window.markerBounds)
    })
  }
  
  render() {
    return (
      <div className="map" ref="mapCanvas"></div>
    )
  }
}

export default MapContainer;
