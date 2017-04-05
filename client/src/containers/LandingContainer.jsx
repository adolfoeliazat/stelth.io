import React, { Component } from 'react'

class LandingContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">STELTH.io</h1>
            <p className="lead">Digital dead-drops made dead easy (and fun)</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingContainer;
