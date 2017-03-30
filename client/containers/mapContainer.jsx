import React from 'react';

class Map extends React.Component {
  componentDidMount() {
    window.map = new google.maps.Map(this.refs.mapCanvas, {
      zoom: 5,
      center: {lat: -25.363, lng: 131.044 }
    })
  }

  render() {
    return(
      <div className="map" ref="mapCanvas"></div>
    )
  }
}

export default Map;
