import React, { Component } from 'react';
// import { Button, Header } from 'semantic-ui-react'
import { Button, Modal, ControlLabel, Header } from 'react-bootstrap';

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
      <button type="button" class="btn btn-default" aria-label="Left Align">
        <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
      </button>

      <button type="button" class="btn btn-default btn-lg">
        <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
      </button>
      </div>

      /*<Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header>Add a new Drop</Modal.Header>
        <Modal.Body >
          <p>What's going on?</p>
        </Modal.Body>
        <Modal.Footer>
          <button>CLOSE</button>
        </Modal.Footer>
      </Modal>*/
    )
  }
}

export default CreateDropModal;


