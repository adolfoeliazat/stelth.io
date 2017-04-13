import React from 'react';
import axios from 'axios';
import GOOGLE_API_KEY from '../../../config.js'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
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
      markers: {}
    }
    // this.clearMarker = this.clearMarker.bind(this)
    this.idx;
    this.props.action.checkLogin() // check is Auth0 lock is authenticating after login callback

  }

  componentDidMount() {
    window.map = new google.maps.Map(this.refs.mapCanvas, {
      zoom: 13,
      center: {
        lat: 33.9759,
        lng: -118.3907
      }
    })
    window.map.addListener('click', (e) => {
      this.placeMarkerAndPanTo(e.latLng, window.map)
      window.map.setZoom(13)
    })
    window.markerBounds = new google.maps.LatLngBounds();
  }

  componentWillReceiveProps(nextProps) {
    this.renderDropMarkers(nextProps.markers.markers)
  }

  placeMarkerAndPanTo(latLng, map) {
    // globally available fx to clear marker
    window.clearMarker = (m, mId) => {
      m.setMap(null);
      delete m[mId]
    }

    //create unique id for marker to put in marker object in state
    let markerId = latLng.lat() + '_' + latLng.lng()

    let marker = new google.maps.Marker({
      position: latLng,
      map: map
    });

    let contentString = 
      '<div id="infowindow">' +
        '<div id="content">' +
          '</div>' +
            `<h5 id="firstHeading" class="firstHeading">Would you like to place a drop here?</h5>` +
          '<div id="bodyContent">' +
          `<Button>Yes</Button>` +
          `<Button onclick="clearMarker(${marker}, ${markerId})">No</Button>` +
        '</div>' +
      '</div>';
    let infowindow = new google.maps.InfoWindow({
      content: contentString
    })

    map.panTo(latLng);
    marker.addListener('click', (e) => {
      infowindow.open(map, marker)
    })

    console.log('markers array?', this.state.markers)
    console.log('marker', marker)
    this.setState({ markers: this.state.markers[markerId] = marker })
  }

  //get lat and lng from markers array in state and render
  renderDropMarkers(data) {
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
