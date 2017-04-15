import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'

@connect((state) => ({
    markers: state.markers
  }), ({}))

class DropList extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div className="drop-list-component">
        <Card>
          <Card.Content>
            <Card.Header>
              Active Drops
            </Card.Header>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default DropList
