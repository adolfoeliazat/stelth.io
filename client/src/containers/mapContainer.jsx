import React from 'react';
import axios from 'axios';
import { GOOGLE_API_KEY } from '../../../config.js'
import { connect } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/Actions.js'
import ReactDOMServer from 'react-dom/server'
import { geocodeByAddress } from 'react-places-autocomplete';

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
      markers: {},
      showModal: false,
      address: ''
    }
    this.props.action.checkLogin() // check is Auth0 lock is authenticating after login callback
    this.deleteMarker = this.deleteMarker.bind(this)
    this.toggleModal = this.toggleModal.bind(this)

    console.log('google api key', GOOGLE_API_KEY)
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
      let _lat = e.latLng.lat()
      let _lng = e.latLng.lng()      
      let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${_lat},${_lng}&key=${GOOGLE_API_KEY}`
      axios
        .get(url)
        .then((response) => {
          console.log('res', response)
          let data = {
            position: e.latLng,
            address: response.data.results[0].formatted_address
          }
          this.setState({ address: data.address })
          return data
        })
        .then((x) => {
          console.log('x', x)
          this.placeMarkerAndPanTo(x, window.map)
          window.map.setZoom(13)
        })
    })
    window.markerBounds = new google.maps.LatLngBounds();
  }

  componentWillReceiveProps(nextProps) {
    this.renderDropMarkers(nextProps.markers.markers)
  }

  placeMarkerAndPanTo(values, map) {
    console.log('values', values)
    let _lat = values.position.lat()
    let _lng = values.position.lng()
    let markerPosition = { lat: _lat, lng: _lng }
    let marker = new google.maps.Marker({
      position: markerPosition,
      map: map
    });
    map.panTo(markerPosition);
    this.toggleModal()
  }

  toggleModal() {
    console.log('in toggle modal')
    this.setState({ showModal: !this.state.showModal })
  }

  deleteMarker() {
    console.log('we in here yo')
    console.log('getting into clear markers')
    // marker.setMap(null);
    // delete this.state.markers[markerId]
    window.map.fitBounds(window.markerBounds)
  }

  addMarker() {
    console.log('yes')
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

  close() {
    this.setState({showModal: false}, () => {
      this.props.resetFlag();
    });
  }

  render() {
    return (
      <div>
        <div className="map" ref="mapCanvas"></div>
        {console.log('state', this.state)}
        {this.state.showModal ?
          <div className="static-modal">
            <Modal.Dialog >
              <Modal.Header className="modal-header">
                <Modal.Title>Would you like to place a drop here?</Modal.Title>
              </Modal.Header>

              <Modal.Body className="modal-body">
                {this.state.address}
              </Modal.Body>

              <Modal.Footer className="modal-footer">
                <Button onClick={this.deleteMarker}>Close</Button>
                <Button onClick={this.addMarker}>Save changes</Button>
              </Modal.Footer>

            </Modal.Dialog>
          </div>
          : ""}
      </div>
    )
  }
}

export default MapContainer;
