import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import CreateDropModal from '../components/CreateDropModal.jsx'
import MapContainer from './mapContainer.jsx'
import { connect } from 'react-redux'
import { actions } from '../redux/Reducers.js'

@connect((store) => {
  return {
    greeting: store.greeting,
    name: store.name,
  }
})

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
        {console.log('greeting in game master', this.props.greeting)}
        {console.log('greeting in game master before', this.props.name)}
        <Button onClick={()=>actions.changeName()}> Create New Drop </Button>
        {this.state.modalClicked ? <CreateDropModal toggleModal={this.toggleModal} modalClicked={this.state.modalClicked}/> : ''}
      </div>
    )
  }
}

export default GameMasterView;
