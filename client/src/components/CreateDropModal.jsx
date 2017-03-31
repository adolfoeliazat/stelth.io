import React from 'react';
import { Button, Modal, Header, Body, Footer } from 'semantic-ui-react'
// import { Button, Modal, ControlLabel, Header } from 'react-bootstrap';

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
    console.log("this is modal ", Modal)
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>Add a new Drop</Modal.Header>
          <Modal.Body >
            <p>What's going on?</p>
          </Modal.Body>
          <Modal.Footer>
            <button>CLOSE</button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default CreateDropModal;


