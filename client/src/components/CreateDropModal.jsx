import React, { Component } from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

// modal for creating a deaddrop on web client
class CreateDropModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    }
    this.close = this.close.bind(this)
  }

  close() {
    var self = this;
    self.setState({ showModal: false })
  }

  render() {
    return (
      <div>
        {console.log('testing')}
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>Add a new Drop</Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup>
                <ControlLabel>Title</ControlLabel>
                <FormControl
                  name="formTitle"
                  onChange={this.handleInputchange}
                  componentClass="input"
                />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-primary" onClick={this.addUserItinerary}>Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default CreateDropModal;



          /*<Modal.Footer>
            <button>CLOSE</button>
          </Modal.Footer>*/
          // {/*<Modal.Body >
          //   {/*<p>What's going on?</p>*/}
          // </Modal.Body>*/}