import React, { Component } from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import Dropzone from 'react-dropzone'
import PlacesAutocomplete from 'react-places-autocomplete';

// modal for creating a deaddrop on web client
class CreateDropModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step1: true,
      step2: false,
      complete: false
    }
    this.close = this.close.bind(this)
    this.goToNextStep = this.goToNextStep.bind(this)
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

  onDrop(files) {
    console.log('Received files: ', files)
  }

  handleInputchange() {
  }

  close() {
    var self = this;
    self.setState({ showModal: false })
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
        {console.log('testing')}
        <Modal show={this.props.modalClicked} onHide={() => { this.props.toggleModal() }}>
          <Modal.Header closeButton>Add a new Drop</Modal.Header>
          <Modal.Body>
            {this.state.step1 ?
              <form>
                <FormGroup>
                  <ControlLabel>Title</ControlLabel>
                  <FormControl
                    name="formTitle"
                    onChange={this.handleInputchange}
                    componentClass="input"
                  />
                </FormGroup>
              </form> : ""}
            {this.state.step2 ?
              <form>
                <FormGroup>
                  <ControlLabel>Upload your files here:</ControlLabel>
                  <Dropzone onDrop={this.onDrop}>
                    <div>Drop files into here</div>
                  </Dropzone>
                </FormGroup>
              </form> : ""}
            {this.state.complete ?
              <form>
                <FormGroup>
                  <ControlLabel>Where would you like to place your drop?</ControlLabel>
                  <PlacesAutocomplete
                    onChange={this.handleInputchange}
                    autocompleteItem={AutocompleteItem}
                    classNames={cssClasses}
                    styles={myStyles}
                    placeholder={"Search Places..."}
                  />
                </FormGroup>
              </form> : ""}
          </Modal.Body>
          <Modal.Footer>
            {this.state.complete ?
              <Button className="btn btn-primary" onClick={() => { this.props.toggleModal() }}>Save</Button> :
              <Button className="btn btn-primary" onClick={this.goToNextStep}>Next</Button>
            }
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default CreateDropModal;

