import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';
import { Button, Col, Grid, Row, Image } from 'react-bootstrap';


class LandingContainer extends Component {
  constructor(props) {
    super(props)
  }

  gettingStarted() {
    // console.log('sup')
  }

  render() {
    return (
      <div className="landing-page">
        <Parallax bgImage="./images/landing1.jpg" strength={600}>
          <div className="parallax-bg-image1">
            <Image style={{ margin: 'auto', height: 190, width: 680 }} src='./images/stelthLogoWhite.png' />
          </div>
        </Parallax>
      </div>

    )
  }
}

export default LandingContainer;
