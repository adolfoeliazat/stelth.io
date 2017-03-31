import React from 'react';
import { Button, Modal, Header, Body, Footer } from 'semantic-ui-react'

// modal for creating a deaddrop on web client
class CreateDropModal extends React.Component {
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
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>Add a new Drop</Modal.Header>
          <Modal.Body >
            <p>What's going on?</p>
          </Modal.Body>
          <Modal.Footer>
            <button>CLOSE</button>
          </Modal.Footer>
        </Modal>
    )
  }
}

export default CreateDropModal;


