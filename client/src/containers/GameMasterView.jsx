import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import CreateDropModal from '../components/CreateDropModal.jsx'
import MapContainer from './mapContainer.jsx'
import DropList from './DropList.jsx'
import { connect } from 'react-redux'
import * as actions from '../redux/Actions.js'
import axios from 'axios'
import { bindActionCreators } from 'redux'


@connect((state) => ({}), (dispatch) => ({
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
    this.props.action.checkLogin() // check is Auth0 lock is authenticating after login callback
    this.getDropLocations()
  }

  toggleModal() {
    this.setState({ modalClicked: !this.state.modalClicked })
  }

  // axios call to db for drops then store in react state
  getDropLocations() {
    // TODO: filter by users
    // let authID = this.props.auth.profile.user_id.split('|')[1]
    axios
      // .get(`http://localhost:3000/deadDrops?ownerID=${authID}`)
      .get('http://localhost:3000/deadDrops')
      .then((result) => {
        this.props.action.storeMarkers(result)
      })
      .catch((err) => { console.log(err) })
  }

  render() {
    return (
      <div className="gamemaster-view">
        <MapContainer />
        <div className="drop-list">
          <DropList />
        </div>
        <div className='newdrop-button'>
          <Button onClick={() => this.toggleModal()}> Create New Drop </Button>
        </div>
        {this.state.modalClicked ? <CreateDropModal toggleModal={this.toggleModal} modalClicked={this.state.modalClicked} /> : ''}
      </div>
    )
  }
}

export default GameMasterView;
