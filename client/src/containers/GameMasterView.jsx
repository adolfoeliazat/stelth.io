import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import CreateDropModal from '../components/CreateDropModal.jsx'
import MapContainer from './mapContainer.jsx'

class GameMasterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalClicked: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState({ modalClicked: true })
  }

  render() {
    return(
      <div className="gamemaster-view">
        <MapContainer />
        <p>wha?</p>
        {console.log("button", this.state.modalClicked)}
        <Button onClick={this.toggleModal}> Create New Drop </Button>
        {this.state.modalClicked ? <CreateDropModal /> : ''}
      </div>
    )
  }
}

export default GameMasterView;
