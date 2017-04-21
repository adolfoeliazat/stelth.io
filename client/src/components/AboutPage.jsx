import React from 'react'
import { Col, Grid, Row, Image } from 'react-bootstrap';

const AboutPage = () => (
  <div className="about-page">
    <div className="about-page-content">
      <h2>About.</h2>
      <p>Stelth is an application that digitizes the Dead Drop culture and allows users to securely transfer sensitive data across the globe.</p>
      <p>Stelth is powered by a passionate team of three software engineers who like to get together and build cool things.</p>
      <div className='team-grid'>
        <h3>Meet our team:</h3>
        <Grid >
          <Row>
            <Col xs={4} md={4}>
              <div className="profile-container">
                <img className="profile-image" src='./images/armen.jpg'></img>
                <h3> Armen Rostamian </h3>
                <p> Ramen Master </p>
              </div>
            </Col>
            <Col xs={4} md={4}>
              <div className="profile-container">
                <img className="profile-image" src='./images/regina-img.jpg'></img>
                <h3> Regina Lee </h3>
                <p> Product Owner </p>
              </div>
            </Col>
            <Col xs={4} md={4}>
              <div className="profile-container">
                <img className="profile-image" src='./images/alex.jpg'></img>
                <h3> Alexandre Kim</h3>
                <p> Scrum Lord </p>
              </div>
            </Col>
          </Row>
          </Grid>
      </div>
    </div>
    </div>
    )

export default AboutPage