import React, { Component } from 'react';
import axios from 'axios';
import { conenct } from 'react-redux';
import Dropzone from 'react-dropzone';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import { Modal, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import SingleUserView from './SingleUserView.jsx'
import GOOGLE_API_KEY from '../../../config.js';

const qs = require('qs');

// ************  TODO ************ 

// PUBLIC: WILL USER SEE ALL DROPS MADE IN THE WHOLE APP?
// PRIVATE: or will they only see drops designated by them or for them?

// AUTH0 required for proper implementation
// User identification and allow the proper ownderID make the drop post
// User making the drop post will require someone else's receiverID to post
// In order to unlock data/ message user will require to match IDs
// ***MVP plus feature: S3 file upload, dropzone is properly working, but requires S3 set up

class CreateDropModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      title: '',
      address: '',
      uploadState: false,
      ownerID: null,
      receiverFirstName: '',
      receiverLastName: '',  
      receiverResults: [],    
      receiverID: null
    }
    this.close = this.close.bind(this)
    // this.goToNextStep = this.goToNextStep.bind(this)
    this.searchUsers = this.searchUsers.bind(this)
    this.handleInputchange = this.handleInputchange.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.onSave = this.onSave.bind(this)
    this.onDrop = this.onDrop.bind(this)

    var self = this;
  }

  // file upload function
  onDrop() {
    console.log("what is the state? ", this.state.uploadState)
    this.setState({ uploadState: true })
  }

  // standard user input controller
  handleInputchange(e) {
    console.log('event', e)
    console.log('value', e.target.value)    
    const name = e.target.name;
    const val = e.target.value;

    const obj = {};
    obj[name] = val;
    this.setState(() => {
      return obj;
    })

    if (this.state.receiverFirstName.length || this.state.receiverLastName.length) {
      this.searchUsers()
    }
  }

  searchUsers() {
    console.log('search users')
    let firstName = this.state.receiverFirstName
    let lastName = this.state.receiverLastName
    axios
      .get(`http://localhost:3000/users?firstName=${firstName}&lastName=${lastName}`)
      .then((response) => {
        console.log('response in search users ', response)
        console.log('response.data in search users', response.data)
        this.setState({
          receiverResults: response.data
        })
      })
  }

  // not required but used to test if the address is properly being saved in the state
  handleAddressChange(address) {
    this.setState({ address })
  }

  close() {
    this.setState({
      showModal: false,
      uploadState: false
    })
  }

  // submission for drops
  onSave() {
    const { address } = { address: this.state.address }

    geocodeByAddress(address, (err, { lat, lng }) => {
      if (err) { console.log('error!', err) }
      const key = GOOGLE_API_KEY
      let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`

      axios
        .get(url)
        .then(reponse => {
          console.log('what is reponse? ', reponse)
          console.log('what is the props? ', this.props)
          console.log('current state in onSave? ', this.state)
          let dropInformation = {
            title: this.state.title,
            file: 'null',
            message: this.state.message,
            lat: lat,
            lng: lng,
            ownerID: 1, // requires AUTH0 service to be up and running
            receiverID: 2 // requires AUTH0 service to be up and running
          }
          axios
            .post('http://localhost:3000/deadDrops', qs.stringify(dropInformation))
            .then(reponse => {
              console.log('axios post has successfully posted to db ', reponse)
            })
            .catch(err => {
              if (err) { console.log(err) }
            })
        })
        .catch(err => {
          if (err) { console.log(err) }
        })
    })
    this.close();
  }


  render() {
    const cssClasses = {
      root: 'form-group',
      input: 'form-control',
      autocompleteContainer: 'my-autocomplete-container'
    }
    const myStyles = {
      input: { width: '100%' },
      autocompleteContainer: { backgroundColor: 'green' },
      autocompleteItem: { color: 'black' },
      autocompleteItemActive: { color: 'blue' }
    }

    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div>
        <strong>{formattedSuggestion.mainText}</strong>{' '}
        <small>{formattedSuggestion.secondaryText}</small>
      </div>
    )
    return (
      <div>
        <Modal show={this.props.modalClicked} onHide={() => { this.props.toggleModal() }}>
          <Modal.Header closeButton>Add a new Drop</Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup>
                <ControlLabel>Title of the drop</ControlLabel>
                <FormControl
                  name="title"
                  onChange={this.handleInputchange}
                  componentClass="input"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Where would you like to place your drop?</ControlLabel>
                <PlacesAutocomplete
                  value={this.state.address}
                  onChange={this.handleAddressChange}
                  autocompleteItem={AutocompleteItem}
                  classNames={cssClasses}
                  styles={myStyles}
                  placeholder={"Search Places..."}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Who would you like to send this to?</ControlLabel>
                <FormControl
                  name="receiverFirstName"
                  onChange={this.handleInputchange}
                  componentClass="input"
                />
                <FormControl
                  name="receiverLastName"
                  onChange={this.handleInputchange}
                  componentClass="input"
                />
              </FormGroup>
              {this.state.receiverResults.length ? 
                this.state.receiverResults.map((item) => (
                  <SingleUserView data={item}/> 
                )) :
                '' }
              <FormGroup>
                <ControlLabel>File Upload:</ControlLabel>
                <Dropzone
                  onDrop={this.onDrop}
                  name="uploadState">
                  {this.state.uploadState === true ?
                    <div style={{ cursor: 'pointer' }} className="centerThis"> File Successfully Uploaded! </div> :
                    <div style={{ cursor: 'pointer' }} className="centerThis">Drop Files Here</div>}
                </Dropzone>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Upload what you would like to place here:</ControlLabel>
                <FormControl
                  name="message"
                  onChange={this.handleInputchange}
                  componentClass="input"
                />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-primary" onClick={() => { this.props.toggleModal(); this.onSave() }}>Save</Button> :
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default CreateDropModal;

