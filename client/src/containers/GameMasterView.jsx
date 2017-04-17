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
    auth: state.auth
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

  // axios call to db for drops then store in react state
  getDropLocations() {
    console.log('this.props', this.props)
    let authID = this.props.auth.profile.user_id.split('|')[1]
    console.log('authid', authID)
    axios
      .get(`http://localhost:3000/deadDrops?ownerID=${authID}`)
      .then((result) => {
        this.props.action.storeMarkers(result.data)
      })
      .catch((err) => { console.log(err) })
  }


  toggleModal() {
    this.setState({ modalClicked: !this.state.modalClicked })
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
