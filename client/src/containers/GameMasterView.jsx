import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import CreateDropModal from '../components/CreateDropModal.jsx'
import MapContainer from './mapContainer.jsx'
import { connect } from 'react-redux'
import { actions } from '../redux/Actions.js'

@connect((state) => ({
    greeting: state.greeting,
    name: state.name,
  }), {
    changeName: actions.changeName
  }
)

class GameMasterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalClicked: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState({ modalClicked: !this.state.modalClicked })
  }

  render() {
    return(
      <div className="gamemaster-view">
        <MapContainer />
        <Button onClick={ () => {this.props.changeName() } }> Create New Drop </Button>
        {this.state.modalClicked ? <CreateDropModal toggleModal={this.toggleModal} modalClicked={this.state.modalClicked}/> : ''}
      </div>
    )
  }
}

export default GameMasterView;
