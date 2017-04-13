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
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ markers: nextProps.markers.markers })
    this.renderDropMarkers(nextProps.markers.markers)
  }

  componentDidUpdate(prevProps, prevState){
    // console.log('prevprops', prevProps)
    console.log('prev state', prevState)
    console.log('props marker', this.state.markers)
    if (prevState !== this.state) {
      this.renderDropMarkers(this.state.markers)
    }
  }

  //get lat and lng from markers array in state and render
  renderDropMarkers(data) {
    console.log('data', data)
    data.forEach((drop) => {
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
