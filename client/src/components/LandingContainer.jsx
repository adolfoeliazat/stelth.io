import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';
import { Button, Col, Grid, Row, Image } from 'react-bootstrap';
import ipadImg from '../../public/images/ipad.png'


class LandingContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="landing-page">
        <Parallax className="parallax-1" bgImage="./images/stelthnight.png" strength={100}>
          <div>
            {setInterval(() => {
              <div className="location-drop animated fadeOutDown infinite">
                <Image source="../../public/images/locationMarkerOutline.png" style={{ height: 20, left: Math.random() * 1000 }}></Image>
              </div>
            }, 3000)}
          </div>
          <div className="parallax-1-container">Digital dead drops made dead easy. (And fun)</div>
          <Grid className="parallax-grid">
            <Row>
              <Col xs={6} md={4}>
                <div className="animated fadeInDown pGrid pGrid-1" style={{ textAlign: 'center' }}>
                  <h3> Create Dead Drops</h3>
                  <h5 className="pGrid-text">Use our secure web client to send messages for people all over the world. With the added location parameter, you can ensure ony the right people get your message.</h5>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div className="animated fadeInDown pGrid pGrid-2" style={{ textAlign: 'center' }}>
                  <h3> Pick Up Drops</h3>
                  <h5 className="pGrid-text">If someone has created a drop for you, download our mobile client and find out where they've placed hidden trasures for you.</h5>
                </div>
              </Col>
              <Col xsHidden md={4}>
                <div className="animated fadeInDown pGrid pGrid-3" style={{ textAlign: 'center' }}>
                  <h3> Use your imagination</h3>
                  <h5 className="pGrid-text">From sending secure information, creating a scavenger hunt, or bringing people together at a specific location, the possibilities are endless!</h5>
                </div>
              </Col>
            </Row>
          </Grid>
        </Parallax>
        <Parallax className="parallax-2" strength={400}>
          <Grid>
            <Row>
              <Col xs={6} md={6}>
                <div className="parallax-2-container">
                  <h3> Use your imagination</h3>
                  <h5 className="parallax-2-text">From sending secure information, creating a scavenger hunt, or bringing people together at a specific location, the possibilities are endless!</h5>
                </div>
              </Col>
              <Col>
                <div className="device-container">
                  <img className="iphone-image" src='./images/iphone.png'></img>
                  <img className="ipad-image" src='./images/ipad.png'></img>
                </div>
              </Col>
            </Row>
          </Grid>
        </Parallax>
        <Parallax className="parallax-3" strength={400}>
          <div>
            HAi
          </div>
        </Parallax>
      </div >
    )
  }
}

export default LandingContainer;
