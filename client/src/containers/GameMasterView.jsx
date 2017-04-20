import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
import { Button } from 'semantic-ui-react'
import * as actions from '../redux/Actions.js'
import CreateDropModal from './CreateDropModal.jsx'
import MapContainer from './mapContainer.jsx'
import DropList from './DropList.jsx'

@connect((state) => ({
    auth: state.auth,
    markers: state.markers
  }), (dispatch) => ({
    action: bindActionCreators(actions, dispatch)
  })
)

class GameMasterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalClicked: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

componentDidMount() {
  let authID = this.props.auth.profile.user_id.split('|')[1]
  this.props.action.fetchData(authID)
}

  toggleModal() {
    this.setState({ modalClicked: !this.state.modalClicked })
  }

    componentDidUpdate() {
    console.log("THE SHIT IS THE SHIT IS FUCKING THE SHIT!")
  }

  render() {
    return (
      <div className="gamemaster-view">
        <MapContainer />
        {/*<div className="drop-list">
          <DropList />
        </div>*/}
        <div className='newdrop-button'>
          <Button onClick={() => this.toggleModal()}> Create New Drop </Button>
        </div>
        {this.state.modalClicked ? <CreateDropModal toggleModal={this.toggleModal} modalClicked={this.state.modalClicked} /> : ''}
      </div>
    )
  }
}

export default GameMasterView;
