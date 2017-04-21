import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';
import { Button, Col, Grid, Row, Image } from 'react-bootstrap';

class LandingContainer extends Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   createFallingDrops()
  // }

  // randomRange(min, max) {
  //   return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  // }

  // createFallingDrops() {
  //   let dropLeft = this.randRange(0,1600);
  //   let dropTop = this.randRange(-1000,1400);
  // }

  render() {
    return (
      <div className="landing-page">
        <Parallax className="parallax-1" bgImage="./images/stelthnight.png" strength={100}>
          <div className="falling-drop1">
            <img src="./images/location-purple.png" style={{ height: 20 }} className="fd1"/>
          </div>
          <div className="falling-drop2">
            <img src="./images/locationMarkerOutline.png" style={{ height: 20 }} className="fd2"/>
          </div>
          <div className="falling-drop3">
            <img src="./images/location-purple2.png" style={{ height: 20 }} className="fd3"/>
          </div>
          <div className="falling-drop4">
            <img src="./images/location-red.png" style={{ height: 20 }} className="fd4"/>
          </div>
          <div className="falling-drop5">
            <img src="./images/location-red2.png" style={{ height: 20 }} className="fd5"/>
          </div>
          <div className="falling-drop6">
            <img src="./images/locationMarkerOutline.png" style={{ height: 20 }} className="fd6"/>
          </div>
          <div className="parallax-1-container">Digital dead drops made dead easy.</div>
          <Grid className="parallax-grid">
            <Row>
              <Col xs={6} md={4}>
                <div className="animated fadeInDown pGrid pGrid-1" style={{ textAlign: 'center' }}>
                  <h3 className="pGrid-header"> 
                    <img style={{ width: 35 }} src="./images/desktop.png" />
                    {'    Create Dead Drops'}
                  </h3>
                  <h5 className="pGrid-text">Use our secure web client to send messages for people all over the world. With the added location parameter, you can ensure ony the right people get your message.</h5>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div className="animated fadeInDown pGrid pGrid-2" style={{ textAlign: 'center' }}>
                  <h3 className="pGrid-header"> 
                    <img className="pGrid-icon" src="./images/pickup.png"/>
                    {'           Pick Up Drops'}
                  </h3>
                  <h5 className="pGrid-text">If someone has created a drop for you, download our mobile client and find out where they've placed hidden trasures for you.</h5>
                </div>
              </Col>
              <Col xsHidden md={4}>
                <div className="animated fadeInDown pGrid pGrid-3" style={{ textAlign: 'center' }}>
                  <h3 className="pGrid-header"> 
                    <img className="pGrid-icon" src="./images/lightbulb.png" />
                      {'    Use your imagination'}
                  </h3>
                  <h5 className="pGrid-text">From sending secure information, creating a scavenger hunt, or bringing people together at a specific location, the possibilities are endless!</h5>
                </div>
              </Col>
            </Row>
          </Grid>
        </Parallax>
        <Parallax className="parallax-2" strength={400}>
          <Grid>
            <Row>
              <Col xs={4} md={4}>
                <div className="parallax-2-container">
                  <h3> Use your imagination</h3>
                  <h5 className="parallax-2-text">From sending secure information, creating a scavenger hunt, or bringing people together at a specific location, the possibilities are endless!</h5>
                </div>
              </Col>
              <Col>
                <div className="device-container">
                  <img className="iphone-image" src='./images/iphoneNav.png'></img>
                  <img className="ipad-image" src='./images/ipadFiller.gif'></img>
                </div>
              </Col>
            </Row>
          </Grid>
        </Parallax>
        <Parallax className="parallax-3" strength={400}>
          <div className="parallax-3-container">
            <h3>Download our free app in the App Store</h3>
            <img src="./images/downloadFromAppStore.png" className="app-store"/>
            <div className="info"> 
              <Grid>
                <Row>
                  <Col xs={4} md={3} className="info-col">&copy; STELTH 2017</Col>
                  <Col xs={4} md={3} className="info-col"> 
                    Alexandre Kim
                    <a href="https://www.github.com/jinhwanee93">
                      <img src="./images/github.png" className="github" />                  
                    </a>
                  </Col>
                  <Col xs={4} md={3} className="info-col"> Regina Lee
                    <a href="https://www.github.com/reginavlee">
                      <img src="./images/github.png" className="github" />                  
                    </a>
                  </Col>
                  <Col xsHidden md={3}> Armen Rostamian
                    <a href="https://www.github.com/armenr">
                      <img src="./images/github.png" className="github" />                  
                    </a>             
                  </Col>
                </Row>
              </Grid>
            </div>
          </div>
        </Parallax>
      </div >
    )
  }
}

export default LandingContainer;
