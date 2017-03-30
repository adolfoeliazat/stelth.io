import React from 'react';

class Map extends React.Component {
  componentDidMount() {
    window.map = new google.maps.Map(this.refs.mapCanvas, {
      zoom: 13,
      center: {
        lat: 33.9759, 
        lng: -118.3907 
      }
    })
  }

  render() {
    return(
      <div className="map" ref="mapCanvas"></div>
    )
  }
}

export default Map;
