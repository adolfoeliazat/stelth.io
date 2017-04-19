import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';
import { Button, Col, Grid, Row, Image } from 'react-bootstrap';


class LandingContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="landing-page">
        <Parallax className="parallax-1" bgImage="./images/stelthnight.png" strength={400}>
          <div className="parallax-1-container">Dead Drops made dead easy. And Fun.</div>
        </Parallax>
        <Parallax className="parallax-2" strength={400}>
          <Grid className="parallax-grid">
            <Row>
              <Col xs={6} md={4}>
                <div className="animated fadeInDown pGrid-1" style={{ textAlign: 'center' }}>
                  <h3> Create Secure Dead Drops</h3>
                  <h5>Send secret message bruh.</h5>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div className="animated fadeInDown pGrid-1" style={{ textAlign: 'center' }}>
                  <h3> It's fun yo.</h3>
                  <h5>You gotta do the thing man.</h5>
                </div>
              </Col>
              <Col xsHidden md={4}>
                <div className="animated fadeInDown pGrid-1" style={{ textAlign: 'center' }}>
                  <h3> Step 3 </h3>
                  <h5>Have Fun!</h5>
                </div>
              </Col>
            </Row>
          </Grid>
        </Parallax>
      </div >
    )
  }
}

export default LandingContainer;
