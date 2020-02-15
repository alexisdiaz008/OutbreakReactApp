import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class OutBreaksContainer extends Component {
  render() {
  	return (
  	  <Map
  	    google={this.props.google}
  	    zoom={14}
  	    className="map-styles"
  	    initialCenter={{
  	     lat: -1.2884,
  	     lng: 36.8233
  	    }}
  	  />
  	);
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC3BvbfnFWp6zOki3512oul6Jb0RME_Sj8'
})(OutBreaksContainer);