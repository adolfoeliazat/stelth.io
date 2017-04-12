import React from 'react';
import axios from 'axios';
import GOOGLE_API_KEY from '../../../config.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/Actions.js'

@connect((state) => ({
    markers: state.markers,
    auth: state.auth
  }), (dispatch) => ({
    action: bindActionCreators(actions, dispatch)
  }))


class MapContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markers: []
    }
    console.log('props', this.props)
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
    // this.getDropLocations()
    this.renderDropMarkers()
  }

  // // axios call to db for drops then store in react state
  // getDropLocations() {
  //   // TODO: filter by users
  //   // let authID = this.props.auth.profile.user_id.split('|')[1]
  //   let authID = 1
  //   console.log(authID)
  //   axios
  //     // .get(`http://localhost:3000/deadDrops?ownerID=${authID}`)
  //     .get('http://localhost:3000/deadDrops')
  //     .then((result) => {
  //       // this.setState({
  //       //   markers: result.data
  //       // })
  //       this.props.action.storeMarkers(result)
  //     })
  //     .then(() => {
  //       console.log('props2', this.props)
  //       this.renderDropMarkers()
  //     })
  //     .catch((err) => { console.log(err) })
  // }

  //get lat and lng from markers array in state and render
  renderDropMarkers() {
    this.props.markers.forEach((drop) => {
    // this.state.markers.forEach((drop) => {
      let center = {
        lat: drop.lat,
        lng: drop.lng
      }
      let marker = new google.maps.Marker({
        position: center,
        map: window.map
      })
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
