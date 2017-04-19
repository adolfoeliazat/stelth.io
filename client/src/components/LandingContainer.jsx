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
        <Parallax className="parallax-2" strength={600}>
          <div className="parallax-2-container">lalalalala</div>
        </Parallax>
      </div>
    )
  }
}

export default LandingContainer;

            // <Image className="parallax-1-img" src='./images/stelthLogoWhite.png' />