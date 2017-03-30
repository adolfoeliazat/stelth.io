import React, { Component } from 'react'
import { Button, Header } from 'semantic-ui-react'
import { Modal } from 'react-bootstrap'

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
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header>Add a new Drop</Modal.Header>
        <Modal.Body >
          <Header>Data Upload</Header>
          <p>Upload your files here.</p>
        </Modal.Body>
      </Modal>
    )
  }
}

export default CreateDropModal;


