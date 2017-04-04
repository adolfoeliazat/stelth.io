import React, { Component } from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import Dropzone from 'react-dropzone'
import PlacesAutocomplete from 'react-places-autocomplete';
import axios from 'axios';
import { conenct } from 'react-redux';

class CreateDropModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step1: true,
      step2: false,
      complete: false,
      title: '',
      uploadState: false,
      receiverID: null,
      address: ''
    }
    this.close = this.close.bind(this)
    this.goToNextStep = this.goToNextStep.bind(this)
    this.handleInputchange = this.handleInputchange.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.onSave = this.onSave.bind(this)
    this.onDrop = this.onDrop.bind(this)

    var self = this;
  }

  goToNextStep() {
    if (this.state.step1) {
      this.setState({
        step1: false,
        step2: true,
        complete: false
      })
    } else {
      this.setState({
        step1: false,
        step2: false,
        complete: true
      })
    }
  }
      
  // file upload function
    onDrop() {
    console.log("what is the state? ", this.state.uploadState)
    this.setState({uploadState: true})
  }

  handleInputchange(e) {
    const name = e.target.name;
    const val = e.target.value;

    const obj = {};
    obj[name] = val;
    this.setState(() => {
      console.log('what is happening to title? ', obj)
      return obj;
    })
  }

  handleAddressChange(address) {
    this.setState({ address })
  }

  close() {
    this.setState({ 
      showModal: false,
      uploadState: false 
    })
    console.log('this.state', this.state)
  }

  // submission for drops
  onSave() {
    console.log("this is the state obj? ", this.state)
    console.log("this is the title ", this.state.title)
    console.log("this is the address ", this.state.address)
    console.log("this is the message ", this.state.message)

    axios
      .post('/deadDrops', {
        title: this.state.title,
        message: this.state.message
      })
      .then(data => {
        console.log("what is the data I'm posting? ", data)
      })
      .catch(err => {
        console.error(err)
      })
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
            {this.state.step1 ?
              <form>
                <FormGroup>
                  <ControlLabel>Title of the drop</ControlLabel>
                  <FormControl
                    name="title"
                    onChange={this.handleInputchange}
                    componentClass="input"
                  />
                </FormGroup>
              </form> : ""}
            {this.state.step2 ?
              <form>
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
              </form> : ""}
            {this.state.complete ?
              <form>
                <FormGroup>
                  <ControlLabel>Upload what you would like to place here:</ControlLabel>
                   <FormControl
                    name="message"
                    onChange={this.handleInputchange}
                    componentClass="input"
                  />
                  {/*<Dropzone 
                    onDrop={this.onDrop}
                    name="uploadState">
                    {this.state.uploadState === true ? 
                    <div style={{ cursor: 'pointer' }} className="centerThis"> File Successfully Uploaded! </div> : 
                    <div style={{ cursor: 'pointer' }} className="centerThis">Drop Files Here</div>}
                  </Dropzone>*/}
                </FormGroup>
              </form> : ""}
          </Modal.Body>
          <Modal.Footer>
            {this.state.complete ?
              <Button className="btn btn-primary" onClick={() => { this.props.toggleModal(); this.onSave() }}>Save</Button> :
              <Button className="btn btn-primary" onClick={this.goToNextStep}>Next</Button>
            }
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default CreateDropModal;

