import React from 'react';
import axios from 'axios';
import GOOGLE_API_KEY from '../../../config.js'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/Actions.js'
import ReactDOMServer from 'react-dom/server'

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
    this.deleteMarker = this.deleteMarker.bind(this)
    // this.triggerClick = this.triggerClick.bind(this)
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

  // triggerClick() {
  //   this.deleteMarker();
  // }

  placeMarkerAndPanTo(latLng, map) {
    let _lat = latLng.lat()
    let _lng = latLng.lng()
    let markerId = _lat + "_" + _lng
    let marker = new google.maps.Marker({
      position: latLng,
      map: map
    });

    let infowindow = new google.maps.InfoWindow({
      content: ""
    })

    map.panTo(latLng);
    marker.addListener('click', (e) => {
      infowindow.setContent(this.renderInfoWindow(_lat, _lng));
      infowindow.open(map, marker);
    })
    this.setState({ markers: this.state.markers[markerId] = marker })
  }

  renderInfoWindow(lat, lng) {
    return ReactDOMServer.renderToStaticMarkup(
      <div>
        <h4>{lat}</h4>
        <p>{lng}</p>
        <Button className="btn" onClick={() => {console.log('sup')}}>I want to go here !! </Button>
      </div>
    )
  }

  deleteMarker() {
    console.log('we in here yo')
    console.log('getting into clear markers')
    marker.setMap(null);
    delete this.state.markers[markerId]
    window.map.fitBounds(window.markerBounds)
  }

  addMarker() {

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
