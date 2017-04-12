import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'

@connect((state) => ({
    markers: state.markers
  }), ({}))

class DropList extends Component {
  constructor(props) {
    super(props)
    // console.log(this.props.markers)
  }

  render() {
    {console.log('droplist render')}
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
