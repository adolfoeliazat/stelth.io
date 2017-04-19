import React from 'react';
import axios from 'axios';
import { GOOGLE_API_KEY } from '../../../config.js'
import { connect } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/Actions.js'
import ReactDOMServer from 'react-dom/server'
import { geocodeByAddress } from 'react-places-autocomplete';
import CreateDropModal from './CreateDropModal.jsx'

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
      showModal: false,
      modalClicked: false,
      address: '',
      markerId: null,
      currentMarker: null,
    }
    this.deleteMarker = this.deleteMarker.bind(this)
    this.addMarker = this.addMarker.bind(this)
    this.toggleNewDropModal = this.toggleNewDropModal.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
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
          let data = {
            position: e.latLng,
            address: response.data.results[0].formatted_address
          }
          this.setState({ address: data.address })
          return data
        })
        .then((x) => {
          this.placeMarkerAndPanTo(x, window.map)
          window.map.setZoom(13)
        })
    })
    window.markerBounds = new google.maps.LatLngBounds();
  }

  componentWillReceiveProps(nextProps) {
    this.renderDropMarkers(nextProps.markers.markers)
  }

  // componentDidMount() {
  //   let retrievedObj = localStorage.getItem('markers')
  //   let markers = JSON.parse(retrievedObj)
  //   console.log('marker', markers)
  //   this.renderDropMarkers(markers)    
  // }

  placeMarkerAndPanTo(values, map) {
    let _lat = values.position.lat()
    let _lng = values.position.lng()
    let markerPosition = { lat: _lat, lng: _lng }

    let marker = new google.maps.Marker({
      position: markerPosition,
      map: map
    });

    this.setState({
      markerId: markerPosition,
      currentMarker: marker,
    })

    map.panTo(markerPosition);
    this.toggleNewDropModal()
  }

  toggleNewDropModal() {
    this.setState({ showModal: !this.state.showModal })
  }

  deleteMarker() {
    this.state.currentMarker.setMap(null);
    window.map.fitBounds(window.markerBounds)
  }

  addMarker() {
    this.setState({
      showModal: !this.state.showModal,
      modalClicked: !this.state.modalClicked
    })
  }

  //get lat and lng from markers array in state and render
  renderDropMarkers(data) {
    data.forEach((drop, i) => {
      let center = {
        lat: drop.lat,
        lng: drop.lng
      }
      let marker = new google.maps.Marker({
        position: center,
        map: window.map
      })
      let contentString= '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        `<h5 id="firstHeading" class="firstHeading">${drop.title}</h5>` +
        '<div id="bodyContent">' +
        `<p>${drop.message}</p>` +
        `<p>Right Click to Delete!</p>` +
        '</div>' +
        '</div>';
      let infowindow = new google.maps.InfoWindow({
        content: contentString
      })

      marker.addListener('click', () => {
        infowindow.open(window.map, marker)
      })
      marker.addListener('rightclick', () => {
        axios
          .delete('http://localhost:3000/deadDrops', {
            data: {
              'id': drop.id
            }
          })
          .then(()=> {
            //TODO: thunkify
            this.props.action.deleteMarkerFromRedux(drop, i)
          })
      })
      window.markerBounds.extend(center)
      window.map.fitBounds(window.markerBounds)
    })
  }

  toggleModal() {
    this.setState({ modalClicked: !this.state.modalClicked })
    this.deleteMarker()    
  }


  close() {
    this.setState({ showModal: !this.state.showModal });
    this.deleteMarker()
  }

  render() {
    return (
      <div>
        <div className="map" ref="mapCanvas"></div>
        {this.state.showModal ? 
          <Modal show={this.state.showModal}>
            <Modal.Header className="modal-header">
              <Modal.Title>Would you like to place a drop here?</Modal.Title>
            </Modal.Header>

            <Modal.Body className="modal-body">
              {this.state.address}
            </Modal.Body>

            <Modal.Footer className="modal-footer">
              <Button onClick={() => { this.addMarker() }}>Yes</Button>
              <Button onClick={() => { this.close() }}>No</Button>
            </Modal.Footer>
          </Modal> : "" }
        {this.state.modalClicked ? 
          <CreateDropModal 
            modalClicked={this.state.modalClicked} 
            toggleModal={this.toggleModal}
            address={this.state.address}
            position={this.state.markerId}
            // toggleNewDropModal={this.toggleNewDropModal}
          /> 
          : ''}
      </div>
    )
  }
}

export default MapContainer;
