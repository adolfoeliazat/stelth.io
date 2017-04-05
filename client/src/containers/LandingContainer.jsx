import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class LandingContainer extends Component {
  constructor(props) {
    super(props)
  }

  gettingStarted() {
    console.log('testing commits')
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">STELTH.io</h1>
            <p className="lead">Digital dead-drops made dead easy (and fun)</p>
            <Button className="btn btn-primary" onClick={this.gettingStarted}>Get Started</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingContainer;
